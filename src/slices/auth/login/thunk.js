//Include Both Helper File with needed methods
import {getFirebaseBackend} from "../../../helpers/firebase_helper";
import {loginSuccess, logoutUserSuccess, apiError, reset_login_flag} from './reducer';
import {postJwtLogin} from "../../../helpers/api_helper";

export const loginUser = (user, history) => async (dispatch) => {
    try {

        const response = postJwtLogin({
            userName: user.username,
            password: user.password
        });

        const data = await response;
        console.log(data)

        if (data) {
            sessionStorage.setItem("accessToken", JSON.stringify(data.accessToken));
            dispatch(loginSuccess(data));
            history('/dashboard')
        }
    } catch (error) {
        dispatch(apiError(error));
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        sessionStorage.removeItem("accessToken");
        dispatch(logoutUserSuccess(true));

    } catch (error) {
        dispatch(apiError(error));
    }
};

export const socialLogin = (type, history) => async (dispatch) => {
    try {
        let response;

        if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
            const fireBaseBackend = getFirebaseBackend();
            response = fireBaseBackend.socialLoginUser(type);
        }
        //  else {
        //   response = postSocialLogin(data);
        // }

        const socialdata = await response;
        if (socialdata) {
            sessionStorage.setItem("authUser", JSON.stringify(response));
            dispatch(loginSuccess(response));
            history('/dashboard')
        }

    } catch (error) {
        dispatch(apiError(error));
    }
};

export const resetLoginFlag = () => async (dispatch) => {
    try {
        const response = dispatch(reset_login_flag());
        return response;
    } catch (error) {
        dispatch(apiError(error));
    }
};