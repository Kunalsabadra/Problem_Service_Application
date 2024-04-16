const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        try {
            //1.Sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);
            console.log("Problem Data", problemData)
            const problem = await this.problemRepository.createProblem(problemData);
            return problem;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        }
        catch (error) {
            throw error;
        }
    }

    async getProblem(problemId) {
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }

    async deleteProblem(problemId) {
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }
}

module.exports = ProblemService;