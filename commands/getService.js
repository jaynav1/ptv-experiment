const ptv = require('ptv-api')
const config = require('../config.json')
const express = require('express')
const app = express()



module.exports = {
	name: 'getService',
	description: 'get train services',
	execute(req, res) {
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
            console.log(sitebody)
        })
	}
}