import React from "react";
import PropTypes from "prop-types";
import { Card, Conatiner, Col, Container, Row } from "react-bootstrap";

import "./BasicListItem.css";

const style = {
  fontSize: "35px",
  padding: "16px",
}

const BasicListItem = ({ label, data }) => (

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
            {
              data.icon === 'user' ? <i class="fa fa-user" style={style} aria-hidden="true"></i> : <i
                class="fa fa-arrow-left"
                style={style}
                aria-hidden="true"
              ></i>
            }

          </Col>
        </Row>
      </Container>
    </Card.Body>
  </Card>
);

BasicListItem.propTypes = {
  label: PropTypes.string,
};

export default BasicListItem;
