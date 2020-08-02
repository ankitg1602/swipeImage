import React, { Component } from "react";
import { Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ToReadCard from "./component/ToRead/ToReadCard";
import SwipableList from "./component/ToDo/SwipableList";

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
  };
  render() {
    let defaultActiveKey = this.state.defaultActiveKey;
    return (
      <>
        <div style={{ textAlign: "center", padding: "50px" }}>ACTION ITEMS</div>

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
        {defaultActiveKey === "1" ? (
          <SwipableList></SwipableList>
        ) : (
            <ToReadCard />
          )}
      </>
    );
  }
}

export default DashboardTabs;
