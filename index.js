const startApplication = require('./src/app');

// Importing the database model
const sequelize = require('./utils/database')

// Importing the project model
const Project = require('./models/project')

// Creating all the tables defined in project
sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);

    Project.bulkCreate([
        { Project_no: '2', Project_short_description: 'backend project', Request_date: '2022-09-11', To_do: 'task 2' },
        { Project_no: '1', Project_short_description: 'javascript ', Request_date: '2022-08-25' },
        { Project_no: '4', Project_short_description: 'web dev', Request_date: '2022-08-20' },
        { Project_no: '3', Project_short_description: 'node js', Request_date: '2022-09-01' },
        { Project_no: '5', Project_short_description: 'databases', Request_date: '2022-09-02' }
      ]).then(function() {
        return Project.findAll();
      }).then(function(projects) {
        console.log(projects);
      });
  });
startApplication(Project);
