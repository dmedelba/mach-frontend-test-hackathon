const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String
});

const Servicio = mongoose.model('Servicio', servicioSchema);

router.get('/', async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener servicios' });
  }
});

router.post('/', async (req, res) => {
  try {
    const servicio = new Servicio(req.body);
    await servicio.save();
    res.json(servicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear servicio' });
  }
});

module.exports = router;
