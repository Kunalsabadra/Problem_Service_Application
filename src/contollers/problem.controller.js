
function checkProblemController(req, res) {
    console.log("Hello")
    return res.json({ message: 'Ping controller is up' })
}

function addProblem(req, res) {

}

function getProblem(req, res) {

}

function getProblems(req, res) {
    console.log("Hello getProblem")
    return res.json({ message: 'Hello' })
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
