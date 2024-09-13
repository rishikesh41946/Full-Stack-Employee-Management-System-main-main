import { CREATE_DEPARTMENT, RETRIEVE_DEPARTMENTS, UPDATE_DEPARTMENT, DELETE_DEPARTMENT } from "../actions/types";


export function departments(state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_DEPARTMENT:
            return [...state, payload];

        case RETRIEVE_DEPARTMENTS:
            return payload;

        case UPDATE_DEPARTMENT:
            return state.map(department =>
                department._id === payload._id ? payload : department
            );

        case DELETE_DEPARTMENT:
            return state.filter(department => department._id !== payload);

        default:
            return state;
    }
};