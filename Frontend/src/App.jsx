import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './App.css'

import Sidebar from "./components/Sidebar";
import EmployeeList from "./views/employees/employeeList";
import DepartmentList from "./views/departments/departmentList";
import CreateNewDepartment from "./views/departments/createNewDepartment";
import CreateNewEmployee from "./views/employees/createNewEmployee";
import DepartmentView from "./views/departments/departmentView";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Container fluid className='page-contaniner'>
              <Routes>
                <Route path="/" element={<DepartmentList />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/departments/create" element={<CreateNewDepartment />} />
                <Route path="/employees/create" element={<CreateNewEmployee />} />
                <Route path="/departments/:departmentName" element={<DepartmentView />} />
              </Routes>
            </Container>
          </div>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App
