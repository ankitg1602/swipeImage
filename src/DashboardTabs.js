import React, { Component } from "react";
import { Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";
import ToReadCard from "./ToReadCard";

class DashboardTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSelect = (activeKey) => {
    console.log("activeKey", activeKey);
  };
  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>ACTION ITEMS</div>

        <Nav
          variant="pills"
          defaultActiveKey="/home"
          onSelect={(key) => this.handleSelect}
        >
          <Nav.Item>
            <Nav.Link href="/home">To Do</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">To Read</Nav.Link>
          </Nav.Item>
        </Nav>
        {/* <Container> */}
        <Item></Item>
        <ToReadCard />
        {/* </Container> */}
      </>
    );
  }
}

export default DashboardTabs;
