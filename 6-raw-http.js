const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=7893fc1374135e9a1f4e93d9432b38a7&query=38.9,27.8&units=m'

const request = http.request(url, (response)=>{
    let data = ''
    
    response.on('data',(chunk)=>{
        data = data+chunk.toString()
    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(data)
    })
})

request.on('error', (error)=>{
    console.log(error)
})

request.end()