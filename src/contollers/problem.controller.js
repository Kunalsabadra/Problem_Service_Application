const { StatusCodes } = require('http-status-codes');

function checkProblemController(req, res) {
    console.log("Hello")
    return res.json({ message: 'Ping controller is up' })
}

function addProblem(req, res) {

}

function getProblem(req, res) {

}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function deleteProblem(req, res) {
    return res.json({ message: 'Hello delete' })
}

function updateProblem(req, res) {

}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    checkProblemController
}
