import { CREATE_EMPLOYEE, RETRIEVE_EMPLOYEES, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from "./types";
import { isLoading } from "./departments";
import { apiError } from "./departments";
import EmployeeService from "../services/employee.services";

import { retrieveDepartments } from "./departments";
  
export const createEmployee = (name, surname, departmentId) => {
    return dispatch =>{
        dispatch(isLoading(true));

        console.log('Employee Action: Creating Employee');
        EmployeeService.create(name, surname, departmentId)
            .then(response => {
                console.log('Employee Action: Creating suceeded', response);
                return response;
            })
            .then(response => {
                dispatch(isLoading(false));
                dispatch(createEmployeeResponse(response.data.returnEmployee));
            })
            .catch(e => {
                console.log('Employee Action: Creating failed');
                console.log(e);
                dispatch(apiError());
                dispatch(isLoading(false));
            });
    }
};

export const retrieveEmployees = () => {
    return dispatch =>{
        dispatch(isLoading(true));

        console.log('Employee Action: Getting All Employee');
        EmployeeService.getAll()
            .then(response => {
                console.log('Employee Action: Getting All suceeded', response);
                return response;
            })
            .then(response =>  {
                dispatch(isLoading(false));
                dispatch(retrieveEmployeesResponse(response.data));
            })
            .catch(e => {
                console.log('Employee Action: Getting All failed');
                console.log(e);
                dispatch(apiError());
                dispatch(isLoading(false));
            });
    }
};

export const updateEmployee = (id, name, surname, departmentId) => {
    return dispatch =>{
        dispatch(isLoading(true));

        console.log('Employee Action: Updating Employee');
        EmployeeService.update(id, name, surname, departmentId)
            .then(response => {
                console.log('Employee Action: Updating suceeded', response);
                return response;
            })
            .then(response => {
                dispatch(isLoading(false));
                dispatch(updateEmployeeResponse(response.data.updatedEmployee));
                dispatch(retrieveDepartments());
            })
            .catch(e => {
                console.log('Employee Action: Updating failed');
                console.log(e);
                dispatch(apiError());
                dispatch(isLoading(false));
            });

    }
};

export const deleteEmployee = (id) => {
    return dispatch =>{
        dispatch(isLoading(true));

        console.log('Employee Action: Deleting Employee');
        EmployeeService.delete(id)
            .then(response => {
                console.log('Employee Action: Deleting suceeded', response);
                return response;
            })
            .then(response => {
                dispatch(isLoading(false));
                dispatch(deleteEmployeeResponse(id));
                dispatch(retrieveDepartments());
            })
            .catch(e => {
                console.log('Employee Action: Deleting failed');
                console.log(e);
                dispatch(apiError());
                dispatch(isLoading(false));
            });
    }
};

const createEmployeeResponse = (data) => {
    return {
        type : CREATE_EMPLOYEE,
        payload : data
    }
};

const retrieveEmployeesResponse = (data) => {
    return {
        type : RETRIEVE_EMPLOYEES,
        payload : data
    }
};

const updateEmployeeResponse = (data) => {
    return {
        type : UPDATE_EMPLOYEE,
        payload : data
    }
};

const deleteEmployeeResponse = (data) => {
    return {
        type : DELETE_EMPLOYEE,
        payload : data
    }
};