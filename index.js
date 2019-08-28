const ptv = require('ptv-api')
const config = require('./config.json')
const express = require('express')
const app = express()



app.get('/', (req, res) => {
    ptvClient = ptv(config.userid, config.apikey)
    ptvClient.then(apis => {
        return apis.Departures.Departures_GetForStop({ route_types: '0' })
    }).then(resp => {
        data = resp.body
        console.log(data)
        status = data.status
        sitebody = []
        res.send(sitebody)
    }).catch(console.error)
})

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`)
})