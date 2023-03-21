const Tire = require('../models/tireModel')
const mongoose = require('mongoose')

// get all tires
const getTires = async (req, res) => {
  const tires = await Tire.find({}).sort({createdAt: -1})

  res.status(200).json(tires)
}

// get a single tire
const getTire = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such tire'})
  }

  const tire = await Tire.findById(id)

  if (!tire) {
    return res.status(404).json({error: 'No such tire'})
  }

  res.status(200).json(tire)
}

// create a new tire
const createTire = async (req, res) => {
  const {brand, model, size, price, isAvailable} = req.body

  // add to the database
  try {
    const tire = await Tire.create({brand, model, size, price, isAvailable})
    res.status(200).json(tire)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a tire
const deleteTire = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such tire'})
  }

  const tire = await Tire.findOneAndDelete({_id: id})

  if(!tire) {
    return res.status(400).json({error: 'No such tire'})
  }

  res.status(200).json(tire)
}

// update a tire
const updateTire = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such tire'})
  }

  const tire = await Tire.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!tire) {
    return res.status(400).json({error: 'No such tire'})
  }

  res.status(200).json(tire)
}

module.exports = {
  getTires,
  getTire,
  createTire,
  deleteTire,
  updateTire
}