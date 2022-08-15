const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const Project = sequelize.define('project', {
   ID:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
   },

   Project_no: { type: Sequelize.STRING, allowNull:false },
   Project_short_description: { type: Sequelize.STRING },
   Request_date: { type: Sequelize.DATE },
   Project_start_date: { type: Sequelize.DATE },
   Project_duration: { type: Sequelize.INTEGER },
   Project_currency: { type: Sequelize.STRING },
   Client: { type: Sequelize.STRING },
   Working_location: { type: Sequelize.STRING },
   Travel_required: { type: Sequelize.STRING },
   Team_members: { type: Sequelize.STRING },
   Working_hours: { type: Sequelize.STRING },
   Mandatory_skills: { type: Sequelize.STRING },
   Nice_to_have_skills: { type: Sequelize.STRING },
   To_Do: { type: Sequelize.STRING },

})
module.exports = Project