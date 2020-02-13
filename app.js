const Hapi = require('hapi')
const config = require('./config')
const routesHelloHapi= require('./routes/hello-world')
const pluginHapiSwagger = require('./plugins/hapi-swagger')
const server = new Hapi.Server()

server.connection({
    port: config.post,
    host: config.host
})
const  init = async () => {
    await server.register([
        ...pluginHapiSwagger
    ])
    server.route([

        ...routesHelloHapi
    ])
    await server.start()
    console.log(`Server running at${server.info.uri}`)
}
init()