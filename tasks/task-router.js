const express = require('express');
const task = require("./task-model");
const router = express.Router();

router.get('/', (req,res) => {
    task.getResources()
    .then(task => {
        res.status(200).json(task)
    })
    .catch( err => {
            res.status(500).json({ message: 'Cannot get tasks'})
    })
})

router.get('/:id', (req,res) => {
    
    task.getByID(req.params.id)
    .then(tasks => {
        if(tasks){
            res.json(tasks)
        } else {
            res.status(404).json({ message: 'no tasks matching that ID'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'an error has occurred'})
    })
}) 

router.post('/', (req,res) => {
    task.add(req.body).then(newTask =>{
        res.status(200).json(newTask)
    }).catch(err => {
        res.status(500).json({message: 'an error has occurred'})
    })
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    task.remove(id).then(deleted => {
        if(deleted){
            res.json({removed: deleted})
        }else{
            res.status(404).json({message: 'no task matching that ID exists'})
        }
    }).catch(err => {
        res.status(500).json({ message: 'an error has occurred' });
      });
})

module.exports = router;