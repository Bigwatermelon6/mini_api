# Hapi project
## config 项目配置目录
| config| models | node_modules| plugins | routes | utils | 
| --- | --- | --- | --- | --- | --- |
|配置目录|数据库|node依赖模块包|插接件目录|路由目录|工具类|
## 使用sequelize
1. node_modules/.bin/sequelize init 
次步骤会生成初始化的工程目录包含了 config , models, migrations, seeders.
2. node_modules/.bin/sequelize db:create --env development
根据env的配置选择development的配置环境,会创建一个对应的数据库名，名字配置在.env中
3. node_modules/.bin/sequelize db:migrate
次步骤为创建表，根据 node_modules/.bin/sequelize migration:create --name create-shops-table,会在migration里创建一个定义数据结构的表，此时执行上面命令会在对应数据库中建立几个基础格式的表(取决于migrations里面的表的个数)
4.node_modules/.bin/sequelize db:seed:all
次步骤为填充数据库中表的内容,node_modules/.bin/sequelize seed:create --name init-shops 会在seeders内生成一个init的js,把里面写入内容就是把对面表里增加数据