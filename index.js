const fs = require('fs')
const ptv = require('ptv-api')
const config = require('./config.json')
const express = require('express')
const app = express()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

const getService = require(`./commands/getService.js`)

stop = '1078'

app.get('/', (req, res) => {
    try {
        getService.execute(stop, req, res)
	} catch (error) {
		console.error(error)
    }
    
})

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`)
})