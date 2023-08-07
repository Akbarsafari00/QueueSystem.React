//Include Both Helper File with needed methods

// action
import {fetchError, fetchItemsSuccess, fetchItemSuccess ,resetState} from "./reducer";
import {
    deleteDepartmentDelete,
    getDepartmentsFilter,
    postDepartmentCreate,
    putDepartmentUpdate
} from "../../../helpers/api_helper";
import {reset} from "list.js";


export const getDepartmentsFilter = () => async (dispatch) => {
    try {
        let response;

        response = getDepartmentsFilter();

        const data = await response;

        if (data) {
            dispatch(fetchItemsSuccess(data));
        }

    } catch (error) {
        dispatch(fetchError(error));
    }
};


export const getDepartmentDetail = (id) => async (dispatch) => {
    try {
        let response;

        response = getDepartmentDetail(id);

        const data = await response;

        if (data) {
            dispatch(fetchItemSuccess(data));
        }

    } catch (error) {
        dispatch(fetchError(error));
    }
};


export const createDepartment = (data) => async (dispatch) => {
    try {
        let response;

        response = postDepartmentCreate(data);

        const data = await response;

        if (data) {
            dispatch(fetchItemSuccess(data));
        }

    } catch (error) {
        dispatch(fetchError(error));
    }
};

export const updateDepartment = (data) => async (dispatch) => {
    try {
        let response;

        response = putDepartmentUpdate(data);

        const data = await response;

        if (data) {
            dispatch(fetchItemSuccess(data));
        }

    } catch (error) {
        dispatch(fetchError(error));
    }
};


export const deleteDepartment = (id) => async (dispatch) => {
    try {
        let response;

        response = deleteDepartmentDelete(id);

        const data = await response;

        if (data) {
            dispatch(resetState());
        }

    } catch (error) {
        dispatch(fetchError(error));
    }
};


