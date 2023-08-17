import {useEffect, useState} from "react";
import {getAccessToken, getUser, setAuthorization} from "../../helpers/api_helper";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../slices/thunks";
import {createSelector} from 'reselect';
import {setAuth} from "../../slices/auth/reducer";

const useAuth = () => {
    const dispatch = useDispatch();
    const accessToken = getAccessToken();
    const user = getUser();

    
    useEffect(() => {
        dispatch(setAuth({
            accessToken,
            status: (user != null && accessToken != null)?"authenticated":"unauthenticated",
            user
        }))
    }, [])

    return useSelector(createSelector(
        (state) => state.Auth,
        (state) => ({
            user: state.user,
            status: state.status,
            accessToken: state.accessToken,
            isAuthenticated : (state.status === "authenticated")
        })
    ));

};

export {useAuth};


