const { Router } = require('express');
const dogRoutes = require('./dogs.js');
const temperamentRoutes = require('./temperaments.js')
const otherRoutes = require('./others.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogRoutes); // wwwlhsdcihsl/dogs/
router.use('/temperaments', temperamentRoutes);
router.use('/others', otherRoutes);

module.exports = router;
