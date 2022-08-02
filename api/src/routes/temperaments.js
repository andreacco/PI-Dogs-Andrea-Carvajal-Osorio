const { Router } = require('express');
const { listTemperamentsApi } = require ('./controllers.js')

const router = Router()

// - [ ] __GET /temperaments:
//   - Obtener todos los temperamentos posibles
//   - En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
router.get('/', async (req, res, next) => {
    res.status(200).send(await listTemperamentsApi());
})

module.exports = router;