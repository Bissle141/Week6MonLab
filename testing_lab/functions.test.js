const {
    returnTwo,
    greeting, 
    add
} = require('./functions')

test("should return 2", () => {
    expect(returnTwo()).toBe(2)
})

test("should return 'Hello, James.'", () => {
    expect(greeting('James')).toBe('Hello, James.')
})

test("should return 'Hello, Jill.'", () => {
    expect(greeting('Jill')).toBe('Hello, Jill.')
})

test("should return 3", () => {
    expect(add(1,2)).toBe(3)
})

test("should return 14", () => {
    expect(add(5,9)).toBe(14)
})