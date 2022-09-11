const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('temperament', { // dejo que el id me lo cree por default
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

