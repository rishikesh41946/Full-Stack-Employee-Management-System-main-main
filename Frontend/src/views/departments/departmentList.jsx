import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Container, Button, Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { updateDepartment, deleteDepartment } from '../../actions/departments';
import { changeEditRegister } from '../../actions/editingRegister';

const selectDepartments = state => state.departments;
const selectEditingRegister = state => state.editingRegister;

function DepartmentList () {
    const departments = useSelector(selectDepartments);
    const editingRegister = useSelector(selectEditingRegister);
    const dispatch = useDispatch();

    const [editName, setEditName] = useState(
        editingRegister.isEditing && editingRegister.type === 'department' 
        ? departments.find(dept => dept._id === editingRegister.id).name 
        : ''
    );
    const [error, setError] = useState(' ');

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
                dispatch(deleteDepartment(id));
            }
          })
    };

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setEditName(newValue);
        validateName(newValue);
    };

    const validateName = (value) => {
        if (value === '') {
            setError('The name cannot be empty');
        } else if (value.length < 2) {
            setError('The name leght must be at least 2');
        } else if (value.length > 255) {
            setError('The name leght must be less than 255');
        } else if (!regex.test(value)) {
            setError('The name must be a string');
        } else if (checkNameExists(value)) {
            setError('The name already exists');
        } else {
            setError('');
        }
    }

    function checkNameExists(nameCheck) {
        return departments.some(department => department._id !== editingRegister.id && department.name.toUpperCase() === nameCheck.toUpperCase());
    }

    const handleClickEdit = (id) => {
        dispatch(changeEditRegister('department', id, true ));
        setEditName(departments.find(dept => dept._id === id).name);
    };

    const handleSubmitEdit = (id) => {
        dispatch(changeEditRegister('', '', false ));

        dispatch(updateDepartment(id, editName));

        setEditName('');
        setError(' ');
    };

    const handleCancelEdit = (id) => {
        dispatch(changeEditRegister('', '', false ));
        setEditName('');
        setError(' ');
    };

    return (
        <Container fluid className='mt-3'>
            <h2 className='p-2 text-center text-light'>Departments</h2>

            <div className='d-flex justify-content-end'>
                <Button variant="success" size='lg' className='mr-3'>
                    <Link to={'/departments/create'} className='text-light' style={{ textDecoration: 'none' }}>Create new Department</Link>
                </Button>
            </div>

            <Table striped bordered hover variant="dark" responsive="lg" className='mt-3'>
                <colgroup>
                    <col span="1" style={{width: "60%"}}/>
                    <col span="1" style={{width: "40%"}}/>
                </colgroup>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department) => (
                        <tr key={department._id}>
                            <td>
                                {editingRegister.isEditing && editingRegister.type === 'department' && editingRegister.id === department._id ? (
                                    <Form.Group className="m-3">
                                        <Form.Control className="form-dark" type="text" placeholder="Enter department name" value={editName}  onChange={handleInputChange} />
                                        {error && <p className='text-danger'>{error}</p>}
                                    </Form.Group>
                                ) : (
                                    <Link to={`/departments/${department.name}`} className='text-light' style={{ textDecoration: 'none' }}>
                                        {department.name}
                                    </Link>
                                    
                                )}
                            </td>
                            <td>
                                {editingRegister.isEditing && editingRegister.type === 'department' && editingRegister.id === department._id ? (
                                    <>
                                        <Button variant="success" style={{marginRight: '5px'}} disabled={error === '' ? false : true} onClick={() => handleSubmitEdit(department._id)}>Confirm Changes</Button>
                                        <Button variant="secondary" style={{marginRight: '10px'}} onClick={() => handleCancelEdit(department._id)}>Cancel Changes</Button>
                                    </>
                                ) : (
                                    <Button variant="warning" style={{marginRight: '10px'}} disabled={editingRegister.isEditing ? true : false} onClick={() => handleClickEdit(department._id)}>Edit</Button>
                                )}
                                
                                <Button variant="danger" disabled={editingRegister.isEditing ? true : false} onClick={() => handleDelete(department._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default DepartmentList;