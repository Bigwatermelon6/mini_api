const GROUP_NAME = 'shops';
const Joi = require('joi')
const models =  require('../models')
const {paginationDefine} = require('../utils/router-helper')
module.exports = [
    {
      method: 'GET',
      path: `/${GROUP_NAME}`,
      handler: async (request, reply) => {
        const {rows: results, count: totalCount} = await models.shops.findAndCountAll({
          attributes: [
            'id',
            'name'
          ],
          limit: request.query.limit,
          offset: (request.query.page -1 ) * request.query.limit
        })
        reply({results, totalCount})
          // const result = await models.shops.findAll({
          //   attributes: [
          //     'id',
          //     'name'
          //   ]
          // })
          // reply(result)
      },
      config: {
        tags: ['api',GROUP_NAME],
        description: '获取店铺列表',
        validate: {
            query: {
                // limit: Joi.number().integer().min(1).default(10).description('每页面的条目数'),
                // page: Joi.number().integer().min(1).default(1).description('页码数')
                ...paginationDefine
            }
        }
      }
    },
    {
      method: 'GET',
      path: `/${GROUP_NAME}/{shopId}/goods`,
      handler: async (request, reply) => {
          reply()
      },
      config: {
        tags: ['api',GROUP_NAME],
        description: '获取店铺商品列表'
      }
    }
]
