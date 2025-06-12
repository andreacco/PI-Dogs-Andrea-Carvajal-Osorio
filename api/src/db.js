// // require('dotenv').config();
// // const { Sequelize } = require('sequelize');
// // const fs = require('fs');
// // const path = require('path');
// // const {
// //   DATABASE_URL,
// // } = process.env;

// // const sequelize = new Sequelize(DATABASE_URL, {
// //   logging: false, // set to console.log to see the raw SQL queries
// //   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// //   // ADITIONAL CONFIGURATION
// //   dialectOptions: {
// //     ssl: {
// //       require: true,
// //       rejectUnauthorized: false
// //     }
// //   },

// // });
// // const basename = path.basename(__filename);

// // const modelDefiners = [];

// // // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// // fs.readdirSync(path.join(__dirname, '/models'))
// //   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
// //   .forEach((file) => {
// //     modelDefiners.push(require(path.join(__dirname, '/models', file)));
// //   });

// // // Injectamos la conexion (sequelize) a todos los modelos
// // modelDefiners.forEach(model => model(sequelize));
// // // Capitalizamos los nombres de los modelos ie: product => Product
// // let entries = Object.entries(sequelize.models);
// // let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// // sequelize.models = Object.fromEntries(capsEntries);

// // // En sequelize.models están todos los modelos importados como propiedades
// // // Para relacionarlos hacemos un destructuring
// // const { Dog, Temperament } = sequelize.models;

// // // Aca vendrian las relaciones
// // // Product.hasMany(Reviews);
// // Dog.belongsToMany(Temperament, {through: 'dogTemperaments'});
// // Temperament.belongsToMany(Dog, {through: 'dogTemperaments'})

// // module.exports = {
// //   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
// //   conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
// // };

require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DATABASE_URL,
} = process.env;

// Determina si se requiere SSL basado en el entorno
// En producción (por ejemplo, en plataformas como Render, Heroku), se requerirá SSL.
// Para el entorno local, `process.env.NODE_ENV` es usualmente `undefined`
// o se establece explícitamente a 'development', lo que hará que `isProduction` sea `false`.
const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(DATABASE_URL, {
  logging: false, // Establece a console.log para ver las consultas SQL en bruto
  native: false, // Permite a Sequelize usar pg-native para ~30% más de velocidad
  // Configuración adicional para SSL
  dialectOptions: {
    // Si no estamos en producción, no requerimos SSL.
    // Esto es crucial para bases de datos locales que no están configuradas para SSL.
    ...(isProduction ? { // Si isProduction es true, aplica la configuración SSL explícitamente para producción
      ssl: {
        require: true,
        rejectUnauthorized: false // Permite conexiones sin certificados válidos (útil para ciertos proveedores de DB)
      }
    } : { // Si isProduction es false (desarrollo local), desactiva SSL explícitamente
      ssl: false // Esto le dice al driver pg que no use SSL en absoluto.
                 // ¡Este es el cambio clave para el desarrollo local!
    })
  },
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Dog, Temperament } = sequelize.models;

// Acá vendrían las relaciones
Dog.belongsToMany(Temperament, {through: 'dogTemperaments'});
Temperament.belongsToMany(Dog, {through: 'dogTemperaments'})

module.exports = {
  ...sequelize.models, // Para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // Para importar la conexión { conn } = require('./db.js');
};

