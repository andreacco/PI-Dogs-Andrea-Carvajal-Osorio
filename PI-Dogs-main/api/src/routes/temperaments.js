const { Router } = require('express');

const router = Router()

// - [ ] __GET /temperaments:
//   - Obtener todos los temperamentos posibles
//   - En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
router.get('/', (req, res, next) => {
    res.send('soy get de temperaments')
})

module.exports = router;