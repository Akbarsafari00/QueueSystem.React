//Include Both Helper File with needed methods

// action
import {fetchError, fetchItemsSuccess, fetchItemSuccess, resetState} from "./reducer";
import {
    deleteDepartmentUnitDelete, fetchDepartmentUnitDetail,
    fetchDepartmentUnitFilter,
    postDepartmentUnitCreate,
    putDepartmentUnitUpdate
} from "../../../helpers/api_helper";
import {reset} from "list.js";
import {logoutUser} from "../../auth/thunk";


export const filterDepartmentUnits = ({search}) => async (dispatch) => {
    try {
        let response;
        response = fetchDepartmentUnitFilter({search});

        
        
        const data = await response;

        if (data) {
            dispatch(fetchItemsSuccess(data));
        }

    } catch (error) {
        if (error.status === 401){
            dispatch(logoutUser());
        }
        dispatch(fetchError(error.message));
    }
};


export const getDepartmentUnitDetail = (id) => async (dispatch) => {
    try {
        let response;

        response = fetchDepartmentUnitDetail(id);

        const data = await response;

        if (data) {
            dispatch(fetchItemSuccess(data));
        }

    } catch (error) {
        dispatch(fetchError(error));
    }
};


export const createDepartmentUnit = (payload) => async (dispatch) => {

    try {
        let response;
        response = postDepartmentUnitCreate(payload);

        const data = await response;

        if (data) {
            dispatch(fetchItemSuccess(data));
            return data;
        }
        
        return null;
    } catch (error) {
        dispatch(fetchError(error));
        return null;
    }
};

export const updateDepartmentUnit = (payload) => async (dispatch) => {
    try {
        let response;

        response = putDepartmentUnitUpdate(payload);

        const data = await response;

        if (data) {
            dispatch(fetchItemSuccess(data));
            return data;
        }
        
        return  null;

    } catch (error) {
        dispatch(fetchError(error));
        return  null;
    }
};


export const deleteDepartmentUnit = (id) => async (dispatch) => {
    try {
        let response;

        response = deleteDepartmentUnitDelete(id);

        const data = await response;

        if (data) {
            dispatch(fetchItemSuccess(data));
            return data;
        }

        return null;

    } catch (error) {
        dispatch(fetchError(error));
        return null;
    }
};


