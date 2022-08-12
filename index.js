const startApplication = require('./src/app');

startApplication();

// Importing the database model
const sequelize = require('./utils/database')

// Importing the user model
const Project = require('./models/project')

// Creating all the tables defined in user
sequelize.sync()