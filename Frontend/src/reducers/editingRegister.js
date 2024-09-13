import { CHANGE_EDITING_REGISTER } from "../actions/types";

export function editingRegister(state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_EDITING_REGISTER:
            return payload;

        default:
            return state;
    }
};