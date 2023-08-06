//Include Both Helper File with needed methods

// action
import {profileSuccess, profileError, resetProfileFlagChange} from "./reducer";
import {getAuthProfile} from "../../../helpers/api_helper";


export const getProfile = (user) => async (dispatch) => {
    try {
        let response;

        response = getAuthProfile();

        const data = await response;

        if (data) {
            dispatch(profileSuccess(data));
        }

    } catch (error) {
        dispatch(profileError(error));
    }
};

