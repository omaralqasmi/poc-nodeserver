const express = require('express');
const bodyParser = require('body-parser');

const chatRoutes = require('./routes/chat');
const userRoutes = require('./routes/user');
const sequelize = require('./database');
const User = require('./models/User');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/chat', chatRoutes);
app.use('/user', userRoutes);


sequelize
  .sync()
  .then(result => {
    User.findAll().then(users => {
      if (users.length < 1){
        User.create({ name: 'Omar', image: 'https://randomuser.me/api/portraits/men/11.jpg' })
        User.create({ name: 'Fahad', image: 'https://randomuser.me/api/portraits/men/7.jpg' })
        User.create({ name: 'Sultan', image: 'https://randomuser.me/api/portraits/men/51.jpg' })
        User.create({ name: 'Mansoor', image: 'https://randomuser.me/api/portraits/men/40.jpg' })
        User.create({ name: 'Qusai', image: 'https://randomuser.me/api/portraits/men/10.jpg' })
      }
    })
    .catch(err => {
      console.log('err')
      console.log(err)
    })

    app.listen(3000)
  })
  .catch(err => {
    console.log(err)
  })

