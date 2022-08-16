module.exports = {
    configureRoutes: configureRoutes
}
const express = require('express')

function configureRoutes(expressApp, projectModel) {
    expressApp.use(express.json());

    //adding an endpoint which can return a project based on a given project id
    expressApp.get('/project/:id',
        (req, res) => {
            const id = req.params.id;
            console.log("id", id);
            projectModel.findByPk(id).then(project => {
                res.setHeader("Content-Type", "application/json");
                res.json(project["dataValues"]);
            }).catch((err) => res.status(404).send());
        });
    // 5-Add an endpoint for updating an existing project based on its id
    expressApp.put('/projects/:id', function (req, res) {
        const id = req.params.id;
        projectModel.update(req.body, {
            where: {
                ID: id
            }
        }).then(() => res.status(200).send())
            .catch(err => {
                console.log("could not update", err);
                res.status(500).send();
            });
    });
}
