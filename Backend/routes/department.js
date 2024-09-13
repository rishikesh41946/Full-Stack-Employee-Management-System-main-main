const express = require('express');
const departmentRouter = express.Router();
const departmentController = require('../controllers/department.controller.js');

departmentRouter.get('/', async (req, res) => {
    await departmentController.findAll(res);
});

departmentRouter.post('/', async (req, res) => {
    const name = req.body.name;

    await departmentController.create(name, res);
});

departmentRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;

    await departmentController.update(id, name, res);
});

departmentRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;

    await departmentController.delete(id, res);
});

module.exports = departmentRouter;