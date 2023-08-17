import {getAuthProfile, postJwtLogin, setAuthorization} from "../../helpers/api_helper";
import {loginFailed, loginSuccess, logoutSuccess,profileSuccess,profileFailed,profileStart,loginStart} from "./reducer";

export const loginUser = (user) => async (dispatch) => {
    try {

        dispatch(loginStart);

        const response = postJwtLogin({
            userName: user.username,
            password: user.password
        });

        const data = await response;

        if (data) {
            sessionStorage.setItem("accessToken", data.accessToken);
            setAuthorization(data.accessToken);
            dispatch(loginSuccess(data));
            dispatch(getProfile());
            
        }
    } catch (error) {
        dispatch(loginFailed(error));
    }
};

export const logoutUser = () => async (dispatch) => {
    sessionStorage.removeItem("accessToken");
    dispatch(logoutSuccess());
};


export const getProfile = () => async (dispatch) => {
    try {
        dispatch(profileStart);

        let response = getAuthProfile();

        const data = await response;

        if (data) {
            sessionStorage.setItem("user", JSON.stringify(data.user));
            dispatch(profileSuccess({user:data.user}));
        }

    } catch (error) {
        dispatch(profileFailed(error));
    }
};
