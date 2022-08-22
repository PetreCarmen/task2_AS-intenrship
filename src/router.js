const express = require('express')

function configureRoutes(expressApp, sequelize) {
    expressApp.use(express.json());

    configureProjectRoutes(expressApp, sequelize)
    configureCandidatesRoutes(expressApp, sequelize)
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
 

function configureCandidatesRoutes(expressApp, sequelize){
    
    //GET route for candidates
    expressApp.get('/candidates', function(req, res){
        sequelize.models.candidate.findAll().then(candidates =>res.json(candidates));
    })

    //POST route for candidates
    expressApp.post ('/candidate', function(req, res){
        // Validate request
        if (!req.body.Candidate_name) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
          return;
        }
        // Create a candidate
        const candidate = {
            Candidate_name: req.body.Candidate_name,
            Email: req.body.Email,
            Start_date: req.body.Start_date,
            Salary: req.body.Salary,
            Candidate_link: req.body.Candidate_link,
            Candidate_doc: req.body.Candidate_doc
        };

        // Save Candidate in the database
        candidate.post(candidate)
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
    //DELETE route for candidates
    expressApp.delete('/candidate/:id', function(req, res) {
        sequelize.models.candidate.destroy({
            where: {
                ID: req.params.id
            }
        }).then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    })

    //PUT route for candidates
    expressApp.put('/candidate/:id', function (req, res) {
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
    });
}

module.exports = {
    configureRoutes: configureRoutes
}
