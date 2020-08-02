import React from "react";
import { Card, Container, Col } from "react-bootstrap";
let toRead = require("./../../data/ToRead.json");

export default function Item(props) {
  const itemWidth = "300px";
  // const itemWidth = "300px"
  return (
    <>
      {toRead.data.map((obj) => {
        return (
          <div style={{ margin: "72px" }}>
            <Card style={{ margin: "auto", width: itemWidth }}>
              <div
                style={{
                  width: itemWidth,
                  height: "200px",
                  position: "relative",
                  backgroundColor: "grey",
                }}
              >
                <div style={{ position: 'absolute', bottom: '0px', padding: '0.5rem', color: '#EAEAEA' }}>
                  <div style={{ display: "flex", justifyContent: 'space-around' }}>
                    <div>{obj.title}</div>
                    <i
                      class="fa fa-arrow-right"
                      style={{
                        fontSize: "20px",
                        paddingLeft: "20px"
                      }}
                      aria-hidden="true"
                    ></i>
                  </div>

                </div>
                <div
                  style={{
                    width: itemWidth,
                    height: "200px",
                    position: "absolute",
                    top: "-40px",
                    left: "-20px",
                    backgroundImage: `url(${obj.imageUrl})`,
                  }}
                >

                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </>
  );
}
