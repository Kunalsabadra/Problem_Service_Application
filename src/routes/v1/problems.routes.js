const express = require('express')

const { ProblemController } = require("../../contollers")

const problemRouter = express.Router();

problemRouter.get('/:id', ProblemController.getProblem);

problemRouter.get('/', ProblemController.getProblems);

problemRouter.post('/', ProblemController.addProblem)

problemRouter.delete('/:id', ProblemController.deleteProblem)

problemRouter.put('/:id', ProblemController.updateProblem);

problemRouter.get('/test', ProblemController.checkProblemController)

module.exports = problemRouter;