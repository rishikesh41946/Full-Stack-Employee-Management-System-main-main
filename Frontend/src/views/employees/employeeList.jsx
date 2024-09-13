import { useSelector } from 'react-redux'
import { Container, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import EmployeeListItem from '../../components/EmployeeListItem';

const selectEmployees = state => state.employees;

function EmployeeList () {
    const employees = useSelector(selectEmployees);

    return (
        <Container fluid className='mt-3'>
            <h2 className='p-2 text-center text-light'>Employees</h2>

            <div className='d-flex justify-content-end'>
                <Button variant="success" size='lg' className='mr-3'>
                    <Link to='/employees/create' className='text-light' style={{ textDecoration: 'none' }}>Create new Employee</Link>
                </Button>
            </div>

            <Table striped bordered hover variant="dark" responsive="lg" className='mt-3'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <EmployeeListItem key={employee._id} employee={employee} />
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default EmployeeList;