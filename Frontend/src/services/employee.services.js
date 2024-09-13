import http from "../http-common";

class EmployeeService {
  getAll() {
    return http.get("/employees");
  }

  create(name, surname, departmentId) {
    let data = {
      name: name,
      surname: surname,
      departmentId: departmentId
    };

    return http.post("/employees", data);
  }

  update(id, name, surname, departmentId) {
    let data = {
      name: name,
      surname: surname,
      departmentId: departmentId
    };

    return http.put(`/employees/${id}`, data);
  }

  delete(id) {
    return http.delete(`/employees/${id}`);
  }
}

export default new EmployeeService();