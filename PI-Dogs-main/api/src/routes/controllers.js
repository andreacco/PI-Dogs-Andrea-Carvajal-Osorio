// acá voy a poner todas mis funciones controladoras de mi back
const axios = require ('axios')
const { API_KEY } = process.env;
const { Dog, Temperament } = require ('../db');


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
            const dogExists = dogsList.filter((d) => d.name.toLowerCase() === dog);
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
            const dogExists = dogsList.find(d => d.id.toString() === id);
            if (dogExists){
            return dogExists;
            // }
        }
        throw Error(`No information found for this dog`)
    };


    const addDog = async (name, minHeight, maxHeight, minWeight, maxWeight, lifeSpan, temperament, imgUrl) => {
        // Va a crear un perro nuevo desde el form de crear perro y guardarlo en la base de datos perro, con la relación con sus temperamentos
        if (!name || !minHeight || !maxHeight || !minWeight || !maxWeight || !temperament) {
            throw Error(`Data required`)
        }
        if (name && minHeight && maxHeight && minWeight && maxWeight && lifeSpan && temperament && imgUrl) {
            const createDog = await Dog.create({
                name, 
                min_height: minHeight, 
                max_height: maxHeight, 
                min_weight: minWeight, 
                max_weight: maxWeight, 
                life_span: lifeSpan,
                image: imgUrl,
                was_created: true,
                temperament,
            });
            const newTemp = await Temperament.findOrCreate({
                    where: { name: temperament }
                });
                return createDog.addTemperament(newTemp);
        }
    };


    const listTemperamentsApi = async () => {
        // Va a pedirle a la Api todos los temperamentos
        // Esos temperamentos los va a guardar en la base de datos 
        // Va a mostrar una lista con todos los temperamentos
        // Así me llega la info:
        //     "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        const temperamentApi = await axios.get(`https://api.thedogapi.com/v1/breeds?API_KEY=${API_KEY}`)
        let temp = await temperamentApi.data.map((d) => d.temperament) // la data me llega como: ["temp 1, temp2, temp3", "temp 4, temp5"...]
        temp = temp.join(", ").split(", ") // los uno todos separandolos por coma y espacio, y luego los pongo en un arreglo cada uno como un string sin contar la coma y el espacio entre ellos.
        console.log(temp.length)

        temp.sort().forEach(dog => {
            Temperament.findOrCreate({
                where: { name: dog }
            })
        });
        const allTemperaments = await Temperament.findAll();
        return allTemperaments;
    };

module.exports = { listDogsApi, listDogsBd, listAllDogs, searchDogs, dogDetail, addDog, listTemperamentsApi }