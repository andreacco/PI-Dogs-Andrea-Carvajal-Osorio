const {Router} = require ('express')
const { listDogsApi, 
    listDogsBd,
    filterByDescName,
    orderByWeightMin,
    orderByWeightMax, 
    orderByNameAscApi, 
    orderByNameDescApi, 
    orderByNameAscDb, 
    orderByNameDescDb} = require('./controllers')

const router = Router()
// necesito:
// // Una ruta para filtrar por temperamento ----------------------------------> SearchByTemp
// Una ruta para filtrar por razas de la API -------------------------------> listDogsApi
// Una ruta para filtrar por razas de la db --------------------------------> ListDogsBD
// Una ruta para ordenar ascendentemente por peso --------------------------> orderByWeightMin
// Una ruta para ordenar descendentemente por peso -------------------------> orderByWeightMax
// Una ruta para ordenar ascendentemente por nombre (todos los perros) -----> listAllDogs
// Una ruta para ordenar descendentemente por nombre (todos los perros) ----> filterByDescName
// Una ruta para ordenar ascendentemente por nombre de la api --------------> orderByNameAscApi
// Una ruta para ordenar descendentemente por nombre de la api -------------> orderByNameDescApi
// Una ruta para ordenar ascendentemente por nombre de la db ---------------> orderByNameAscDb
// Una ruta para ordenar descendentemente por nombre de la db --------------> orderByNameDescDb

// LO VOY A HACER DESDE EL FRONT PORQUE TENGO QUE HACER AL MENOS UNO EN EL FRONT
// // Una ruta para filtrar por temperamento -------------------------------> SearchByTemp
// // router.get('/searchByTemp', async (req, res, next) => {
// //     const { temperament } = req.query
// //     res.status(200).send(await searchByTemp(temperament))
// // })

// Una ruta para filtrar por razas de la API -------------------------------> listDogsApi
router.get('/filterDogsApi', async (req, res, next) => {
    res.status(200).send(await listDogsApi())
})

// Una ruta para filtrar por razas de la db --------------------------------> ListDogsBD
router.get('/filterDogsDb', async (req, res, next) => {
    res.status(200).send(await listDogsBd())
})

// Una ruta para ordenar ascendentemente por peso --------------------------> orderByWeightMin
router.get('/orderByWeightMin', async (req, res, next) => {
    res.status(200).send(await orderByWeightMin())
})

// Una ruta para ordenar descendentemente por peso -------------------------> orderByWeightMax
router.get('/orderByWeightMax', async (req, res, next) => {
    res.status(200).send(await orderByWeightMax())
})

// Una ruta para ordenar ascendentemente por nombre (todos los perros) -----> listAllDogs
// Una ruta para ordenar descendentemente por nombre (todos los perros) ----> filterByDescName
router.get('/filterByDescName', async (req, res, next) => {
    res.status(200).send(await filterByDescName())
})

// Una ruta para ordenar ascendentemente por nombre de la bd ---------------> orderByNameAscApi
router.get('/orderByNameAscApi', async (req, res, next) => {
    res.status(200).send(await orderByNameAscApi())
})

// Una ruta para ordenar descendentemente por nombre de la bd --------------> orderByNameDescApi
router.get('/orderByNameDescApi', async (req, res, next) => {
    res.status(200).send(await orderByNameDescApi())
})

// Una ruta para ordenar ascendentemente por nombre de la api --------------> orderByNameAscDb
router.get('/orderByNameAscDb', async (req, res, next) => {
    res.status(200).send(await orderByNameAscDb())
})

// Una ruta para ordenar descendentemente por nombre de la api -------------> orderByNameDescDb
router.get('/orderByNameDescDb', async (req, res, next) => {
    res.status(200).send(await orderByNameDescDb())
})

module.exports = router;