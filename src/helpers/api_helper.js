import axios from "axios";
import {api} from "../config";
import * as url from "./url_helper";
import {GET_AUTH_PROFILE, GET_DEPARTMENT_FILTER} from "./url_helper";

// default
axios.defaults.baseURL = api.API_URL;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const token = JSON.parse(sessionStorage.getItem("authUser")) ? JSON.parse(sessionStorage.getItem("authUser")).token : null;
if (token)
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

// intercepting to capture errors
axios.interceptors.response.use(
    function (response) {
        return response.data ? response.data : response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid credentials";
                break;
            case 404:
                message = "Sorry! the data you are looking for could not be found";
                break;
            default:
                message = error.message || error;
        }
        return Promise.reject(message);
    }
);
/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token) => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};

class APIClient {
    /**
     * Fetches data from given url
     */

        //  get = (url, params) => {
        //   return axios.get(url, params);
        // };
    get = (url, params) => {
        let response;

        let paramKeys = [];

        if (params) {
            Object.keys(params).map(key => {
                paramKeys.push(key + '=' + params[key]);
                return paramKeys;
            });

            const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
            response = axios.get(`${url}?${queryString}`, params);
        } else {
            response = axios.get(`${url}`, params);
        }

        return response;
    };
    /**
     * post given data to url
     */
    create = (url, data) => {

        return axios.post(url, data);
    };
    /**
     * Updates data
     */
    update = (url, data) => {
        return axios.patch(url, data);
    };

    put = (url, data) => {
        return axios.put(url, data);
    };
    /**
     * Delete
     */
    delete = (url, config) => {
        return axios.delete(url, {...config});
    };
}

const getAccessToken = () => {
    const user = sessionStorage.getItem("accessToken");
    if (!user) {
        return null;
    } else {
        return JSON.parse(user);
    }
};

export {APIClient, setAuthorization, getAccessToken};


const apiClient = new APIClient();

export const postJwtLogin = data => apiClient.create(url.POST_AUTH_LOGIN, data);

export const getAuthProfile = () => apiClient.get(url.GET_AUTH_PROFILE)


export const getDepartmentsFilter = ({search}) => {
    let query = "";
    console.log(search)
    if (search){
        query += `search=${search}`;
    }

    return apiClient.get(`/Department/Filter?` + query);
}
export const getDepartmentDetail = (id) => apiClient.get(`/Department/${id}/Detail`)
export const postDepartmentCreate = (data) => apiClient.create(`/Department/Create`, data)
export const putDepartmentUpdate = (data) => apiClient.put(`/Department/Update`, data)
export const deleteDepartmentDelete = (id) => apiClient.delete(`/Department/${id}/Delete`)


export const fetchDepartmentUnitFilter = ({search}) => {
    let query = "";
    console.log(search)
    if (search){
        query += `search=${search}`;
    }

    return apiClient.get(`/DepartmentUnit/Filter?` + query);
}
export const fetchDepartmentUnitDetail = (id) => apiClient.get(`/DepartmentUnit/${id}/Detail`)
export const postDepartmentUnitCreate = (data) => apiClient.create(`/DepartmentUnit/Create`, data)
export const putDepartmentUnitUpdate = (data) => apiClient.put(`/DepartmentUnit/Update`, data)
export const deleteDepartmentUnitDelete = (id) => apiClient.delete(`/DepartmentUnit/${id}/Delete`)
