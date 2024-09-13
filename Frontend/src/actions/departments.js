import { CREATE_DEPARTMENT, RETRIEVE_DEPARTMENTS, UPDATE_DEPARTMENT, DELETE_DEPARTMENT, IS_LOADING, API_ERROR } from "./types";
import DepartmentService from "../services/department.services";

import { retrieveEmployees } from "./employees";
  
export const createDepartment = (name) => {
    return async function createDepartmentThunk (dispatch, getState) {
        dispatch(isLoading(true));

        dispatch(isLoading(true));
        console.log('Department Action: Creating Department');
        DepartmentService.create(name)
            .then(response => {
                console.log('Department Action: Creating suceeded', response);
                return response;
            })
            .then(response => {
                dispatch(isLoading(false));
                dispatch(createDepartmentResponse(response.data.returnDepartment));
            })
            .catch(e => {
                console.log('Department Action: Creating failed');
                console.log(e);
                dispatch(apiError());
                dispatch(isLoading(false));
            });
    }
};

export const retrieveDepartments = () => {
    return async function retrieveDepartmentsThunk (dispatch, getState) {
        dispatch(isLoading(true));      

        dispatch(isLoading(true));
        console.log('Department Action: Getting All Departments');
        DepartmentService.getAll()
            .then(response => {
                console.log('Department Action: Getting All suceeded', response);
                return response;
            })
            .then(response => {
                dispatch(isLoading(false));
                dispatch(retrieveDepartmentsResponse(response.data));
            })
            .catch(e => {
                console.log('Department Action: Getting All failed');
                console.log(e);
                dispatch(apiError());
                dispatch(isLoading(false));
            });
    }
};

export const updateDepartment = (id, name) => {
    return async function updateDepartmentThunk (dispatch, getState) {
        dispatch(isLoading(true));

        console.log('Department Action: Updating Department');
        DepartmentService.update(id, name)
            .then(response => {
                console.log('Department Action: Updating suceeded', response);
                return response;
            })
            .then(response => {
                dispatch(isLoading(false));
                dispatch(updateDepartmentResponse(response.data.updatedDepartment));
                dispatch(retrieveEmployees());
            })
            .catch(e => {
                console.log('Department Action: Updating failed');
                console.log(e);
                dispatch(apiError());
                dispatch(isLoading(false));
            });
    }
};

export const deleteDepartment = (id) => {
    return async function deleteDepartmentThunk (dispatch, getState) {
        dispatch(isLoading(true));

        console.log('Department Action: Deleting Department');
        DepartmentService.delete(id)
            .then(response => {
                console.log('Department Action: Deleting suceeded', response);
                return response;
            })
            .then(response => {
                dispatch(isLoading(false));
                dispatch(deleteDepartmentResponse(id));
                dispatch(retrieveEmployees());
            })
            .catch(e => {
                console.log('Department Action: Deleting failed');
                console.log(e);
                dispatch(apiError());
                dispatch(isLoading(false));
            });
    }
};

export function isLoading(isLoading = false) {
    return {
      type: IS_LOADING,
      isLoading: isLoading,
    };
};

export function apiError() {
    return {
      type: API_ERROR
    };
};

const createDepartmentResponse = (data) => {
    return {
        type : CREATE_DEPARTMENT,
        payload : data
    }
};

const retrieveDepartmentsResponse = (data) => {
    return {
        type : RETRIEVE_DEPARTMENTS,
        payload : data
    }
};

const updateDepartmentResponse = (data) => {
    return {
        type : UPDATE_DEPARTMENT,
        payload : data
    }
};

const deleteDepartmentResponse = (data) => {
    return {
        type : DELETE_DEPARTMENT,
        payload : data
    }
};