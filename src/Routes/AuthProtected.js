import React, {useEffect} from "react";
import {Navigate, Route, useNavigate} from "react-router-dom";
import {setAuthorization} from "../helpers/api_helper";
import {useDispatch} from "react-redux";

import {useAuth} from "../Components/Hooks/UserHooks";

import {logoutUser} from "../slices/auth/thunk";
import {getProfile} from "../slices/thunks";
import {setAuth} from "../slices/auth/reducer";

const AuthProtected = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {accessToken, status,user} = useAuth();
    
        
    useEffect(() => {
        console.log(status)
        console.log(accessToken != null && status === "authenticated")
        if (accessToken != null && status === "authenticated") {
            setAuthorization(accessToken);
        }  else if(status === "unauthenticated") {
            navigate("/logout")
        }
    }, [accessToken,status]);
    
    

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