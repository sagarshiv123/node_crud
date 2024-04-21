const express = require('express');
const router = express.Router();
const Person = require('./../models/person');


router.post('/', async (req,res)=>{
   
    try{
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        res.status(200).json(response);
        console.log('data saved');
    }
    catch(err){
        res.status(500).json({error:' Internal server error'})
        console.log(err);
    }
    
})

router.get('/', async (req,res)=>{

    try{
          const data = await Person.find();
          res.status(200).json(data);
          console.log('data fache');
    }
    catch(err){
       res.status(500).json({error:'Internal server error'});
       console.log(err)
    }
})


router.get('/:workType', async (req,res)=>{

    try{
       
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'waiter', workType == 'manager'){
          const response = await Person.find({work:workType});
          res.send(200).json(response);
          console.log("Find data")
        }
        else{
            res.send(404).json({error:'ivalid work type'})
        }
    }
    catch(err){

        res.send(500).json({error:'Internal server error'});
        console.log(err)


    }
})

router.put('/:id', async (req,res)=>{
    try{
       
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        res.status(200).json(response);
        console.log('data updated')


    }
    catch (err) {
        res.status(err).json({error:'Internal server error'});
        console.log(err);
    }
})

router.delete('/:id', async (req,res)=>{

    try{
        const deletePerson = req.params.id;
        const response = await Person.findByIdAndDelete(deletePerson,{
   
        })
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        res.status(200).json(response);
        console.log('data deleted')

    }
    catch(err){
        res.status(err).json({error:'Internal server error'});
        console.log(err);
    }
})
module.exports = router;