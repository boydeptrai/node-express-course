const Task = require('../models/Tasks')
const getAllTasks = (req,res) =>{
    res.send('all items')
}

const createTask = async (req,res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
const getTask = (req,res) =>{
    res.json({id: req.params.id})
}
const updateTask = (req,res) =>{
    res.send('update task')
}
const deleteTask = (req,res) =>{
    res.send('delete task')
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}