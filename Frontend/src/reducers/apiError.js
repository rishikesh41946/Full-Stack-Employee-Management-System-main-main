import Swal from 'sweetalert2'
import { API_ERROR } from "../actions/types";

export function apiError(state = {}, action) {
  switch (action.type) {
    case API_ERROR:
        Swal.fire({
            icon: "error",
            title: "Error...",
            text: "An internal server erorr has ocurred!",
            });

        return true;
    default:
        return state;
  }
}