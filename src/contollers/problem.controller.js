const { StatusCodes } = require('http-status-codes');
const { ProblemService } = require('../services')
const { ProblemRepository } = require('../repositories')

const problemService = new ProblemService(new ProblemRepository());

function checkProblemController(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

async function addProblem(req, res, next) {
    try {
        console.log("Incoming Request Body", req.body)
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
    }
    catch (error) {
        next(error)
    }
}

async function getProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems();
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully fetched  all the problem',
            error: {},
            data: response
        })
    }
    catch (error) {
        next(error);
    }
}

async function getProblem(req, res, next) {
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: "Successfully fetched a problem",
            data: "problem"
        })
    }
    catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function updateProblem(req, res, next) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    checkProblemController
}
