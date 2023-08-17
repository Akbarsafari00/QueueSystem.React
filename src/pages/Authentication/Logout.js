import PropTypes from "prop-types";
import React, {useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom";

import {logoutUser} from "../../slices/thunks";

//redux
import {useSelector, useDispatch} from "react-redux";

import withRouter from "../../Components/Common/withRouter";
import {createSelector} from "reselect";

const Logout = (props) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();

    useEffect(() => {
        dispatch(logoutUser());
        navigator("/login")
    }, [dispatch]);
    
    return<></>
};

Logout.propTypes = {
    history: PropTypes.object,
};


export default withRouter(Logout);