require('dotenv').config()

const express= require('express')
const mongoose= require('mongoose')

const pharmacistRoutes= require('./routes/pharmacists')
const medicineRoutes= require('./routes/medicine')
const patientRoutes= require('./routes/patients')
const adminRoutes= require('./routes/admins')

//express app
const app= express() 

//middleware
 app.use(express.json())
 app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
 })

 //routes
 app.use('/api/pharmacists',pharmacistRoutes)
 app.use('/api/medicine',medicineRoutes)
 app.use('/api/patients',patientRoutes)
 app.use('/api/admins',adminRoutes)


 //Connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
        console.log(' connected to db and listening on port',process.env.PORT)
    })

})
.catch((error) => {
    console.log(error)
})