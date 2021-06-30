// create migration

at first time

"sequelize init"  - this cmd create file config.json
replace options of config file according your db.

1. create Model for User - "sequelize model:generate --name User --attributes name:string,email:string,password:string"

2. create Model for Records - "sequelize model:generate --name Records --attributes user_id:integer,amount:string,income:boolean,description:string,category_id:integer"

add association to record and user Model 
"Records.belongsTo(models.User, {
foreignKey: 'userId',
onDelete: 'CASCADE'
})"

"User.hasMany(models.Record, {
foreignKey: 'userId',
})"


3. create table Users and Records by Model - "sequelize db:migrate"
(this command doesn't work with type=module in package.json)

4. create seed files of demo-user and demo-records - "sequelize seed:generate --name demo-user"
then change seed file according model
(add:
      name: 'John',
      password: '123123123',
      email: 'demo@demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
)


5. "sequelize seed:generate --name record"
(add:
    userId: 1,
    amount: 10000,
    income: true,
    description: 'Зарплата',
    categoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
)

fill table by demo-user - "sequelize db:seed:all"

unfill table by demo-user - "sequelize db:seed:undo:all"