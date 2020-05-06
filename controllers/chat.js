const Chat = require('../models/Chat');


exports.getMessages = (req, res, next) => {
  Chat.findAll()
    .then(chats => {
      console.log('chats')
      res.status(200).json(chats);
    
    })
    .catch(err => {
      console.log('err');
      console.log(err);
    });
};

exports.createMessage = (req, res, next) => {
  const senderid = req.body.senderid;
  const receiverid = req.body.receiverid;
  const text = req.body.text;
  const date = req.body.date;
  Chat.create({
    senderid: senderid,
    receiverid: receiverid,
    text: text,
    date: date
  })
    .then(result => {
      console.log('Created New message');
      res.status(201).json(result)
    })
    .catch(err => {
      console.log('err');
      console.log(err);
    });
}
