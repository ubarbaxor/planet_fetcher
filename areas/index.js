const fs = require('fs')
const path = require('path')

let DIR = './areas'
let EXT = '.json'

let areas = {}
let files = fs.readdirSync(DIR)
  .filter(file => file.match(new RegExp(`${EXT}$`, 'i')))// .json only, case-i
  .map(name => path.resolve(DIR, name))// Absolute path
// console.log(files)

files.forEach(filePath =>
  areas[path.basename(filePath, EXT)] = require(filePath))
// console.log(areas)
// console.log(areas.rotterdam.features)

module.exports = areas
