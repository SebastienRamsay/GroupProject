const express = require('express')

const router = express.Router()

// GET all tires
router.get('/', (req, res) => {
  res.json({mssg: 'GET all tires'})
})

// GET a single tire
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single tire'})
})

// POST a new tire
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new tire'})
})

// DELETE a tire
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a tire'})
})

// UPDATE a tire
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a tire'})
})

module.exports = router