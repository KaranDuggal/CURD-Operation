const addemployees = require('../models/addEmployeeSchema')
function homeController(){
    return {
        async index(req,res){
            const employees = await addemployees.find()
            res.render('home',{employees:employees})
        }
    }
}
module.exports = homeController