const express = require('express');
const resource = require("./resource-model");
const router = express.Router();

router.get('/', (req,res) => {
    resource.getResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch( err => {
            res.status(500).json({ message: 'Cannot get resources'})
    })
})

router.get('/:id', (req,res) => {
    
    resource.getByID(req.params.id)
    .then(resources => {
        if(resources){
            res.json(resources)
        } else {
            res.status(404).json({ message: 'no resources matching that ID'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'an error has occurred'})
    })
})

router.post('/', (req,res) =>{
    resource.add(req.body).then(resource =>{
        res.status(200).json(resource)
    }).catch(err => {
        res.status(500).json({message: 'an error has occurred'})
    })
})

router.delete('/:id', (req,res) =>{
    const {id} = req.params;
    resource.remove(id).then(deleted =>{
        if(deleted){
            res.json({removed: deleted})
        }else{
            res.status(404).json({message: 'no resource matching that ID exist'})
        }
    }).catch(err => {
        res.status(500).json({ message: 'an error has occurred' });
      });
})

module.exports = router;