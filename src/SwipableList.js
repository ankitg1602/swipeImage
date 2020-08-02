import React, { useState } from "react";
import {
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import "./SwipableList.css";
import BasicListItem from "./BasicListItem";
import BasicSwipeContent from "./BasicSwipeContent";

let todoData = require("./todoData.json");

const SwipableList = () => {
  const [triggeredItemAction, triggerItemAction] = useState("None");
  const [swipeProgress, handleSwipeProgress] = useState();
  const [swipeAction, handleSwipeAction] = useState("None");

  const swipeRightOptions = (name) => ({
    content: <BasicSwipeContent label="Left content" position="left" />,
    action: () => triggerItemAction(`Swipe right action on "${name}"`),
  });

  const swipeLeftOptions = (name) => ({
    content: <BasicSwipeContent label="Completed" position="right" />,
    action: () => {
      triggerItemAction(`Swipe left action on "${name}"`)
    }
  });

  const handleSwipeStart = (params) => {
    console.log(params.id, "Completed")
    triggerItemAction("None");
    handleSwipeAction("Swipe started");
  };

  const handleSwipeEnd = () => {
    handleSwipeAction("Swipe ended");
    handleSwipeProgress();
  };
  return (
    <>
      <div className="basic-swipeable-list__container">
        <SwipeableList>
          {todoData.data.map((obj) => {
            return (
              <SwipeableListItem
                swipeLeft={swipeLeftOptions("Item with swipe left")}
                onSwipeEnd={handleSwipeEnd}
                onSwipeProgress={handleSwipeProgress}
                onSwipeStart={() => {
                  handleSwipeStart(obj)
                }
                }
              >
                <BasicListItem label="Item with swipe left" data={obj} />
              </SwipeableListItem>
            );
          })}

        </SwipeableList>
      </div>
    </>
  );
};

export default SwipableList;
