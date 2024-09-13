const Department = require('../models/department');
const Employee = require('../models/employee');

const run = async () => {

    Employee.deleteMany();
    Department.deleteMany();

    new Department({name: 'General Dentistry'}).save()
        .then(async department => {
            const alfred = await new Employee({name: 'Alfred', surname: 'Christensen', department: department.id}).save();
            const john = await new Employee({name: 'John', surname: 'Dudley', department: department.id}).save();
            const janet = await new Employee({name: 'Janet', surname: 'Doe', department: department.id}).save();

            await Department.updateOne({_id: department.id}, {$push: {employees: alfred.id}});
            await Department.updateOne({_id: department.id}, {$push: {employees: john.id}});
            await Department.updateOne({_id: department.id}, {$push: {employees: janet.id}});
        });


    new Department({name: 'Pediatric Dentistry'}).save()
        .then(async department => {
            const francisco = await new Employee({name: 'Francisco', surname: 'Willard', department: department.id}).save();
            const sarah = await new Employee({name: 'Sarah', surname: 'Alvarez', department: department.id}).save();

            await Department.updateOne({_id: department.id}, {$push: {employees: francisco.id}});
            await Department.updateOne({_id: department.id}, {$push: {employees: sarah.id}});
        });

    new Department({name: 'Restorative Dentistry'}).save()
        .then(async department => {
            const lisa = await new Employee({name: 'Lisa', surname: 'Harris', department: department.id}).save();
            const danny = await new Employee({name: 'Danny', surname: 'Perez', department: department.id}).save();

            await Department.updateOne({_id: department.id}, {$push: {employees: lisa.id}});
            await Department.updateOne({_id: department.id}, {$push: {employees: danny.id}});
        });

    new Department({name: 'Surgery Dentistry'}).save()
        .then(async department => {
            const constance = await new Employee({name: 'Constance', surname: 'Smith', department: department.id}).save();
            
            await Department.updateOne({_id: department.id}, {$push: {employees: constance.id}});
        });

    new Department({name: 'Orthodontics'}).save()
        .then(async department => {
            const leslie = await new Employee({name: 'Leslie', surname: 'Roche', department: department.id}).save();
            const travis = await new Employee({name: 'Travis', surname: 'Combs', department: department.id}).save();

            await Department.updateOne({_id: department.id}, {$push: {employees: leslie.id}});
            await Department.updateOne({_id: department.id}, {$push: {employees: travis.id}});
        });

    console.log('Database seeder done')
};

module.exports = run;