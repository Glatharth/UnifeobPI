const mongoose = require('../database');

const MessagesSchema = new mongoose.Schema({
  author: {
    type: String,
    require: true
  },
  message: {
    type: Object,
    require: true,
  },
  hour: {
    type: String,
    require: true
  },
  send_id: {
    type: String,
    require: true
  },
  receive_id: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Message = mongoose.model('Message', MessagesSchema);

module.exports = Message;