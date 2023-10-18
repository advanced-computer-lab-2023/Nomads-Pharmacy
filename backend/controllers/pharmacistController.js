require('dotenv').config()
 
 const Pharmacist= require('../models/pharmacistModel')
 const mongoose= require('mongoose')
 const jwt= require('jsonwebtoken')
 const bcrypt = require('bcrypt')
 



 const createToken= (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn: '3d'})
}


//Gets pharmacists are that still not approved
const getApprovalPharmacists= async (req,res) => {
    const pharmacists = await Pharmacist.find({approved: false}).sort({createdAt: -1 })

    res.status(200).json(pharmacists)
}


//Gets pharmacists are approved
const getPharmacists= async (req,res) => {
    const pharmacists = await Pharmacist.find({approved: true}).sort({createdAt: -1 })

    res.status(200).json(pharmacists)
}

//Get a single pharmacist
const getPharmacist= async (req,res) => {
    const {id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such pharmacist'})
    }

    const pharmacist= await Pharmacist.findById(id)

    if(!pharmacist){
        return res.status(404).json({error: 'No such pharmacist'})
    }
    
    res.status(200).json(pharmacist)
}

//Delete a pharmacist
const deletePharmacist = async (req,res) => {
    const {id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such pharmacist'})
    }

    const pharmacist= await Pharmacist.findOneAndDelete({_id: id})


    if(!pharmacist){
        return res.status(404).json({error: 'No such pharmacist'})
    }

    res.status(200).json(pharmacist)
}

//Update a pharmacist
const updatePharmacist= async (req,res) => {
    const {id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such pharmacist'})
    }

    const pharmacist = await Pharmacist.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!pharmacist){
        return res.status(404).json({error: 'No such pharmacist'})
    }
    res.status(200).json(pharmacist)
}

//login pharmacist
const loginPharmacist= async (req,res) => {

    const {email,password}= req.body


    try{
        const pharmacist = await Pharmacist.login(email,password)

        //create a token
        const token = createToken(pharmacist._id)
        const id= pharmacist._id

        res.status(200).json({id,email,token})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}
//sinup new pharmacist
const signupPharmacist= async (req,res) => {
    const {username,firstName,lastName,email,password,dateOfBirth,hourlyRate,affiliation,educationalBackground, specialty}= req.body

    try{
        const pharmacist= await Pharmacist.signup(username,firstName,lastName,email,password,dateOfBirth,hourlyRate,affiliation,educationalBackground, specialty)

        //create a token
        const token = createToken(pharmacist._id)

        const id= pharmacist._id

        res.status(200).json({id,email,token})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}

module.exports= {
    getApprovalPharmacists,
    getPharmacists,
    getPharmacist,
    deletePharmacist,
    updatePharmacist,
    signupPharmacist,
    loginPharmacist
}
