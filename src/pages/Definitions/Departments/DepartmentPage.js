import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";



const DepartmentPage = () => {
 
  return (
    <React.Fragment>
    <div className="page-content">
        <Container fluid>  
            <BreadCrumb title="تعاریف" pageTitle="دپارتمان ها" />
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody>
                            
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
