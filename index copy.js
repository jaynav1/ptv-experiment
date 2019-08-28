const ptv = require('ptv-api')
const config = require('./config.json')
const express = require('express')
const app = express()



app.get('/', (req, res) => {
    ptvClient = ptv(config.userid, config.apikey)
    ptvClient.then(apis => {
        return apis.Routes.Routes_OneOrMoreRoutes({ route_types: '0' })
    }).then(resp => {
        data = resp.body
        status = data.status
        routes = data.routes
        sitebody = []
        console.log(`Health is (1 = good) : ${status.health}`)
        console.log(routes)
        routes.forEach(function(route) {
            route_service_status = route.route_service_status
            sitebody.push([`Service: ${route.route_name}, Status: ${route_service_status.description}`])
        })
        res.send(sitebody)
    }).catch(console.error)
})

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`)
})