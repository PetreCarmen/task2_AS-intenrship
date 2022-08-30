const express = require('express')

function configureRoutes(expressApp, sequelize) {
    expressApp.use(express.json());

    configureProjectRoutes(expressApp, sequelize);
    configureCandidatesRoutes(expressApp, sequelize);
    configureInterviewsRoutes(expressApp, sequelize);
}

function configureProjectRoutes(expressApp, sequelize) {

    //POST route for candidates
    expressApp.post('/project', function (req, res) {
        // Create a project
        const project = req.body
        // Save Candidate in the database
        sequelize.models.project.create(project)
            .then(result => res.json(result))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while inserting project."
                });
            });
    });
    //adding an endpoint which can return a project based on a given project id
    expressApp.get('/project/:id',
        (req, res) => {
            const id = req.params.id;
            sequelize.models.project.findByPk(id).then(project => {
                res.setHeader("Content-Type", "application/json");
                res.json(project["dataValues"]);
            }).catch((err) => {res.status(404).send(); console.error(err)});
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
                console.error("could not update", err);
                res.status(500).send();
            });
    });

    //delete
    expressApp.delete('/project/:id', function (req, res) {
        sequelize.models.project.destroy({
            where: {
                ID: req.params.id
            }
        }).then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    })

    //adding a select all projects endpoint
    expressApp.get('/projects', function (req, res) {
        sequelize.models.project.findAll().then(projects => res.json(projects));
    })
}


function configureCandidatesRoutes(expressApp, sequelize) {
    //GET route for candidates
    expressApp.get('/candidates', function (req, res) {
        sequelize.models.candidate.findAll()
            .then(candidates => res.json(candidates))
            .catch(err => res.status(500).send(err.message || "could not get candidate"));
    })

    //POST route for candidates
    expressApp.post('/candidate', function (req, res) {
        // Validate request
        if (!req.body.Candidate_name) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        // Create a candidate
        const candidate = req.body

        // Save Candidate in the database
        sequelize.models.candidate.create(candidate)
            .then(result => res.json(result))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while inserting candidate."
                });
            });
    });
    //DELETE route for candidates
    expressApp.delete('/candidate/:id', function (req, res) {
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
                console.error("could not update", err);
                res.status(500).send();
            });
    });

    //GET route for a specific candidate by id
    expressApp.get("/candidate/:id", (req, res) => {
        sequelize.models.candidate.findByPk(req.params.id, {include: sequelize.models.project})
            .then(candidate => res.json(candidate))
            .catch(err => res.status(500).send(err.message || "could not get candidate data"));
    })
}

// Create read update delete for Interviuri
function configureInterviewsRoutes(expressApp, sequelize) {

    //adding a select all Interviews endpoint

    //GET route for interviews
    expressApp.get('/interviews', function (req, res) {
        sequelize.models.interview.findAll().then(interviews => res.json(interviews));
    })

    expressApp.get("/interview/:id", (req, res) => {
        sequelize.models.interview.findByPk(req.params.id)
            .then(interview => res.json(interview))
            .catch(err => res.status(500).send(err.message || "could not obtain interview"));
    })

    //DELETE route for interviews
    expressApp.delete('/interviews/:id', function (req, res) {
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
        sequelize.models.interview.update(req.body, {
            where: {
                ID: id
            }
        }).then(() => res.status(200).send())
            .catch(err => {
                console.error("could not update", err);
                res.status(500).send();
            });
    })
    expressApp.post('/interview', function (req, res) {
        // Create an interview
        const interview = req.body;

        // Save Interview in the database
        sequelize.models.interview.create(interview)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while inserting candidate."
                });
            });
    });


}

module.exports = {
    configureRoutes: configureRoutes
}
