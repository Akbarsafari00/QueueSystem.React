import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// Authentication
import AuthReducer from "./auth/reducer";
import DepartmentReducer from "./definitions/departments/reducer";
import DepartmentUnitReducer from "./definitions/department-units/reducer";




const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Auth: AuthReducer,
    Department: DepartmentReducer,
    DepartmentUnit: DepartmentUnitReducer
});

export default rootReducer;