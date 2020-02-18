const Hapi = require('hapi')

const config = require('./config')
const routesHelloHapi= require('./routes/hello-world')
const routesShops= require('./routes/shops')
const routesOrders= require('./routes/orders')
const pluginHapiSwagger = require('./plugins/hapi-swagger')
const server = new Hapi.Server()
const pluginHapiPagination = require('./plugins/hapi-pagination')
require('env2')('./.env')
server.connection({
    port: config.post,
    host: config.host
})
const  init = async () => {
    await server.register([
        ...pluginHapiSwagger,
        pluginHapiPagination
    ])
    
    server.route([
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders
    ])

    await server.start()
    console.log(`Server running at${server.info.uri}`)
}
init()