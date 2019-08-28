const ptv = require('ptv-api')
const config = require('./config.json')

ptvClient = ptv(config.userid, config.apikey)
ptvClient.then(apis => {
    return apis.Routes.Routes_OneOrMoreRoutes({ route_types: '0' })
}).then(res => {
    data = res.body
    status = data.status
    routes = data.routes
    console.log(`Health is (1 = good) : ${status.health}`)
    console.log(routes)
    routes.forEach(function(route) {
        route_service_status = route.route_service_status
        console.log(`Service: ${route.route_name}, Status: ${route_service_status.description}`)
      })
}).catch(console.error)