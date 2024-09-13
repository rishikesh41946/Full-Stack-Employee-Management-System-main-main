import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createDepartment } from '../../actions/departments';

const selectDepartments = state => state.departments;

function CreateNewDepartment () {
    const navigate = useNavigate();

    const departments = useSelector(selectDepartments);
    const dispatch = useDispatch();

    const name = useRef('');

    const [error, setError] = useState(' ');
    const [existsError, setExistsError] = useState(' ');
    
    const regex = /[a-zA-Z]/g;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateNameField()) {
            if (checkNameExists()) {
                setExistsError('This department already exists');
            } else {
                dispatch(createDepartment(name.current.value));
                navigate(-1)
            }
        } 
    }

    function checkNameExists() {
        let nameCheck = name.current.value;

        return departments.some(department => department.name.toUpperCase() === nameCheck.toUpperCase());
    }

    const validateNameField = () => {
        let value = name.current.value;

        return (value !== '' && value.length >= 2  &&  value.length < 255  &&  regex.test(value));
    }

    const validateName = () => {
        let value = name.current.value;

        if (value === '') {
            setError('The name cannot be empty');
        } else if (value.length < 2) {
            setError('The name leght must be at least 2');
        } else if (value.length > 255) {
            setError('The name leght must be less than 255');
        } else if (!regex.test(value)) {
            setError('The name must be a string');
        } else {
            setError('');
        }
    }

    return (
        <Container fluid className='mt-3'>
            <h2 className='p-2 text-center text-light'>Create New Department</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-3">
                    <Form.Label className='text-light'>Department name</Form.Label>
                    <Form.Control className="form-dark" type="text" ref={name} placeholder="Enter department name" onChange={validateName} />
                    {error && <p className='text-danger'>{error}</p>}
                </Form.Group>

                {existsError && <p className='text-danger'>{existsError}</p>}

                <div className='d-flex justify-content-end mt-3'>
                    <Button type='submit' variant="success" size='lg' className='mr-3' disabled={error === '' ? false : true}>
                        Create
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default CreateNewDepartment;