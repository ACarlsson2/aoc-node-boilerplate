const fs = require("fs")
console.log("Welcome to Advent of code 2021 🎅")
const day = process.argv[2]
if (!day) {
    console.log("Please enter which day you want to run with by passing the day number as an argument")
    process.exit()
}

const dayPath = `./days/${day}/index.js`

if (fs.existsSync(dayPath)) {
    import(dayPath).then(({ PartOne, PartTwo }) => {
        console.log("🎅 Part 1:", PartOne())
        console.log("🤶 Part 2:", PartTwo())
    })
} else {
    console.log(`Day ${day} is not yet implemented`)
}

