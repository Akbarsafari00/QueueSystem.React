import axios from 'axios';
import {POST_AUTH_LOGIN} from "../../helpers/url_helper";
export const postAuthLogin = async ({ username, password }) => {
    try {
        const response = axios.post(POST_AUTH_LOGIN,{username,password});
        return response.data;
    } catch (error) {
        throw error.response.data.error || new Error('Login failed');
    }
};

