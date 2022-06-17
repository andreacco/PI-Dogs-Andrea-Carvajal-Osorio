const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, //este sería el autoincrement, me genera un id automatico V4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span_min: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    life_span_max: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: `https://i.pinimg.com/474x/d8/c0/52/d8c0529ad3f1baf0cb17a9534172b948--smiling-animals-smiling-dogs.jpg`
    },
    was_created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  });
};
