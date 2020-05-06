const User = require('../models/User');


exports.getUsers = (req, res, next) => {
    User.findAll()
    .then(users => {
      console.log('users')
      res.status(200).json(users);
    
    })
    .catch(err => {
      console.log('err');
      console.log(err);
    });
};

exports.createUsers = (req, res, next) => {
  const name = req.body.name;
  const image = req.body.image;
  User.create({
    name: name,
    image: image
  })
    .then(result => {
      console.log('Created New user');
      res.status(201).json(result)
    })
    .catch(err => {
      console.log('err');
      console.log(err);
    });
}
