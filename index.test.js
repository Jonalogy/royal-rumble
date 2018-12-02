const { getSortedList, mapNames, sortRomanNum, sortNames } = require('./index');
const { mocks, expected } = require('./mocks');

describe('mapNames()', () => {
  it('should create a map of names with numbers', () => {
    const mocks = ['Louis IX', 'Louis VIII', 'David II', 'David III']
    expect(mapNames(mocks)).toEqual(
      { Louis: ['IX', 'VIII'], David: ['II', 'III'] }
    )
  })
});

describe('sortRomanNum', () => {
  it('should sort every name\'s roman numbers', () => {
    const mockMappedNames = {
      Louis: ['IX', 'VIII'],
      David: ['III', 'I', 'X']
    };
    expect(sortRomanNum(mockMappedNames)).toEqual({
      Louis: ['VIII', 'IX'],
      David: ['I', 'III', 'X']
    })
  })
})
describe('sortNames', () => {
  it('should sort names and return an array', () => {
    const mock = {
      Louis: ['VIII', 'IX'],
      David: ['I', 'III', 'X']
    };
    expect(sortNames(mock)).toEqual(
      ['David I', 'David III', 'David X', 'Louis VIII', 'Louis IX']
    )
  })
})

describe('getSortedList()', () => {
  it('should return an array', () => {
    expect(Array.isArray(getSortedList(mocks))).toBeTruthy()
  });
  it('should...', () => {
    expect(getSortedList(mocks))
      .toEqual(expected)
  });
});