const Roman2Num = require('roman-numeral-to-decimal');

// Take raw import and momoize
const mapNames = (list) => {
  return list.reduce(
    (acc, ordinalNum) => {
      const [name, num] = ordinalNum.match(/(\w+)/g);
      return Object.assign(
        {},
        acc,
        {[name]: acc[name] ? [...acc[name], num] : [num]}
      )
    },
    {}
  )
}

// Received the momized names and sort their ordinal number
const sortRomanNum = (mapNames) => {
  return Object.keys(mapNames).reduce(
    (acc, name) => {
      return {
        ...mapNames,
        [name]: mapNames[name].sort((a,b) => Roman2Num(a) - Roman2Num(b))
      }
    },
    mapNames)
}

// Receive the sorted momized map and create the an array of sorted by name then ordinal number
const sortNames = (mapNames) => {
  return Object.keys(mapNames).sort().reduce(
    (acc, name) => {
      return [
        ...acc,
        ...mapNames[name].map(ordinalNum => `${name} ${ordinalNum}`)
      ]
    },
    []
  )
}

const getSortedList = (list) => sortNames(sortRomanNum(mapNames(list)))

module.exports = {
  getSortedList,
  mapNames,
  sortRomanNum,
  sortNames
}