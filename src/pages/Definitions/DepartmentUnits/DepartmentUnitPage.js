import React, {useState, useEffect} from "react";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {useDispatch, useSelector} from "react-redux";
import {filterDepartmentUnits} from "../../../slices/definitions/department-units/thunk";
import {createSelector} from "reselect";
import {useAuth} from "../../../Components/Hooks/UserHooks";
import XListItem from "../../../Components/XList/XListItem";
import XList from "../../../Components/XList/XList";
import DepartmentUnitCreateModal from "../../../Components/Modals/DepartmentUnits/DepartmentCreateModal";
import DepartmentUnitDeleteModal from "../../../Components/Modals/DepartmentUnits/DepartmentDeleteModal";
import DepartmentUnitUpdateModal from "../../../Components/Modals/DepartmentUnits/DepartmentUpdateModal";

const DepartmentUnitPage = () => {


    const departmentSelector = createSelector(
        (state) => state.DepartmentUnit,
        (state) => ({
            units: state.items,
        })
    );
    // Inside your component
    const {
        units,
    } = useSelector(departmentSelector);

    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    const [isShowCreateModal, setIsShowCreateModal] = useState(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowUpdateModal, setIsShowUpdateModal] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);

    const {isAuthenticated} = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(filterDepartmentUnits({search}));
        }
    }, [search, isAuthenticated]);
    function onSearchChange(value) {
        if (value.length >= 3) {
            setSearch(value);
        } else {
            setSearch("");
        }
    }

    document.title = "مدیریت بخش ها";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="تعاریف" pageTitle="بخش ها"/>
                    <Row>
                        <Col md={8}>
                            <div className={"d-flex mb-4"}>
                                <button className={"btn btn-primary"} onClick={_ => setIsShowCreateModal(true)}>افرودن
                                </button>
                            </div>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">مدیریت بخش ها</h4>
                                </CardHeader>
                                <CardBody className={"p-4"}>
                                    <div id="users">
                                        <Row className={"mb-2"}>
                                            <XList
                                                searchLimit={3}
                                                searchable={true}
                                                onSearchChange={onSearchChange}
                                            >
                                                {units.map(department => {
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
                                                            <div className={"flex-grow-1"}>
                                                                <b className={""}><small className={"text-muted"}>شناسه
                                                                    یکتا : </small>{department.uniqueNumber}</b>
                                                            </div>
                                                            <div className={"flex-grow-1"}>
                                                                <b className={""}><small className={"text-muted"}>دپارتمان
                                                                    : </small>{department.department.title}</b>
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
                        <Col md={8}>
                        </Col>
                    </Row>

                </Container>
            </div>
            <DepartmentUnitCreateModal isOpen={isShowCreateModal}
                                       onToggle={() => {
                                           setIsShowCreateModal(false);
                                       }}
                                       onSuccess={() => {
                                           setIsShowCreateModal(false);
                                           dispatch(filterDepartmentUnits({search: ""}));
                                       }}/>
            <DepartmentUnitDeleteModal isOpen={isShowDeleteModal}
                                       item={selectedItem}
                                       onToggle={() => {
                                           setIsShowDeleteModal(false);
                                       }}
                                       onSuccess={() => {
                                           setIsShowDeleteModal(false);
                                           dispatch(filterDepartmentUnits({search: ""}));
                                       }}/>

            <DepartmentUnitUpdateModal isOpen={isShowUpdateModal}
                                       item={selectedItem}
                                       onToggle={() => {
                                           setIsShowUpdateModal(false);
                                       }}
                                       onSuccess={() => {
                                           setIsShowUpdateModal(false);
                                           dispatch(filterDepartmentUnits({search: ""}));
                                       }}/>
        </React.Fragment>
    );
};

export default DepartmentUnitPage;
