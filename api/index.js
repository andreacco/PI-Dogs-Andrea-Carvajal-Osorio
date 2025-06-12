//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // const server = require('./src/app.js');
// // const { conn } = require('./src/db.js');

// // // Syncing all the models at once.
// // conn.sync({ force: true }).then(() => {
// //   server.listen(3001, () => {
// //     console.log('%s listening at 3001'); // eslint-disable-line no-console
// //   });
// // });


// Carga las variables de entorno desde el archivo .env
// require('dotenv').config(); 

// const server = require('./src/app.js');
// const { conn } = require('./src/db.js');

// // Sincronizando todos los modelos a la vez.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001, () => {
//     // eslint-disable-next-line no-console
//     console.log('%s listening at 3001'); 
//   });
// });
require('dotenv').config(); 

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const syncOptions = { force: process.env.NODE_ENV !== 'production' }; // Solo force: true en desarrollo

conn.sync(syncOptions).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    // eslint-disable-next-line no-console
    console.log(`%s listening at ${process.env.PORT || 3001}`); 
  });
});