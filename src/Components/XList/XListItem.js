import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardBody, Col, Row} from 'reactstrap';

const XListItem = ({children,onDeleteClick,onEditClick}) => {
    return (
        <React.Fragment>
            <div className={""}>
                <Card className={"mb-2 bg-light list-item"}>
                    <CardBody
                        className={"cursor-pointer hover-overlay ripple"}>
                        <Row className="px-4 align-items-center">
                            <Col className="flex-grow-1">{children}</Col>
                            <Col className="flex-grow-0">
                                <div className={"d-flex"}>
                                    <i onClick={onDeleteClick} className="ri-delete-bin-line font-size-lg text-muted  me-2"></i>
                                    <i onClick={onEditClick} className="ri-edit-line font-size-lg text-muted"></i>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    );
};

export default XListItem;