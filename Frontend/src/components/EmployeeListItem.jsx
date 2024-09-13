import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { updateEmployee, deleteEmployee } from '../actions/employees';
import { changeEditRegister } from '../actions/editingRegister';

const selectEmployees = state => state.employees;
const selectDepartments = state => state.departments;
const selectEditingRegister = state => state.editingRegister;

function EmployeeListItem ({ employee }) {
    const employees = useSelector(selectEmployees);
    const departments = useSelector(selectDepartments);
    const editingRegister = useSelector(selectEditingRegister);
    const dispatch = useDispatch();

    const [nameError, setNameError] = useState(' ');
    const [surnameError, setSurnameError] = useState(' ');
    const [departmentError, setDepartmentError] = useState(' ');

    const [editName, setEditName] = useState(
        editingRegister.isEditing && editingRegister.type === 'employee' 
        ? employees.find(emp => emp._id === editingRegister.id).name 
        : ''
    );
    const [editSurname, setEditSurname] = useState(
        editingRegister.isEditing && editingRegister.type === 'employee' 
        ? employees.find(emp => emp._id === editingRegister.id).surname 
        : ''
    );
    const [editDepartment, setEditDepartment] = useState(
        editingRegister.isEditing && editingRegister.type === 'employee' && employees.find(emp => emp._id === editingRegister.id).department !== null
        ? employees.find(emp => emp._id === editingRegister.id).department._id
        : ''
    );

    const regex = /[a-zA-Z]/g;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteEmployee(id));
            }
          })
    };

    const handleNameInputChange = (event) => {
        const newValue = event.target.value;

        setEditName(newValue);

        validate(newValue, editSurname, editDepartment);
    };

    const handleSurnameInputChange = (event) => {
        const newValue = event.target.value;

        setEditSurname(newValue);

        validate(editName, newValue, editDepartment);
    };

    const handleDepartmentChange = (event) => {
        const newValue = event.target.value;

        setEditDepartment(newValue);

        validate(editName, editSurname, newValue);
    };

    const validate = (name, surname, department) => {
        let erorrText = validationRules(name, 'name');
        setNameError(erorrText);

        erorrText = validationRules(surname, 'surname');
        setSurnameError(erorrText);

        if (department === 'Select a department') {
            setDepartmentError('Please select a valid department');
        } else {
            setDepartmentError('');
        }

        if (checkNameSurnameExists(name, surname)) {
            setNameError('This employee already exists');
        }
    };

    const handleClickEdit = (id) => {
        dispatch(changeEditRegister('employee', id, true ));
        setEditName(employees.find(emp => emp._id === id).name);
        setEditSurname(employees.find(emp => emp._id === id).surname);
        setEditDepartment(
            employees.find(emp => emp._id === id).department !== null ? 
                employees.find(emp => emp._id === id).department._id : 
                ''
        );
    };

    const handleSubmitEdit = (id) => {
        dispatch(changeEditRegister('', '', false ));

        dispatch(updateEmployee(id, editName, editSurname, editDepartment));

        setEditName('');
        setEditSurname('');
        setEditDepartment('');

        setNameError(' ');
        setSurnameError(' ');
        setDepartmentError(' ');
    };

    const handleCancelEdit = (id) => {
        dispatch(changeEditRegister('', '', false ));
        setEditName('');
        setEditSurname('');
        setEditDepartment('');

        setNameError(' ');
        setSurnameError(' ');
        setDepartmentError(' ');
    };

    function checkNameSurnameExists(nameCheck, surnameCheck) {
        return employees.some(employee => employee._id !== editingRegister.id && employee.name.toUpperCase() === nameCheck.toUpperCase() && employee.surname.toUpperCase() === surnameCheck.toUpperCase());
    }

    const validationRules = (value, field) => {
        if (value === '') {
            return 'The ' + field + ' cannot be empty';
        } else if (value.length < 2) {
            return 'The ' + field + ' leght must be at least 2';
        } else if (value.length > 255) {
            return 'The ' + field + ' leght must be less than 255';
        } else if (!regex.test(value)) {
            return 'The ' + field + ' must be a string';
        } else {
            return'';
        }
    }

    return (            
        <tr>
            {editingRegister.isEditing && editingRegister.type === 'employee' && editingRegister.id === employee._id ? (
                <>
                    <td>
                        <Form.Group className="m-3">
                            <Form.Control className="form-dark" type="text" placeholder="Enter a name" value={editName} onChange={handleNameInputChange} />
                            {nameError && <p className='text-danger'>{nameError}</p>}
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group className="m-3">
                            <Form.Control className="form-dark" type="text" placeholder="Enter a surname" value={editSurname} onChange={handleSurnameInputChange} />
                            {surnameError && <p className='text-danger'>{surnameError}</p>}
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group className="m-3">
                            <Form.Select className="form-dark" value={editDepartment} onChange={handleDepartmentChange}>
                                <option>Select a department</option>
                                {departments.map((department) => {
                                    return <option key={department._id} value={department._id}>{department.name}</option>
                                })}
                            </Form.Select>
                            {departmentError && <p className='text-danger'>{departmentError}</p>}
                        </Form.Group>
                    </td>
                </>
            ) : (
                <>
                    <td>{employee.name}</td>
                    <td>{employee.surname}</td>
                    <td>{employee.department === null ? 'No department' : employee.department.name}</td>                                    
                </>
            )}
            <td>
                {editingRegister.isEditing && editingRegister.type === 'employee' && editingRegister.id === employee._id ? (
                    <>
                        <Button variant="success" style={{marginRight: '5px'}} onClick={() => handleSubmitEdit(employee._id)} disabled={nameError === '' && surnameError === '' && departmentError === '' ? false : true}>Confirm Changes</Button>
                        <Button variant="secondary" style={{marginRight: '10px'}} onClick={() => handleCancelEdit(employee._id)}>Cancel Changes</Button>
                    </>
                ) : (
                    <Button variant="warning" style={{marginRight: '10px'}} disabled={editingRegister.isEditing ? true : false} onClick={() => handleClickEdit(employee._id)}>Edit</Button>
                )}
                <Button variant="danger" disabled={editingRegister.isEditing ? true : false} onClick={() => handleDelete(employee._id)}>Delete</Button>
            </td>
        </tr>
    )
}

export default EmployeeListItem;