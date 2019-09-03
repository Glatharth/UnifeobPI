const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Patients = require('../models/patients')

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
  res.send({ admin: req.adminId });
})

// List
router.get('/patients/', async (req, res) => {
  try {
    const patients = await Patients.find().populate('admin');

    return res.send({ patients });
  } catch(err) {
    res.status(400).send({ erro: "Erro ao carregar os pacientes" });
  }
})

// Show
router.get('/patients/:patientsId', async (req, res) => {
  try {
    const patient = await Patients.findById(req.params.patientsId).populate('admin');

    return res.send({ patient });
  } catch(err) {
    res.status(400).send({ erro: "Erro ao carregar esse paciente" });
  }
})

// Create
router.post('/patients/', async (req, res) => {
  try {
    const patient = await Patients.create({ ...req.body, admin: req.adminId });

    patient.password = undefined;
    return res.send({ patient });
  } catch(err) {
    res.status(400).send({ erro: "Erro ao cadastrar um novo paciente" });
  }
})

// Update
router.put('/patients/:patientsId', async (req, res) => {
  try {
    const patient = await Patients.findByIdAndUpdate(req.params.patientsId, req.body, {
      new:true
    });

    res.send({ patient });
  } catch(err) {
    res.status(400).send({ erro: "Erro ao alterar dados desse paciente" });
  }
})

// Delete
router.delete('/patients/:patientsId', async (req, res) => {
  try {
    const patient = await Patients.findByIdAndRemove(req.params.patientsId);
    res.send();
  } catch(err) {
    res.status(400).send({ erro: "Erro ao apagar esse paciente" });
  }
})

module.exports = app => app.use('/dashboard', router);