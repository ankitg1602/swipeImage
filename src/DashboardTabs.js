import React, { Component } from "react";
import { Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";
import ToReadCard from "./ToReadCard";
import SwipableList from "./SwipableList";

class DashboardTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultActiveKey: "1",
    };
  }
  handleSelect = (activeKey) => {
    this.setState({
      defaultActiveKey: activeKey,
    });
    console.log("activeKey", activeKey);
  };
  render() {
    let defaultActiveKey = this.state.defaultActiveKey;
    return (
      <>
        <div style={{ textAlign: "center" }}>ACTION ITEMS</div>

        <Nav
          variant="pills"
          className="justify-content-center"
          defaultActiveKey={defaultActiveKey}
          onSelect={(key) => this.handleSelect(key)}
        >
          <Nav.Item>
            <Nav.Link eventKey="1">To Do</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2">To Read</Nav.Link>
          </Nav.Item>
        </Nav>
        {/* <Container> */}
        {defaultActiveKey === "1" ? (
          <SwipableList></SwipableList>
        ) : (
          <ToReadCard />
        )}
        {/* </Container> */}
      </>
    );
  }
}

export default DashboardTabs;
