import React from "react";
import PropTypes from "prop-types";
import { Card, Conatiner, Col, Container, Row } from "react-bootstrap";

import "./BasicListItem.css";

const BasicListItem = ({ label, data }) => (
  //   <div className="basic-swipeable-list__item">
  <Card className="basic-swipeable-list__item">
    <Card.Body>
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col md={11}>
            <Card.Title>{data.header}</Card.Title>
            <Card.Text>{data.title}</Card.Text>
            <span style={{ color: "red" }}>{data.time}</span>
          </Col>
          <Col
            md={1}
            style={{ backgroundColor: "#D2F4CB", justifyContent: "center" }}
          >
            <i
              class="fa fa-arrow-left"
              style={{
                fontSize: "35px",
                padding: "16px",
              }}
              aria-hidden="true"
            ></i>
            {/* <i class="fa fa-user" height="25px" aria-hidden="true"></i> */}
          </Col>
        </Row>
      </Container>
    </Card.Body>

    {/* <Col md={3}>jjh</Col> */}
  </Card>
  //   </div>
);

BasicListItem.propTypes = {
  label: PropTypes.string,
};

export default BasicListItem;
