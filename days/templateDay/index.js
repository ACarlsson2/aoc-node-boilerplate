const { readAsArray } = require("../../utils/fileReader.js")

const getInputFile = ({ isTest }) => {
    const inputFile = isTest ? "/testInput.txt" : "/input.txt"
    return readAsArray({ filePath: __dirname+inputFile })
}

const PartOne = ({ isTest = false } = {}) => {
    const input = getInputFile({ isTest })
    return "🎅"
}

const PartTwo = ({ isTest = false } = {}) => {
    const input = getInputFile({ isTest })
    return "🎅"
}

module.exports = {
    PartOne,
    PartTwo
}