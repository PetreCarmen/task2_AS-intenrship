
const Sequelize = require('sequelize')
  
// Creating new Object of Sequelize
const sequelize = new Sequelize(
    'projectsdb',
    'root',
    'password',  {
  
        dialect: 'mysql',          
        host: 'localhost'
    }
);
  
// Exporting the sequelize object. 
// We can use it in another file
// for creating models
module.exports = sequelize