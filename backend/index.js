const startApplication = require('./src/app');

// Importing the database model
const sequelize = require('./sequelize')

// Creating all the tables defined in project
sequelize.sync({force: true})
    .then(async () => {
        console.log(`Database & tables created!`);

        await sequelize.models.project.bulkCreate([
            {
                Project_no: '2',
                Project_short_description: 'backend project',
                Request_date: '2022-09-11',
                To_do: 'task 2'
            },
            {Project_no: '1', Project_short_description: 'javascript ', Request_date: '2022-08-25'},
            {Project_no: '4', Project_short_description: 'web dev', Request_date: '2022-08-20'},
            {Project_no: '3', Project_short_description: 'node js', Request_date: '2022-09-01'},
            {Project_no: '5', Project_short_description: 'databases', Request_date: '2022-09-02'}
        ]);

        await sequelize.models.candidate.create({Candidate_name: "john"})
        await sequelize.models.project_candidate.create({projectID: 1, candidateID: 1})
    });

startApplication(sequelize);
