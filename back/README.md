// create migration

at first time

"sequelize init"  - this cmd create file config.json
replace options of config file according your db.

create Model for User - "sequelize model:generate --name User --attributes name:string,email:string,password:string"
create table Users by Model - "db:migrate"
(this command doesn't work with type=module in package.json)
create seed file of demo-user - "sequelize seed:generate --name demo-user"
then change seed file according model
(add:
    createdAt: new Date(),
    updatedAt: new Date()
)
fill table by demo-user - "sequelize db:seed:all"