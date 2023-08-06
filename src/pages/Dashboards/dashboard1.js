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
            <BreadCrumb title="CRM" pageTitle="Dashboards" />
            <Row>
            <h1>Dashboard 1</h1>
            </Row>
        </Container>
    </div>
</React.Fragment>
   
  );
};

export default Dashboard1;
