import { CREATE_EMPLOYEE, RETRIEVE_EMPLOYEES, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from "../actions/types";

export function employees(state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_EMPLOYEE:
            return [...state, payload];

        case RETRIEVE_EMPLOYEES:
            return payload;

        case UPDATE_EMPLOYEE:
            return state.map(employee =>
                employee._id === payload._id ? payload : employee
            );

        case DELETE_EMPLOYEE:
            return state.filter(employee => employee._id !== payload);

        default:
            return state;
    }
};