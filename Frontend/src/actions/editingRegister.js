import { CHANGE_EDITING_REGISTER } from "./types";

export const changeEditRegister = (type, id, isEditing) => {
    return {
        type : CHANGE_EDITING_REGISTER,
        payload : {
            type : type,
            id : id,
            isEditing: isEditing
        }
    }
};