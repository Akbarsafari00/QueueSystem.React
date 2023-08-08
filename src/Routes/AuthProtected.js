import React, {useEffect} from "react";
import {Navigate, Route} from "react-router-dom";
import {setAuthorization} from "../helpers/api_helper";
import {useDispatch} from "react-redux";

import {useAuth} from "../Components/Hooks/UserHooks";

import {logoutUser, setUserLoggedIn} from "../slices/auth/login/thunk";
import {getProfile} from "../slices/thunks";

const AuthProtected = (props) => {

    const dispatch = useDispatch();
    const {accessToken, isLoggedIn} = useAuth();

    useEffect(() => {
        if (accessToken) {
            setAuthorization(accessToken);
            dispatch(setUserLoggedIn());
            dispatch(getProfile());
        } else {
            dispatch(logoutUser());
        }
    }, [accessToken]);

    /*
      Navigate is un-auth access protected routes via url
      */

    if (!accessToken) {
        return (
            <Navigate to={{pathname: "/login", state: {from: props.location}}}/>
        );
    }
    return <>{props.children}</>;
};

const AccessRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                return (<> <Component {...props} /> </>);
            }}
        />
    );
};

export {AuthProtected, AccessRoute};