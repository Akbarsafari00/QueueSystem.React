import React, { useState, useEffect } from "react";
import BreadCrumb from '../../Components/Common/BreadCrumb';

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



const Dashboard1 = () => {
 
  return (
    <React.Fragment>
    <div className="page-content">
        <Container fluid>  
            <BreadCrumb title="داشبورد" pageTitle="داشبورد نوبتدهی" />
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody>
                            <h1>داشبورد نوبتدهی</h1>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
</React.Fragment>
   
  );
};

export default Dashboard1;
