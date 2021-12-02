const fs = require("fs")

const readAsArray = ({ filePath, mapper = (val) => val }) => fs.readFileSync(filePath, "utf-8").split("\n").map(mapper)

module.exports = {
    readAsArray,
}