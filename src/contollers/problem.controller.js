const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error.js');
const BadRequest = require('../errors/badrequest.error.js');

function checkProblemController(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function addProblem(req, res, next) {

    try {
        // throw new NotImplemented('addProblem')
        throw new BadRequest('Problem Name', { missing: ["Problem Name"] })

    }
    catch (error) {
        next(error)
    }
}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function updateProblem(req, res) {
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
