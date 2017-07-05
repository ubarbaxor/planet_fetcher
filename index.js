const config = require('./config')

const planet = require('@planet/client')
const Filter = require('@planet/client/api/filter')
const Items = require('@planet/client/api/items')
planet.auth.setKey(config.apiKey)

const areas = require('./areas')

console.log(`API Key : ${config.apiKey}`)
// console.log(areas)
Object.keys(areas).map((name, index) => console.log(`${index}: ${name}`))

const ageFilter = date => ({
  "type": "DateRangeFilter",
  "field_name": "acquired",
  "config": {
    "gte": date.toISOString()
  }
})

const geoFilter = config => ({
  type: 'GeometryFilter',
  'field_name': 'geometry',
  config
})

let types = ['PSScene4Band']

console.log(geoFilter(areas.disney))
console.log(ageFilter(new Date( 0 )))

let filter = Filter.and(geoFilter(areas.disney), ageFilter(new Date(0)))

Items.search({ types, filter })
  .then( result => console.log(result) )
  .catch( err => console.log(err) )
