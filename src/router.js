const express = require('express')

function configureRoutes(expressApp, sequelize) {
    expressApp.use(express.json());

    configureProjectRoutes(expressApp, sequelize)
    configureInterviewsRoutes(expressApp, sequelize)
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

//Create read update delete for Interviuri

function configureInterviewsRoutes(expressApp, sequelize){
    
    //adding a select all Interviews endpoint

    //GET route for interviews
    expressApp.get('/interviews', function(req, res){
        sequelize.models.interview.findAll().then(interviews =>res.json(interviews));
    })
    //DELETE route for interviews
    expressApp.delete('/interviews/:id', function(req, res) {
        sequelize.models.interview.destroy({
            where: {
                ID: req.params.id
            }
        }).then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    })
    //POST route for interviews

    //PUT route for interviews
    expressApp.put('/interviews/:id', function (req, res) {
        const id = req.params.id;
        sequelize.models.candidate.update(req.body, {
            where: {
                ID: id
            }
        }).then(() => res.status(200).send())
            .catch(err => {
                console.log("could not update", err);
                res.status(500).send();
            });
    })
    expressApp.post ('/interview', function(req, res){
        // Create an interview
        const interview = {
            Interview_date: req.body.Interview_date,
            Interview_duration: req.body.Interview_duration,
            Interviewer: req.body.Interviewer
        };

        // Save Interview in the database
        interview.post(interview)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while inserting candidate."
            });
          });
      });

 
    }
module.exports = {
    configureRoutes: configureRoutes
}

