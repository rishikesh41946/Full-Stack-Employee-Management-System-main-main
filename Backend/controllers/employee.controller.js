const Employee = require('../models/employee');
const Department = require('../models/department');

exports.create = async function (name, surname, departmentId, res) {
    try {
        if (!(name, surname, departmentId)) {
            return res.status(200).json('Content can not be empty!');
        }

        const department = await Department.findOne({_id: departmentId});
        if (!department) {
            return res.status(404).json({message: 'The department does not exists'});
        }

        const checkEmployee = await Employee.findOne({name: name, surname: surname});
        if (checkEmployee) {
            return res.status(409).json({message: 'The employee '+ name +' '+ surname +' already exists'});
        }

        const employee = new Employee({name: name, surname: surname, department: departmentId});
        const returnEmployee = await employee.save();

        await Department.updateOne({_id: departmentId}, {$push: {employees: {_id: returnEmployee.id}}});

        return res.status(200).json({message: 'Employee created successfully', returnEmployee});

    } catch (err) {
        console.log(err);
        return  res.status(500).json({message: 'Internal server error'});
    }
}

exports.findAll = async function (res) {
    try {
        let employees = await Employee.find().populate('department');

        return res.send(employees);

    } catch (err) {
        console.log(err);
        return  res.status(500).json({message: 'Internal server error'});
    }
}

exports.findOne = async function (id, res) {
    try {
        let employee = await Employee.findOne({_id: id}).populate('department');

        if (!employee) {
            return res.status(404).json({message: 'The employee does not exists'});
        }

        return res.send(employee);

    } catch (err) {
        console.log(err);
        return  res.status(500).json({message: 'Internal server error'});
    }
}

exports.update = async function (id, name, surname, departmentId, res) {
    try {
        if (!(id, name, surname, departmentId)) {
            return res.status(200).json('Content can not be empty!');
        }

        const employeeToUpdate = await Employee.findById(id);
        if (!employeeToUpdate) {
            return res.status(404).json({message: 'Employee not found'});
        }

        const checkEmployee = await Employee.findOne({name: name, surname: surname}); 
        if (checkEmployee && employeeToUpdate.id !== checkEmployee.id) {
            return res.status(409).json({message: 'The employee '+ name +' '+ surname +' already exists'});
        }

        const department = await Department.findOne({_id: departmentId});
        if (!department) {
            return res.status(404).json({message: 'The department does not exists'});
        }

        if (!employeeToUpdate.department) {
            await Department.updateOne({_id: departmentId}, {$push: {employees: id}});
        }
        
        if (employeeToUpdate.department && employeeToUpdate.department !== departmentId) {
            await Department.updateOne({_id: employeeToUpdate.department}, {$pull: {employees: id}});

            await Department.updateOne({_id: departmentId}, {$push: {employees: id}});
        }

        await Employee.updateOne({_id: id}, {name: name, surname: surname, department: departmentId});

        const updatedEmployee = await Employee.findById(id).populate('department');

        return res.send({message: 'Employee updated successfully', updatedEmployee});

    } catch (err) {
        console.log(err);
        return  res.status(500).json({message: 'Internal server error'});
    }
}

exports.delete = async function (id, res) {
    try {
        if (!id) {
            return res.status(200).json('Content can not be empty!');
        }
        
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({message: 'The employee does not exists'});
        }

        if (employee.department) {
            await Department.updateOne({_id: employee.department}, {$pull: {employees: id}});
        }

        await Employee.deleteOne({_id: id});

        return res.status(200).json({message: 'Employee deleted successfully'});

    } catch (err) {
        console.log(err);
        return  res.status(500).json({message: 'Internal server error'});
    }
}