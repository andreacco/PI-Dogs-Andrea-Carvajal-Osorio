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
        //                   10 years
        //     "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        //     "image": {
        //     "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
        //     }
        let regex = /(\d+)/g
        const link = await axios.get(`https://api.thedogapi.com/v1/breeds?API_KEY=${API_KEY}`)
        const dog = await link.data.map(d => {
            return {
                id: d.id,
                name: d.name,
                min_height: Number(d.height.metric.slice(0, 2)), // que extraiga empezando en 0 y terminando en 2, res--> 23
                max_height: Number(d.height.metric.slice(4)), // que extraiga desde 4 y terminando en arr.lenght, res --> 29
                min_weight: Number(d.weight.metric.slice(0, 2)),
                max_weight: Number(d.weight.metric.slice(4)),
                life_span_min: Math.min(...d.life_span.match(regex)), // le digo con elregex que busque solo los numeros que matcheen con el string que me trae la api, luego busco el menor y es lo que guarda life_span_min
                life_span_max: Math.max(...d.life_span.match(regex)), // le digo con el regex que busque solo los numeros que matcheen con el string que me trae la api, luego busco el mayor y es lo que guarda life_span_max
                temperaments: d.temperament,
                image: d.image.url
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


    const addDog = async (name, min_height, max_height, min_weight, max_weight, life_span_min, life_span_max, temperaments, image) => {
        // Va a crear un perro nuevo desde el form de crear perro y guardarlo en la base de datos perro, con la relación con sus temperamentos
        console.log(temperaments)
        if(name && min_height && max_height && min_weight && max_weight && temperaments) {
            const createDog = await Dog.create({
                name: name, 
                min_height,
                max_height, 
                min_weight, 
                max_weight, 
                life_span_min,
                life_span_max,
                image
            });
            const newTemp = await Temperament.findAll({
                    where: { name: temperaments }, // aquí busco todos los temperamentos que coincidan con os que ya tengo en mi base de datos y los que me entran por parametro
                });
                console.log(newTemp)
                return await createDog.addTemperament(newTemp); // ahora le digo que le agregue el temperamento al perro que cree arriba con los temperamentos en parametros
        }
        else {
            throw Error(`Data required`)
        }
    };
    
    const listTemperamentsApi = async () => {
        // Va a pedirle a la Api todos los temperamentos
        // Esos temperamentos los va a guardar en la base de datos 
        // Va a mostrar una lista con todos los temperamentos
        // Así me llega la info:
        //     "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        const temperamentApi = await listDogsApi();
        let temp = temperamentApi.map((d) => d.temperaments) // la data me llega como: ["temp 1, temp2, temp3", "temp 4, temp5"...] 
        // console.log(temp)
        temp = await temp.join(", ").split(", ").sort() // los uno todos separandolos por coma y espacio, y luego los pongo en un arreglo cada uno como un string sin contar la coma y el espacio entre ellos.
        // console.log(temp)
        let fullTemps = temp.filter(Boolean) // elimino los strings vacios de mi array
        let temperamentsSet = new Set (fullTemps) // el Set guarda valores unicos en un obj 
        temperamentsSet.forEach(e => {
            Temperament.findOrCreate({
                where: { name: e }
            })
        })
        
        // let noRepeat = [];
        // for (let i = 0; i < temp.length; i++) {
        //     const currentTemp = temp[i];
        //     if(!noRepeat.includes(currentTemp)) {
        //         noRepeat.push(currentTemp)
        //     }
        // }
        // console.log(fullTemps)
        // console.log(fullTemps.length)

        // fullTemps.forEach( async name => {
        //     await Temperament.create({ name })
        // });

        // const allTemperaments = await Temperament.findAll()
        let temperamentsDb =  await Temperament.findAll()

        // fullTemps = fullTemps.map(temper => ({ name: temper }));
        
        // const allTemperaments = await Temperament.bulkCreate(fullTemps);
        // console.log(allTemperaments)
        return temperamentsDb;
    };

    const filterByDescName = async () => {
        let allDogsAsc = await listAllDogs()
        allDogsAsc.sort((a, b) => a.name > b.name ? -1 : 1);
        return allDogsAsc;
    }

    const orderByWeightMin = async () => {
        const allDogsWeight = await listAllDogs();
        let weight = await allDogsWeight.sort((a, b) => {
            if(a.min_weight && b.min_weight)    {
                if(a.min_weight === b.min_weight){
                    if(a.max_weight > b.max_weight) {
                        return 1
                    }
                    else if(a.max_weight < b.max_weight) {
                        return -1
                    }
                } else if (a.min_weight > b.min_weight) {
                    return 1
                    }
                    else {
                        return -1
                    }
            }
            else {
                let minWeightA = !a.min_weight? a.max_weight : a.min_weight
                let maxWeightA = !a.max_weight? a.min_weight : a.max_weight
                let minWeightB = !b.min_weight? b.max_weight : b.min_weight
                let maxWeightB = !b.max_weight? b.min_weight : b.max_weight
                if(minWeightA === minWeightB) {
                    if(maxWeightA > maxWeightB) {
                        return 1
                    }
                    if(maxWeightA < maxWeightB) {
                        return -1
                    }
                    if(minWeightA > minWeightB) {
                        return 1
                    }
                    else {
                        return -1
                    }
                }
            }
        })
        return weight
    }

    const orderByWeightMax = async () => {
        const allDogsWeight = await listAllDogs();
        let weight = allDogsWeight.sort((a, b) => {
            if(a.min_weight && b.min_weight) {
                if(a.max_weight === b.max_weight) {
                    if(a.min_weight > b.min_weight) {
                        return -1
                    }
                    if (a.min_weight < b.min_weight) {
                        return  1
                    }
                }
                else if(a.max_weight > b.max_weight) {
                    return -1
                }
                else {
                    return 1
                }
            }
            // else {
            //     let minWeightA = !a.min_weight? a.max_weight : a.min_weight
            //     let maxWeightA = !a.max_weight? a.min_weight : a.max_weight
            //     let minWeightB = !b.min_weight? b.max_weight : b.min_weight
            //     let maxWeightB = !b.max_weight? b.min_weight : b.max_weight
            //     if(minWeightA === minWeightB) {
            //         if(maxWeightA > maxWeightB){
            //             return -1
            //         }
            //         if(maxWeightA < maxWeightB) {
            //             return 1
            //     }
            //         if(minWeightA > minWeightB) {
            //             return -1
            //     }
            //         else {
            //             return 1
            //         }
            //     }
            // }
        })
        return weight
    }

    // LO VOY A HACER DESDE EL FRONT PORQUE TENGO QUE HACER AL MENOS UNO EN EL FRONT
    // const searchByTemp = async (temperament) => {
    //     const allTemps = await listAllDogs();
    //     let tempFilter = allTemps.filter((d) => d.temperament.includes(temperament))
    //     return tempFilter;
    // }

    const orderByNameAscApi = async () => {
        const allDogsApi = await listDogsApi();
        const ordered = await allDogsApi.sort((a, b) => a.name > b.name ? 1 : -1);
        return ordered;
    }

    const orderByNameDescApi = async () => {
        const allDogsApi = await listDogsApi();
        const ordered = await allDogsApi.sort((a, b) => a.name > b.name ? -1 : 1);
        return ordered;
    }

    const orderByNameAscDb = async () => {
        const allDogsDb = await listDogsBd();
        const ordered = await allDogsDb.sort((a, b) => a.name > b.name ? 1 : -1);
        return ordered;
    }

    const orderByNameDescDb = async () => {
        const allDogsDb = await listDogsBd();
        const ordered = await allDogsDb.sort((a, b) => a.name > b.name ? -1 : 1);
        return ordered;
    }

module.exports = { listDogsApi, listDogsBd, listAllDogs, searchDogs, dogDetail, addDog, listTemperamentsApi, filterByDescName, orderByWeightMin, orderByWeightMax, orderByNameAscApi, orderByNameDescApi, orderByNameAscDb, orderByNameDescDb }