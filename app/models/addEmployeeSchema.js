const mongoose = require('mongoose')


const addEmployeeSchema = mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    branch:{
        type: String,
        required:true
    },
    salary:{
        type: Number,
        required:true
    }
})

const addEmployee = mongoose.model('addEmployee',addEmployeeSchema)

module.exports = addEmployee;