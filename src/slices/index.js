import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// Authentication
import LoginReducer from "./auth/login/reducer";
import ProfileReducer from "./auth/profile/reducer";
import DepartmentReducer from "./definitions/departments/reducer";
import DepartmentUnitReducer from "./definitions/department-units/reducer";



const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Login: LoginReducer,
    Profile: ProfileReducer,
    Department: DepartmentReducer,
    DepartmentUnit: DepartmentUnitReducer
});

export default rootReducer;