const { Router, response } = require('express');
const axios = require('axios');
const { Dog, Temperament } = require('../db');
const {
    listAllDogs,
    searchDogs,
    dogDetail,
    addDog,
    listTemperamentsApi} = require ('../routes/controllers.js')


const router = Router();

// - [ ] GET /dogs:
//   - Obtener un listado de las razas de perro
//   - Debe devolver solo los datos necesarios para la ruta principal
// - [ ] GET /dogs?name="...":
//   - Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
//   - Si no existe ninguna raza de perro mostrar un mensaje adecuado
router.get('/', async (req, res, next) => {
    const { name } = req.query;
    try {
        if(name) {
            const findDog = await searchDogs(name);
            if(findDog.length) {
                res.status(200).send(findDog);
            } else {
            res.status(404).send("The breed you tried to find doesn't exist! Try to find another one or create it!"); // REVISAR!!!
            }
        }
        const allDogs = await listAllDogs()
        res.status(200).send(allDogs);
    } catch(error) {
        next(error);
    }
});


// - [ ] GET /dogs/{idRaza}:
//   - Obtener el detalle de una raza de perro en particular
//   - Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
//   - Incluir los temperamentos asociados
router.get('/:id', async (req, res, next) => {
    const { id } = req.params
        try {
            res.status(200).send(await dogDetail(id))
        } catch (error) {
            res.status(404).send(error.message)
        }
})

// - [ ] POST /dogs:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
//   - Crea una raza de perro en la base de datos relacionada con sus temperamentos
router.post('/', async (req, res, next) => {
    const { name, minHeight, maxHeight, minWeight, maxWeight, lifeSpan, temperament, imgUrl } = req.body
    try {
        const create = await addDog(name, minHeight, maxHeight, minWeight, maxWeight, lifeSpan, temperament, imgUrl)
        res.status(200).send(create)
    } catch (error) {
        res.status(404).send(error.message)
    }
})



module.exports = router;
