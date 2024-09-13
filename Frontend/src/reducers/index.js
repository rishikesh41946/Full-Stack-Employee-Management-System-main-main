import { combineReducers } from "redux";
import { departments } from "./departments";
import { employees } from "./employees";
import { isLoading } from "./isLoading";
import { editingRegister } from "./editingRegister";
import { apiError } from "./apiError";

export default combineReducers({
  departments,
  employees,
  isLoading,
  editingRegister,
  apiError
});