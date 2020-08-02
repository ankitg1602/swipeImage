import React from "react";
import PropTypes from "prop-types";
import { Card, Conatiner, Col, Container } from "react-bootstrap";

import "./BasicListItem.css";

const BasicListItem = ({ label }) => (
  //   <div className="basic-swipeable-list__item">
  <Card className="basic-swipeable-list__item">
    <Container>
      <Col md={9}>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Col>
      <Col md={3}>jjh</Col>
    </Container>
  </Card>
  //   </div>
);

BasicListItem.propTypes = {
  label: PropTypes.string,
};

export default BasicListItem;
