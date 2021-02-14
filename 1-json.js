const fs = require('fs')
// const book={
//     title: 'Tutunamayanlar',
//     author: 'Oğuz Atay'
// }

//const bookJSON = JSON.stringify(book)
//fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()
const jsonData = JSON.parse(data);

jsonData.name = 'Harun'
jsonData.age= 34
jsonData.planet = 'Mars'

const jsonString = JSON.stringify(jsonData)
fs.writeFileSync('1-json.json', jsonString)
