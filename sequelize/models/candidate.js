const Sequelize = require('sequelize')

module.exports = {
    defineModel: (sequelize) => {
        sequelize.define('candidate', {
            ID: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },

            Candidate_name: {type: Sequelize.STRING, allowNull: false},
            Email: {type: Sequelize.STRING},
            Start_date: {type: Sequelize.DATE},
            Salary: {type: Sequelize.DECIMAL},
            Candidate_link: {type: Sequelize.STRING},
            Candidate_doc: {type: Sequelize.BLOB},
        })
    }
}