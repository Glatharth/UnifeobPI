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
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Message = mongoose.model('Message', MessagesSchema);

module.exports = Message;