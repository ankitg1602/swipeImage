import React from "react";
import { Card, Container, Col } from "react-bootstrap";

export default function Item(props) {
  return (
    <Card>
      <div
        style={{
          width: "200px",
          height: "200px",
          position: "relative",
          backgroundColor: "yellow",
        }}
      >
        <img></img>
        <div
          style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            top: "40px",
            left: "40px",
            backgroundColor: "red",
          }}
        >
          <div style={{}}>fhhfffg</div>
        </div>
      </div>
    </Card>
  );
}
