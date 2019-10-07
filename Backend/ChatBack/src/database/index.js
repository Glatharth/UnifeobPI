const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-y8xkp.mongodb.net/chatback?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;