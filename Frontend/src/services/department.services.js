import http from "../http-common";

class DepartmentService {
  getAll() {
    return http.get("/");
  }

  create(name) {
    let data = {
      name: name
    };

    return http.post("/", data);
  }

  update(id, name) {
    let data = {
      name: name
    };

    return http.put(`/${id}`, data);
  }

  delete(id) {
    return http.delete(`/${id}`);
  }
}

export default new DepartmentService();