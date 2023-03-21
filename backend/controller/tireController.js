

const Tire = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all tires
const getWorkouts = async (req, res) => {
  const tires = await Tire.find({}).sort({createdAt: -1})

  res.status(200).json(tires)
}

// get a single tire
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No type of tire'})
  }

  const tire = await Tire.findById(id)

  if (!tire) {
    return res.status(404).json({error: 'No type of tire'})
  }

  res.status(200).json(tire)
}

// create a new workout
const createWorkout = async (req, res) => {
  const {price, weight, type} = req.body

  // add to the database
  try {
    const tire = await Tire.create({ price, weight, type })
    res.status(200).json(tire)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteTire = async (req, res) => {

}

// update a workout
const updateTire = async (req, res) => {

}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}

