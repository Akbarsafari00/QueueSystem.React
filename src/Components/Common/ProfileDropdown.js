import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

//import images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import { useAuth } from '../Hooks/UserHooks';

const ProfileDropdown = () => {


    const {user , status} = useAuth();

    const [userName, setUserName] = useState("");
    const [fullName, setFullname] = useState("");

    useEffect(() => {
        if (status === "authenticated") {
            
            setUserName(user.userName);
            setFullname(`${user.firstName ?? "بدون"} ${user.lastName ?? "نام"}`);
        }
    }, [status, user]);

    //Dropdown Toggle
    const [isProfileDropdown, setIsProfileDropdown] = useState(false);
    const toggleProfileDropdown = () => {
        setIsProfileDropdown(!isProfileDropdown);
    };
    return (
        <React.Fragment>
            <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown} className="ms-sm-3 header-item topbar-user">
                <DropdownToggle tag="button" type="button" className="btn">
                    <span className="d-flex align-items-center">
                        <img className="rounded-circle header-profile-user" src={avatar1}
                            alt="Header Avatar" />
                        <span className="text-start ms-xl-2">
                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{userName}</span>
                            <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">{fullName}</span>
                        </span>
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                    <h6 className="dropdown-header">خوش اومدی  {userName}!</h6>
                    <DropdownItem className='p-0'>
                        <Link to={process.env.PUBLIC_URL + "/profile"} className="dropdown-item">
                            <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                            <span className="align-middle">حساب کاربری</span>
                        </Link>
                    </DropdownItem>
                    <div className="dropdown-divider"></div>
                    
                    <DropdownItem className='p-0'>
                        <Link to={process.env.PUBLIC_URL + "/auth-lockscreen-basic"} className="dropdown-item">
                            <i
                                className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">قفل صحفه</span>
                        </Link>
                    </DropdownItem>
                    <DropdownItem className='p-0'>
                        <Link to={process.env.PUBLIC_URL + "/logout"} className="dropdown-item">
                            <i
                                className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle" data-key="t-logout">خروج از سیستم</span>
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default ProfileDropdown;