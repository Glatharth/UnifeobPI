const mongoose = require('../../database')

const bcryptjs = require('bcryptjs');

const AdminSchema = new mongoose.Schema({

  email: {
    type: String, 
    unique: true,
    required: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true,
    select: false
  },

  company: {
    type: String,
  },

  color: {
    type: String,
  },

  city: {
    type: String,
  },

  state: {
    type: String,
  },

  cep: {
    type: String,
  },

  description: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

// Antes de salvar transformamos a senha em um hash
AdminSchema.pre('save', async function(next) {
  const hash = await bcryptjs.hash(this.password, 10);
  this.password = hash;
  next();
})

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;