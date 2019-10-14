const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-y8xkp.mongodb.net/unifeobpiback?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;

module.exports = mongoose;