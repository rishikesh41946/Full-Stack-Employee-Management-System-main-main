import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';

import { createEmployee } from '../../actions/employees';

const selectDepartments = state => state.departments;
const selectEmployees = state => state.employees;

function CreateNewEmployee () {
    const departments = useSelector(selectDepartments);
    const employees = useSelector(selectEmployees);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [nameError, setNameError] = useState(' ');
    const [surnameError, setSurnameError] = useState(' ');
    const [departmentError, setDepartmentError] = useState(' ');
    const [existsError, setExistsError] = useState(' ');

    const name = useRef('');
    const surname = useRef('');
    const department = useRef();
    
    const regex = /[a-zA-Z]/g;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateNameField() && validateSurnameField() && department.current.value !== 'Select a department') {
            if (checkNameSurnameExists()) {
                setExistsError('This employee already exists');
            } else {
                dispatch(createEmployee(name.current.value, surname.current.value, department.current.value));
                navigate(-1)
            }
        } 
    }

    function checkNameSurnameExists() {
        let nameCheck = name.current.value;
        let surnameCheck = surname.current.value;

        return employees.some(employee => employee.name.toUpperCase() === nameCheck.toUpperCase() && employee.surname.toUpperCase() === surnameCheck.toUpperCase());
    }

    const validateNameField = () => {
        let value = name.current.value;

        return (value !== '' && value.length >= 2  &&  value.length < 255  &&  regex.test(value));
    }

    const validateSurnameField = () => {
        let value = surname.current.value;

        return (value !== '' && value.length >= 2  &&  value.length < 255  &&  regex.test(value));
    }

    const validateSelect = () => {
        let value = department.current.value;

        if (value === 'Select a department') {
            setDepartmentError('Please select a valid department');
        } else {
            setDepartmentError('');
        }
      };

    const validateName = () => {
        let value = name.current.value;

        let erorrText = validationRules(value, 'name');

        setNameError(erorrText);
    }

    const validateSurname = () => {
        let value = surname.current.value;

        let erorrText = validationRules(value, 'surname');

        setSurnameError(erorrText);
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
        <Container fluid className='mt-3'>
            <h2 className='p-2 text-center text-light'>Create New Department</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-3">
                    <Form.Label className='text-light'>Name</Form.Label>
                    <Form.Control className="form-dark" type="text" ref={name} placeholder="Enter the employee name" onChange={validateName} />
                    {nameError && <p className='text-danger'>{nameError}</p>}
                </Form.Group>

                <Form.Group className="m-3">
                    <Form.Label className='text-light'>Surname</Form.Label>
                    <Form.Control className="form-dark" type="text" ref={surname} placeholder="Enter the employee surname" onChange={validateSurname} />
                    {surnameError && <p className='text-danger'>{surnameError}</p>}
                </Form.Group>

                <Form.Group className="m-3">
                    <Form.Label className='text-light'>Department</Form.Label>
                    <Form.Select className="form-dark" ref={department} onChange={validateSelect}>
                        <option>Select a department</option>
                        {departments.map((department) => {
                            return <option key={department._id} value={department._id}>{department.name}</option>
                        })}
                    </Form.Select>
                    {departmentError && <p className='text-danger'>{departmentError}</p>}
                </Form.Group>

                {existsError && <p className='text-danger'>{existsError}</p>}

                <div className='d-flex justify-content-end'>
                    <Button type='submit' variant="success" size='lg' className='mr-3' disabled={nameError === '' && surnameError === '' && departmentError === '' ? false : true}>
                        Create
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default CreateNewEmployee;