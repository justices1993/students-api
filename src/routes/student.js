const express = require('express')
const route = express.Router()
const Student = require('../models/student')


route.get('/',async(req,res)=> {
    try{
       const student = await Student.find({})
       res.status(201).send({student})
    }catch(e){
        res.status(500).send(e)
    }
})

route.post('/',async(req,res)=>{
    try{
        const student = new Student({
            name: req.body.name,
            email: req.body.email,
            qualification: req.body.qualification,
            idealjob: req.body.idealjob
        })
        await student.save()
        res.status(200).send({student})
     }catch(e){
         res.status(500).send(e)
     }
})

route.get('/:id',async (req,res)=>{
    const {id} = req.params
    try{
        const student = await Student.findById(id)
        res.status(200).send({student})
    }catch(e){
        res.status(500).send(e)
    }
})

route.patch('/:id', async(req,res)=> {
    const {id} = req.params
    try{
        if(!id){
            res.status(404).send()
        }
        const student = await Student.findByIdAndUpdate(id, req.body,{runvalidator: true, new: true})
        res.status(201).send(student)
    }catch(e){
        res.status(500).send(e)
    }
})

route.delete('/:id', async(req,res)=> {
    const {id} = req.params
    try{
        const student = await Student.findByIdAndDelete(id)
        res.status(201).send({student})
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = route