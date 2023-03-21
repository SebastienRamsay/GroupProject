const express = require('express')
const Controller = require('../controllers/tireController')

const router = express.Router()

// GET all tires
router.get('/', (req, res) => {
  res.json(Controller.getTires)
})

// GET a single tire
router.get('/:id', (req, res) => {
  res.json(Controller.getTire)
})

// POST a new tire
router.post('/', (req, res) => {
  res.json(Controller.createTire)
})

// DELETE a tire
router.delete('/:id', (req, res) => {
  res.json(Controller.deleteTire)
})

// UPDATE a tire
router.patch('/:id', (req, res) => {
  res.json(Controller.updateTire)
})

module.exports = router