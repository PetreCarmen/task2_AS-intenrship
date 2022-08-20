function createRelationships(sequelize) {
    const {candidate, project, interview, project_candidate} = sequelize.models;
    candidate.belongsToMany(project, {through: project_candidate});
    project.belongsToMany(candidate, {through: project_candidate});
    candidate.hasMany(interview);
}

module.exports = {
    createRelationships: createRelationships
}
