const express = require('express')

function configureRoutes(expressApp, sequelize) {
    expressApp.use(express.json());

    configureProjectRoutes(expressApp, sequelize)
}

function configureProjectRoutes(expressApp, sequelize) {
    //adding an endpoint which can return a project based on a given project id
    expressApp.get('/project/:id',
        (req, res) => {
            const id = req.params.id;
            console.log("id", id);
            sequelize.models.project.findByPk(id).then(project => {
                res.setHeader("Content-Type", "application/json");
                res.json(project["dataValues"]);
            }).catch((err) => res.status(404).send());
        });
    // 5-Add an endpoint for updating an existing project based on its id
    expressApp.put('/project/:id', function (req, res) {
        const id = req.params.id;
        sequelize.models.project.update(req.body, {
            where: {
                ID: id
            }
        }).then(() => res.status(200).send())
            .catch(err => {
                console.log("could not update", err);
                res.status(500).send();
            });
    });

    //delete
    expressApp.delete('/project/:id', function(req, res) {
        sequelize.models.project.destroy({
            where: {
                ID: req.params.id
            }
        }).then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    })

    //adding a select all projects endpoint
    expressApp.get('/projects', function(req, res){
        sequelize.models.project.findAll().then(projects =>res.json(projects));
    })
}

module.exports = {
    configureRoutes: configureRoutes
}
