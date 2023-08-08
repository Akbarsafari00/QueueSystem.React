import React, {useState, useEffect} from "react";

import {
    Container,
    Row,
    Col,
    Card,
    Alert,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Button,
    Label,
    Input,
    FormFeedback,
    Form, ButtonGroup,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import SimpleBar from "simplebar-react";
import List from "list.js";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {filterDepartments} from "../../../slices/definitions/departments/thunk";
import {createSelector} from "reselect";
import {useAuth} from "../../../Components/Hooks/UserHooks";
import XListItem from "../../../Components/XList/XListItem";
import XList from "../../../Components/XList/XList";

const DepartmentPage = () => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    const {accessToken, isLoggedIn} = useAuth();
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(filterDepartments({search}));
        }
    }, [accessToken, isLoggedIn, search]);

    const departmentSelector = createSelector(
        (state) => state.Department,
        (state) => ({
            departments: state.items,
            selectedDepartment: state.selectedItem,
            error: state.error
        })
    );
    // Inside your component
    const {
        departments
    } = useSelector(departmentSelector);

    function onSearchChange(value) {
        if (value.length >= 3) {
            setSearch(value);
        } else {
            setSearch("");
        }
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="تعاریف" pageTitle="دپارتمان ها"/>
                    <Row>
                        <Col md={4}>
                            <div className={"d-flex mb-4"}>
                                <button className={"btn btn-primary"}>افرودن</button>
                            </div>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">مدیریت دپارتمان ها</h4>
                                </CardHeader>
                                <CardBody className={"p-4"}>
                                    <div id="users">
                                        <Row className={"mb-2"}>
                                            <XList
                                                searchLimit={3}
                                                searchable={true}
                                                onSearchChange={onSearchChange}
                                            >
                                                {departments.map(department => {
                                                    return <XListItem key={department.id}>
                                                        <div className={"d-flex align-items-center"}>
                                                            <div className={"flex-grow-1"}>
                                                                <div className={"d-flex flex-column"}>
                                                                    <b>{department.title}</b>
                                                                    <small
                                                                        className="text-muted mt-2  d-none d-md-block">شناسه
                                                                        : {department.id}</small>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </XListItem>
                                                })}
                                            </XList>
                                        </Row>

                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default DepartmentPage;
