const sum = require('./sum')

test("add 1 + 2 to be equal 3", () => {
    expect(sum(2, 1)).toBe(3)
})