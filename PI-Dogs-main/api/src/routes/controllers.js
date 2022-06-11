// acá voy a poner todas mis funciones controladoras de mi back
const axios = require ('axios')
const { API_KEY } = process.env;
const { Dog, Temperament } = require ('../db');
require('dotenv').config();


// - [ ] GET /dogs:
//   - Obtener un listado de las razas de perro
//   - Debe devolver solo los datos necesarios para la ruta principal
    const listDogsApi = async () => {
        // Va a solicitar a la Api la información de los perros y al obtenerla, solo va a devolver los datos necesarios para el home.
        // Este es el objeto que me llega (hay más datos, pero este está solo con los datos que necesito):
        //     "weight": {
        //     "metric": "3 - 6"
        //     },
        //     "height": {
        //     "metric": "23 - 29"
        //     },
        //     "id": 1,
        //     "name": "Affenpinscher",
        //     "life_span": "10 - 12 years",
        //     "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        //     "image": {
        //     "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
        //     }
        const link = await axios.get(`https://api.thedogapi.com/v1/breeds?API_KEY=${API_KEY}`)
        const dog = await link.data.map(d => {
            return {
                id: d.id,
                name: d.name,
                min_height: Number(d.height.metric.slice(0, 2)), // que extraiga empezando en 0 y terminando en 2, res--> 23
                max_height: Number(d.height.metric.slice(4)), // que extraiga desde 4 y terminando en arr.lenght, res --> 29
                min_weight: Number(d.weight.metric.slice(0, 2)),
                max_weight: Number(d.weight.metric.slice(4)),
                life_span: d.life_span,
                temperament: d.temperament,
                img: d.image.url
            }
        });
        return dog;
    };
    
    const listDogsBd = async () => {
        // Va a obtener la información de los perros alojado en la base de datos
        return await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        })
    };


    const listAllDogs = async () => {
        // Va a concatenar los datos de listDogsApi y listDogsBd y mostrarlos.
        const apiDogs = await listDogsApi();
        const dbDogs = await listDogsBd();
        const completeInfo = apiDogs.concat(dbDogs).sort((a, b) => a.name > b.name ? 1 : -1);
        // console.log(completeInfo);
        return completeInfo;
    };


    const searchDogs = async (dog)  => {
        // Va a buscar un perro en la lista completa de perros con la palabra que entra por parámetros
        // si el perro no existe, debo enviar un mensaje de error
        const dogsList = await listAllDogs();
        // if (dog) {
            const dogExists = dogsList.filter((d) => d.name.toLowerCase().includes(dog.toLowerCase())); // hago un includes ara que al buscar por nombre, me traiga todos los perros que concidan con lo que se busca y no sea una busqueda exacta por nombre, luego me aseguro de que concidan poniendolos en letras minusculas ambos
            if (dogExists) {
                return dogExists
            }
            // throw Error ("The breed you tried to find doesn't exist! Try to find another one or create it!")
        // } else {
        //     throw Error ("Type a valid dog Breed!")
        // }
    };


    const dogDetail = async (id) => {
        // Va a mostrar el detalle de un perro según su id obteniendo los perros de la lista completa
        // solo muestra los siguientes datos: 
        // "weight": {
        //     "metric": "3 - 6"
        //     },
        //     "height": {
        //     "metric": "23 - 29"
        //     },
        //     "id": 1,
        //     "name": "Affenpinscher",
        //     "life_span": "10 - 12 years",
        //     "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        //     "image": {
        //     "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
        //     }
        const dogsList = await listAllDogs()
        // if (id) {
            const dogExists = dogsList.find(d => d.id.toString() === id); // el id que entra por parametros es un string y el que me trae la api es un number, esto lo soluciono pasando el id de la api a string y alli los comparo
            if (dogExists){
            return dogExists;
            // }
        }
        throw Error(`No information found for this dog`)
    };


    const addDog = async (name, minHeight, maxHeight, minWeight, maxWeight, lifeSpan, temperament, imgUrl, was_created) => {
        // Va a crear un perro nuevo desde el form de crear perro y guardarlo en la base de datos perro, con la relación con sus temperamentos
        if (!name || !minHeight || !maxHeight || !minWeight || !maxWeight || !temperament) {
            throw Error(`Data required`)
        }
        else {
            const createDog = await Dog.create({
                name: name, 
                min_height: minHeight, 
                max_height: maxHeight, 
                min_weight: minWeight, 
                max_weight: maxWeight, 
                life_span: lifeSpan + " years",
                image: imgUrl,
                was_created: true
            });
            const newTemp = await Temperament.findAll({
                    where: { name: temperament }, // aquí busco todos los temperamentos que coincidan con os que ya tengo en mi base de datos y los que me entran por parametro
                });
                return await createDog.addTemperament(newTemp); // ahora le digo que le agregue el temperamento al perro que cree arriba con los temperamentos en parametros
        }
    };


    const listTemperamentsApi = async () => {
        // Va a pedirle a la Api todos los temperamentos
        // Esos temperamentos los va a guardar en la base de datos 
        // Va a mostrar una lista con todos los temperamentos
        // Así me llega la info:
        //     "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        const temperamentApi = await listDogsApi();
        let temp = temperamentApi.map((d) => d.temperament) // la data me llega como: ["temp 1, temp2, temp3", "temp 4, temp5"...] 
        // console.log(temp)
        temp = await temp.join(", ").split(", ").sort() // los uno todos separandolos por coma y espacio, y luego los pongo en un arreglo cada uno como un string sin contar la coma y el espacio entre ellos.
        // console.log(temp)
        let noRepeat = [];
        for (let i = 0; i < temp.length; i++) {
            const currentTemp = temp[i];
            if(!noRepeat.includes(currentTemp)) {
                noRepeat.push(currentTemp)
            }
        }
        let fullTemps = noRepeat.filter(Boolean) // elimino los strings vacios de mi array
        // console.log(fullTemps)
        // console.log(fullTemps.length)

        // fullTemps.forEach( async name => {
        //     await Temperament.create({ name })
        // });

        // const allTemperaments = await Temperament.findAll()

        fullTemps = fullTemps.map(temper => ({ name: temper }));
        
        const allTemperaments = await Temperament.bulkCreate(fullTemps);
        // console.log(allTemperaments)
        return allTemperaments;
    };

module.exports = { listDogsApi, listDogsBd, listAllDogs, searchDogs, dogDetail, addDog, listTemperamentsApi }