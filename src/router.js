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

    //adding a select all projects endpoint 
    expressApp.get('/projects', function(req, res){
        projectModel.findAll().then(projects =>res.json(projects));
    })

}
