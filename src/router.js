module.exports = {
    configureRoutes: configureRoutes
}

function configureRoutes(expressApp, projectModel) {
    expressApp.get('/hello-world', (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.json({message: 'Hello, World!'});
    });

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
        expressApp.put('/projects/:id', async function(req, res) {
            const id = req.params.id;
            await projectModel.update({ ...req.body  }, {
                where: {
                  id: id
                }
              });
              res.status(200).send();
          });
}

// Change everyone without a last name to "Doe"
