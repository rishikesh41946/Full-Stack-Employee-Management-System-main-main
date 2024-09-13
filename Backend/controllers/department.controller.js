const Department = require('../models/department');
const Employee = require('../models/employee');

exports.create = async function (departmentName, res) {
    try {
        if (!departmentName) {
            return res.status(200).json('Content can not be empty!');
        }

        const checkDepartment = await Department.findOne({name: departmentName});
        if (checkDepartment) {
            return res.status(409).json({message: 'The department '+ departmentName +' already exists'});
        }

        const department = new Department({name: departmentName});
        const returnDepartment = await department.save();

        return res.status(200).json({message: 'Department created successfully', returnDepartment});

    } catch (err) {
        console.log(err);
        return  res.status(500).json({message: 'Internal server error'});
    }
}

exports.findAll = async function (res) {
    try {
        let departments = await Department.find().populate('employees');

        return res.send(departments);

    } catch (err) {
        console.log(err);
        return  res.status(500).json({message: 'Internal server error'});
    }
}

exports.update = async function (id, departmentName, res) {
    try {
        if (!(id, departmentName)) {
            return res.status(200).json('Content can not be empty!');
        }

        const department = await Department.findById(id);
        if (!department) {
            return res.status(404).json({message: 'Department not found'});
        }

        const checkDepartment = await Department.findOne({name: departmentName});
        const departmentToUpdate = await Department.findById(id);

        if (checkDepartment && departmentToUpdate.id !== checkDepartment.id) {
            return res.status(409).json({message: 'The department '+ departmentName +' already exists'});
        }

        await Department.updateOne({_id: id}, {name: departmentName});

        const updatedDepartment = await Department.findById(id).populate('employees');

        return res.send({message: 'Department updated successfully', updatedDepartment});

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

        const department = await Department.findById(id);
        if (!department) {
            return res.status(404).json({message: 'Department not found'});
        }

        department.employees.forEach(async (employeeId) => {
            const employee = await Employee.findById(employeeId);
            employee.department = null;
            await employee.save();
        });

        await Department.deleteOne({_id: id});

        await Employee.updateMany({department: id}, {$unset: {department: 1}});

        return res.status(200).json({message: 'Department deleted successfully'});

    } catch (err) {
        console.log(err);
        return  res.status(500).json({message: 'Internal server error'});
    }
}