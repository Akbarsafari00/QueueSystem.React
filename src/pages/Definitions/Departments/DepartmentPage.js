import React, { useState, useEffect } from "react";

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
  Form,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import SimpleBar from "simplebar-react";
import List from "list.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterDepartments } from "../../../slices/definitions/departments/thunk";

const DepartmentPage = () => {

var dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterDepartments());
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="تعاریف" pageTitle="دپارتمان ها" />
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Data Attributes + Custom</h4>
                </CardHeader>
                <CardBody>
                  <p className="text-muted">
                    Use data attributes and other custom attributes as keys
                  </p>
                  <div id="users">
                    <Row className="mb-2">
                      <Col>
                        <div>
                          <input
                            className="search form-control"
                            placeholder="Search"
                          />
                        </div>
                      </Col>
                      <Col className="col-auto">
                        <button className="btn btn-light sort" data-sort="name">
                          Sort by name
                        </button>
                      </Col>
                    </Row>

                    <SimpleBar style={{ height: "242px" }} className="mx-n3">
                      <ListGroup className="list mb-0" flush>
                        <ListGroupItem data-id="1">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <h5 className="fs-13 mb-1">
                                <Link to="#" className="link name text-body">
                                  Jonny Stromberg
                                </Link>
                              </h5>
                              <p
                                className="born timestamp text-muted mb-0"
                                data-timestamp="12345"
                              >
                                1986
                              </p>
                            </div>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
                    </SimpleBar>
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
