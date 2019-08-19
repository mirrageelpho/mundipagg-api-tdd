const app = require("./app")

const Sequelize = require("sequelize")

const sequelize = new Sequelize('FcpNinlMaW', 'FcpNinlMaW', 'fm61yO4PeJ', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    port: 3306
  });
sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.listen(process.env.PORT || 3000, ()=>console.log("Server online na porta 3000"))