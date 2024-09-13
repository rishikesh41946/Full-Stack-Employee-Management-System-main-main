const express = require('express');
const employeeRouter = express.Router();
const employeeController = require('../controllers/employee.controller.js');

employeeRouter.get('/', async (req, res) => {
    await employeeController.findAll(res);
});

employeeRouter.get('/:id', async (req, res) => {
    const id = req.params.id;

    await employeeController.findOne(id, res);
});

employeeRouter.post('/', async (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const departmentId = req.body.departmentId;

    await employeeController.create(name, surname, departmentId, res);
});

employeeRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const surname = req.body.surname;
    const departmentId = req.body.departmentId;

    await employeeController.update(id, name, surname, departmentId, res);
});

employeeRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;

    await employeeController.delete(id, res);
});

module.exports = employeeRouter;