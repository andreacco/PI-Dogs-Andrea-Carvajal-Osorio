// acá voy a poner todas mis funciones controladoras de mi back
const axios = require ('axios')
const { API_KEY } = process.env;
const { Dog, Temperament } = require ('../db');
require('dotenv').config();


// - [ ] GET /dogs:
//   - Obtener un listado de las razas de perro
//   - Debe devolver solo los datos necesarios para la ruta principal
    const listDogsApi = async () => {
        console.log('Iniciando la obtención de datos de perros desde la API externa.');

    try {
        // Paso 1: Obtener la lista de razas de perro desde la API principal
        const breedsResponse = await axios.get('https://api.thedogapi.com/v1/breeds', {
            headers: {
                'x-api-key': API_KEY // Asegúrate de que tu API_KEY esté configurada en .env
            }
        });

        const breeds = breedsResponse.data;        

        // Paso 2: Crear promesas para buscar las imágenes de cada perro en paralelo
        const imagePromises = breeds.map(async (d) => {
            // La API principal devuelve el ID de la imagen en 'd.image' (si es un string).
            // Si ya tiene una URL en 'd.image.url', la usamos directamente.
            // Si no, intentamos obtenerla con el ID.
            const httpsRegex = "^https://[\w.-]+(\.[\w.-]+)+[\w\-\.\?\/=&\#\+\%\~]*/?"
            if (d.reference_image_id && typeof d.reference_image_id === 'string') { // Si d.image es el ID de la imagen
                try {
                    const imageResponse = await axios.get(`https://api.thedogapi.com/v1/images/${d.reference_image_id}`, {
                        headers: {
                            'x-api-key': API_KEY
                        }
                    });
                    return imageResponse.data.url; // Retorna la URL de la imagen
                } catch (imgError) {
                    // Si falla la obtención de una imagen, se registra el error y se retorna una imagen de fallback.
                    console.warn(`No se pudo obtener la imagen para el ID ${d.reference_image_id}: ${imgError.message}`);
                    return 'https://i.pinimg.com/474x/d8/c0/52/d8c0529ad3f1baf0cb17a9534172b948--smiling-animals-smiling-dogs.jpg'; // URL de imagen de fallback
                }
            } else if (d.reference_image_id && d.reference_image_id.match(httpsRegex)) { // Si d.image ya es un objeto con la URL
                return d.reference_image_id;
            }
            // Retorna una imagen de fallback si no hay ID de imagen o URL
            return 'https://i.pinimg.com/474x/d8/c0/52/d8c0529ad3f1baf0cb17a9534172b948--smiling-animals-smiling-dogs.jpg';
        });

        // Paso 3: Esperar a que todas las promesas de imágenes se resuelvan
        const imageUrls = await Promise.all(imagePromises);

        // Paso 4: Mapear los datos originales de los perros, añadiendo la URL de la imagen obtenida
        const dogs = breeds.map((d, index) => {
            const imageUrl = imageUrls[index]; // Asigna la URL de imagen correspondiente

            // Expresión regular para extraer números de cadenas como "10 - 12 years"
            const regex = /(\d+)/g;

            // Parseo robusto de altura (min_height, max_height)
            const [min_height_str, max_height_str] = d.height?.metric?.split(' - ') || [null, null];
            const min_height_val = min_height_str ? Number(min_height_str) : null;
            const max_height_val = max_height_str ? Number(max_height_str) : null;

            // Parseo robusto de peso (min_weight, max_weight)
            const [min_weight_str, max_weight_str] = d.weight?.metric?.split(' - ') || [null, null];
            const min_weight_val = min_weight_str ? Number(min_weight_str) : null;
            const max_weight_val = max_weight_str ? Number(max_weight_str) : null;

            // Parseo robusto de esperanza de vida (life_span_min, life_span_max)
            const lifeSpanNumbers = d.life_span?.match(regex)?.map(Number);
            const life_span_min_val = lifeSpanNumbers && lifeSpanNumbers.length > 0 ? Math.min(...lifeSpanNumbers) : null;
            const life_span_max_val = lifeSpanNumbers && lifeSpanNumbers.length > 0 ? Math.max(...lifeSpanNumbers) : null;

            return {
                id: d.id,
                name: d.name,
                min_height: min_height_val,
                max_height: max_height_val,
                min_weight: min_weight_val,
                max_weight: max_weight_val,
                life_span_min: life_span_min_val,
                life_span_max: life_span_max_val,
                temperaments: d.temperament, // Esto puede ser un string separado por comas
                image: imageUrl // Aquí se usa la URL real de la imagen
            };
        });
        return dogs;

    } catch (error) {
        console.error("Error al obtener datos de la API de perros (listDogsApi):", error.message);
        // Relanza el error para que sea capturado por el manejador de errores de la ruta
        throw new Error("No se pudieron cargar los datos de perros de la API externa.");
    }
        // // // Va a solicitar a la Api la información de los perros y al obtenerla, solo va a devolver los datos necesarios para el home.
        // // // Este es el objeto que me llega (hay más datos, pero este está solo con los datos que necesito):
        // // //     "weight": {
        // // //     "metric": "3 - 6"
        // // //     },
        // // //     "height": {
        // // //     "metric": "23 - 29"
        // // //     },
        // // //     "id": 1,
        // // //     "name": "Affenpinscher",
        // // //     "life_span": "10 - 12 years",
        // // //                   10 years
        // // //     "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        // // //     "image": {
        // // //     "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
        // // //     }
        // // let regex = /(\d+)/g
        // // const link = await axios.get(`https://api.thedogapi.com/v1/breeds?API_KEY=${API_KEY}`)
        // // const dog = await link.data.map(d => {
        // //     return {
        // //         id: d.id,
        // //         name: d.name,
        // //         min_height: Number(d.height.metric.slice(0, 2)), // que extraiga empezando en 0 y terminando en 2, res--> 23
        // //         max_height: Number(d.height.metric.slice(4)), // que extraiga desde 4 y terminando en arr.lenght, res --> 29
        // //         min_weight: Number(d.weight.metric.slice(0, 2)),
        // //         max_weight: Number(d.weight.metric.slice(4)),
        // //         life_span_min: Math.min(...d.life_span.match(regex)), // le digo con elregex que busque solo los numeros que matcheen con el string que me trae la api, luego busco el menor y es lo que guarda life_span_min
        // //         life_span_max: Math.max(...d.life_span.match(regex)), // le digo con el regex que busque solo los numeros que matcheen con el string que me trae la api, luego busco el mayor y es lo que guarda life_span_max
        // //         temperaments: d.temperament,
        // //         image: d.image.url
        // //     }
        // // });
        // // return dog;
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
        // console.log(temperaments) // llega como [ 'Boisterous', 'Athletic', 'Calm', 'Amiable' ] 
        if(name && min_height && max_height && min_weight && max_weight && temperaments) {
            const createDog = await Dog.create({
                name, 
                min_height,
                max_height, 
                min_weight, 
                max_weight, 
                life_span_min,
                life_span_max,
                image: image? image : 'https://i.pinimg.com/474x/d8/c0/52/d8c0529ad3f1baf0cb17a9534172b948--smiling-animals-smiling-dogs.jpg'
            });
            const newTemp = await Temperament.findAll({
                    where: { name: temperaments }, // aquí busco todos los temperamentos que coincidan con os que ya tengo en mi base de datos y los que me entran por parametro
                });
                // console.log(newTemp)
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
        let temp = temperamentApi.map((d) => d.temperaments) // la data me llega como: ["temp 1, temp2, temp3", "temp 4, temp5"...] ---> ""temp 1, temp2, temp3", "temp 4, temp5""  ---> "temp 1", "temp2", "temp3", "temp 4", "temp5" 
        // console.log(temp)
        temp = await temp.join(", ").split(", ").sort() // los uno todos separandolos por coma y espacio, y luego los pongo en un arreglo cada uno como un string sin contar la coma y el espacio entre ellos.
        // console.log(temp)
        let fullTemps = temp.filter(Boolean) // elimino los strings vacios de mi array
        let temperamentsSet = new Set (fullTemps) // el Set guarda valores unicos en un objeto 
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

        let temperamentsDb =  await Temperament.findAll()

        // fullTemps = fullTemps.map(temper => ({ name: temper }));
        
        // const allTemperaments = await Temperament.bulkCreate(fullTemps); // no los tengo que pasar uno por uno porque añade directamente todo mi array a la base de datos en formato objeto con su key value
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