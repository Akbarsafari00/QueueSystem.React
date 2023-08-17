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
    Form, ButtonGroup, Modal, ModalBody,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {useDispatch, useSelector} from "react-redux";
import {filterDepartments} from "../../../slices/definitions/departments/thunk";
import {createSelector} from "reselect";
import {useAuth} from "../../../Components/Hooks/UserHooks";
import XListItem from "../../../Components/XList/XListItem";
import XList from "../../../Components/XList/XList";
import DepartmentCreateModal from "../../../Components/Modals/Departments/DepartmentCreateModal";
import DepartmentDeleteModal from "../../../Components/Modals/Departments/DepartmentDeleteModal";
import DepartmentUpdateModal from "../../../Components/Modals/Departments/DepartmentUpdateModal";

const DepartmentPage = () => {


    const departmentSelector = createSelector(
        (state) => state.Department,
        (state) => ({
            departments: state.items,
        })
    );
    // Inside your component
    const {
        departments,
    } = useSelector(departmentSelector);

    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    const [isShowCreateModal, setIsShowCreateModal] = useState(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowUpdateModal, setIsShowUpdateModal] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);



    useEffect(() => {
            dispatch(filterDepartments({search}));
    }, [search]);

    function onSearchChange(value) {
        if (value.length >= 3) {
            setSearch(value);
        } else {
            setSearch("");
        }
    }

    document.title = "مدیریت دپارتمان ها";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="تعاریف" pageTitle="دپارتمان ها"/>
                    <Row>
                        <Col md={4}>
                            <div className={"d-flex mb-4"}>
                                <button className={"btn btn-primary"} onClick={_ => setIsShowCreateModal(true)}>افرودن
                                </button>
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
                                                    return <XListItem
                                                        key={department.id}
                                                        onDeleteClick={() => {
                                                            setSelectedItem(department);
                                                            setIsShowDeleteModal(true);
                                                        }}
                                                        onEditClick={() => {
                                                            setSelectedItem(department);
                                                            setIsShowUpdateModal(true);
                                                        }}
                                                    >
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
            <DepartmentCreateModal isOpen={isShowCreateModal}
                                   onToggle={() => {
                                       setIsShowCreateModal(false)
                                   }}
                                   onSuccess={() => {
                                       setIsShowCreateModal(false)
                                   }}/>
            <DepartmentDeleteModal isOpen={isShowDeleteModal}
                                   item={selectedItem}
                                   onToggle={() => {
                                       setIsShowDeleteModal(false)
                                   }}
                                   onSuccess={() => {
                                       setIsShowDeleteModal(false)
                                   }}/>

            <DepartmentUpdateModal isOpen={isShowUpdateModal}
                                   item={selectedItem}
                                   onToggle={() => {
                                       setIsShowUpdateModal(false)
                                   }}
                                   onSuccess={() => {
                                       setIsShowUpdateModal(false)
                                   }}/>
        </React.Fragment>
    );
};

export default DepartmentPage;
