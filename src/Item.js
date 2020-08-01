import React, { Component } from "react";
import { Card, Container, Col } from "react-bootstrap";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

class Item extends Component {
  render() {
    return (
      //   <Card>
      //     <Container>
      //       <Col md={9}>
      //         <Card.Body>
      //           <Card.Title>Special title treatment</Card.Title>
      //           <Card.Text>
      //             With supporting text below as a natural lead-in to additional
      //             content.
      //           </Card.Text>

      //         </Card.Body>
      //       </Col>
      //       <Col md={3}>jjh</Col>
      //     </Container>
      //   </Card>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 1</div>
        </div>
      </div>
    );
  }
}

export default Item;
