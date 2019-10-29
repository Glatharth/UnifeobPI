const mongoose = require('../../database')

const bcryptjs = require('bcryptjs');

const PatientsSchema = new mongoose.Schema({

  name: {
    type: String
  },

  age: {
    type: Number
  },

  cpf: {
    type: String,
    unique: true
  },

  rg: {
    type: String
  },

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

  gravity: {
    type: String,
    default: "green"
  },

  description: {
    type: String
  },

  descriptionChat: {
    type: String
  },

  color: {
    type: String,
    default: "blue"
  },

  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    require: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

// Antes de salvar transformamos a senha em um hash
PatientsSchema.pre('save', async function(next) {
  const hash = await bcryptjs.hash(this.password, 10);
  this.password = hash;
  next();
})

const Patients = mongoose.model("Patients", PatientsSchema);

module.exports = Patients;