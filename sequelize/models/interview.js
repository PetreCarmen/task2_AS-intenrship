const Sequelize = require('sequelize')

module.exports = {
    defineModel: (sequelize) => {
        sequelize.define('interview', {
            ID: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },

            Interview_date: {type: Sequelize.DATE},
            Interview_duration: {type: Sequelize.DECIMAL},
            Interviewer: {type: Sequelize.STRING},
        })
    }
}