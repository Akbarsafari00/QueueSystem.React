import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Form, Input, Label, Modal, Row, FormFeedback, Button, ModalBody, FormGroup, ModalHeader} from 'reactstrap';
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {createDepartment, deleteDepartment, filterDepartments} from "../../../slices/definitions/departments/thunk";
import {createSelector} from "reselect";

const DepartmentDeleteModal = ({isOpen,item, onToggle, onSuccess, onError}) => {

    const dispatch = useDispatch();

    const departmentState = useSelector(
        createSelector(
            (state) => state.Department,
            (state) => ({
                loading: state.loading,
                success: state.success,
            })
        ));
    
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
        
        initialValues: {
            id: item?.id || "",
            title: item?.title || "",
        }, validationSchema: Yup.object({
            id: Yup.string().required("شناسه اجباری میباشد"),
            title: Yup.string().required("عنوان اجباری میباشد"),
        }), onSubmit: async (values) => {
            const result = await dispatch(deleteDepartment(values.id));
            if (result) {
                onSuccess(result)
                dispatch(filterDepartments({search:""}));
            } else {
                onError();
            }
        },
    });

    document.title = "Validation | Velzon - React Admin & Dashboard Template";

    return (<React.Fragment>
        <Modal isOpen={isOpen} backdrop={true} toggle={onToggle}>
            <ModalHeader>حذف دپارتمان</ModalHeader>
            <ModalBody>
                <Form
                    className="needs-validation"
                    onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}
                >
                    <Row>
                        <Col md={12}>
                            <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom01">عنوان</Label>
                                <Input
                                    disabled
                                    name="id"
                                    placeholder=""
                                    type="text"
                                    className="form-control"
                                    id="id"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.id || ""}
                                    invalid={!!(validation.touched.id && validation.errors.id)}
                                />
                                {validation.touched.id && validation.errors.id ? (
                                    <FormFeedback type="invalid">
                                        {validation.errors.id}
                                    </FormFeedback>) : null}
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom01">عنوان</Label>
                                <Input
                                    disabled
                                    name="title"
                                    placeholder=""
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.title || ""}
                                    invalid={!!(validation.touched.title && validation.errors.title)}
                                />
                                {
                                    validation.touched.title && validation.errors.title ? (
                                        <FormFeedback type="invalid">
                                            {validation.errors.title}
                                        </FormFeedback>) : null
                                }
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button disabled={departmentState.loading} color="danger" type="submit">
                                حذف
                            </Button>
                            <Button onClick={onToggle} color="primary" type="button" className={"ms-2"}>
                                انصراف
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
        </Modal>
    </React.Fragment>);
};

export default DepartmentDeleteModal;