import express from 'express';
import {
  getTires,
  getTire,
  createTire,
  deleteTire,
  updateTire
} from '../controllers/tireController.js';


const tireRoutes = express.Router()

// GET all tires
tireRoutes.get('/', getTires)

// GET a single tire
tireRoutes.get('/:id', getTire)

// POST a new tire
tireRoutes.post('/', createTire)

// DELETE a tire
tireRoutes.delete('/:id', deleteTire)

// UPDATE a tire
tireRoutes.patch('/:id', updateTire)

export default tireRoutes