const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Project = sequelize.define('project', {
   ID:{

      type:Sequelize.INTEGER,

      // Increment the value automatically
      autoIncrement:true,

      // user_id can not be null.
      allowNull:false,

      // To uniquely identify user
      primaryKey:true
   },

   Project_no: { type: Sequelize.STRING, allowNull:false },
   Project_short_description: { type: Sequelize.STRING },
   Request_date: { type: Sequelize.DATE, allowNull:false },
   Project_start_date: { type: Sequelize.DATE, allowNull:false },
   Project_duration: { type: Sequelize.INTEGER, allowNull:false },
   Project_currency: { type: Sequelize.STRING, allowNull:false },
   Client: { type: Sequelize.STRING, allowNull:false },
   Working_location: { type: Sequelize.STRING, allowNull:false },
   Travel_required: { type: Sequelize.STRING, allowNull:false },
   Team_members: { type: Sequelize.STRING, allowNull:false },
   Working_hours: { type: Sequelize.STRING, allowNull:false },
   Mandatory_slkills: { type: Sequelize.STRING, allowNull:false },
   Nice_to_have_skills: { type: Sequelize.STRING, allowNull:false },
   To_Do: { type: Sequelize.STRING, allowNull:false },

   // Column: Timestamps
   createdAt: Sequelize.DATE,
   updatedAt: Sequelize.DATE,
})
module.exports = Project