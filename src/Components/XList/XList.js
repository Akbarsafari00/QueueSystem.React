import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, Col, Row} from 'reactstrap';

const XList = ({
                   children, searchable, onSearchChange
               }) => {

    const [search, setSearch] = useState("");

    function searchChange(e) {
        
            onSearchChange(e.target.value);
        
    }

    return (<React.Fragment>
        {searchable && <Row className="mb-4">
            <Col>
                <div>
                    <input
                        className="search form-control"
                        placeholder="جستجو ..."
                        onChange={searchChange}
                    />
                </div>
            </Col>
        </Row>}
        <Row className="mb-2">
            <Col>
                {children}
            </Col>
        </Row>
        <Row>
            <Col>
                <ButtonGroup>
                    <Button className={"btn btn-light"}>بعدی</Button>
                    <Button className={"btn btn-light"}>قابلی</Button>
                </ButtonGroup>
            </Col>
        </Row>
    </React.Fragment>);
};

export default XList;