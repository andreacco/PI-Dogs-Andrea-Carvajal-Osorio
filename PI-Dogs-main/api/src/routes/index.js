const { Router } = require('express');
const dogRoutes = require('./dogs');
const temperamentRoutes = require('./temperaments')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogRoutes); // wwwlhsdcihsl/dogs/
router.use('/temperaments', temperamentRoutes);

module.exports = router;
