import {useEffect, useState} from "react";
import {getAccessToken, setAuthorization} from "../../helpers/api_helper";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../slices/thunks";
import {createSelector} from 'reselect';

const useAuth = () => {
    const accessToken = getAccessToken();

    const profileSelector = createSelector(
        (state) => state,
        (state) => ({
            user: state.Profile.user,
            isLoggedIn: state.Login.isLoggedIn
        })
    );
// Inside your component
    const {user, isLoggedIn} = useSelector(profileSelector);
    return {accessToken, user, isLoggedIn};
};

export {useAuth};


