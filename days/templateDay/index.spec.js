const { PartOne, PartTwo } = require("./index.js")
const path = require("path")

const dayNumber = path.basename(__dirname)

describe(`Day ${dayNumber} `, () => {
    describe("Part one", () => {
        it("Should give correct output", () => {
            expect(PartOne({ isTest: true })).toEqual("🎅")
        })
    })
    describe("Part two", () => {
        it("Should give correct output", () => {
            expect(PartTwo({ isTest: true })).toEqual("🎅")
        })
    })
})