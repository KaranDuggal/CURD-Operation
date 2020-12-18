const homeController = require('../app/controllers/homeController')
const employeeController = require('../app/controllers/employeeController')

function initRoutes(app){
    app.get('/',homeController().index);
    app.get('/addemployee',employeeController().addEmployee)
    app.post('/addemployee',employeeController().postaddEmployee)
    app.delete('/addemployee/:id',employeeController().deleteEmployee)
    app.patch('/addemployee/:id',employeeController().updateData)

}
module.exports = initRoutes;