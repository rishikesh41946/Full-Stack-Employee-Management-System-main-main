import { useSelector } from 'react-redux'
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import EmployeeListItem from '../../components/EmployeeListItem';

const selectDepartments = state => state.departments;
const selectEmployees = state => state.employees;

function DepartmentView () {
    const { departmentName } = useParams();

    const departments = useSelector(selectDepartments);
    const employees = useSelector(selectEmployees);

    const department = departments.find(department => department.name === departmentName);

    return (
        <Container fluid className='mt-3'>
            <h2 className='p-2 text-center text-light'>Department: {departmentName}</h2>

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
                    {employees.filter(employee => employee.department._id === department._id).map((employee) => (
                        <EmployeeListItem key={employee._id} employee={employee} />
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default DepartmentView;