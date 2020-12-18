const employeeSchema = require('../models/addEmployeeSchema')

function employeeController() {
    return {
        addEmployee(req, res) {
            res.render('addemployee')
        },
        async postaddEmployee(req, res) {
            try {
                const { firstname, lastname, branch, salary } = req.body
                const addEmployee = new employeeSchema({
                    firstname,
                    lastname,
                    branch,
                    salary
                })
                const data = await addEmployee.save()
                console.log(data);
                res.redirect('/')
            } catch (e) {
                res.send(e)
                console.log(e);
            }
        },
        async deleteEmployee(req,res){
            try {
                const _id = req.params.id
                const deleteEmplo = await employeeSchema.findByIdAndDelete(_id)
                res.redirect('edit')
            }catch (e) {
                console.log(e);
                res.send('e')
            }
        },
        async updateData(req,res){
            try{
                const _id = req.params.id;
                console.log(req.body);
                console.log(_id);
                const getEmployee = await employeeSchema.findByIdAndUpdate(_id,req.body)
                console.log(req.body);
                res.send(getEmployee)
            }catch(e){
                res.status(400).send(e)
            }
        }
    }
}

module.exports = employeeController