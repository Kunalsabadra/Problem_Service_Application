const express = require('express')

const { problemController } = require("../../contollers")

const problemRouter = express.Router();

problemRouter.get('/:id', problemController.getProblem);

problemRouter.get('/', problemController.getProblems);

problemRouter.post('/', problemController.addProblem)

problemRouter.delete('/:id', problemController.deleteProblem)

problemRouter.put('/:id', problemController.updateProblem);

problemRouter.get('/test', problemController.checkProblemController)

module.exports = problemRouter;