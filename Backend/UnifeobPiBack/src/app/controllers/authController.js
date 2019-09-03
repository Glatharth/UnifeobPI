const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth')

const Admin = require('../models/Admin')

const router = express.Router();

function generateToken(params = {}){
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

router.post('/register', async (req, res) => {

  const { email } = req.body;

  try {

    if(await Admin.findOne({ email }))
      return res.status(400).send({ erro: 'O email ja existe no sistema' })

    const admin = await Admin.create(req.body);

    admin.password = undefined;

    return res.send({
      admin,
      token: generateToken({ id: admin.id})
    });
  } catch(err){
    return res.status(400).send({ erro: 'Falha ao registrar'});
  }
})

router.post('/authenticate', async (req, res) => {
  const {email, password} = req.body;

  const admin = await Admin.findOne({ email }).select('+password');

  if(!admin)
    return res.status(400).send({ erro: "Usuario nao encontrado" })

  if(!await bcrypt.compare(password, admin.password))
    return res.status(400).send({ erro: "Senha invalida" })

  admin.password = undefined;

  res.send({
    admin,
    token: generateToken({ id: admin.id })
  });

})

module.exports = app => app.use('/auth', router);