const Sequelize = require('sequelize').Sequelize
const createRelationships = require('./relationships').createRelationships

// Creating new Object of Sequelize
const sequelize = new Sequelize(
    'projectsdb',
    'root',
    'password', {
        dialect: 'mysql',
        host: 'localhost'
    }
);

const modelDefiners = [
    require("./models/candidate"),
    require("./models/interview"),
    require("./models/project"),
    require("./models/project_candidate"),
];

modelDefiners.forEach(modelDefiner => modelDefiner.defineModel(sequelize));
createRelationships(sequelize);


// Exporting the sequelize object. 
// We can use it in another file
// for creating models
module.exports = sequelize
