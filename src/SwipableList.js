// import {
//   SwipeableList,
//   SwipeableListItem,
// } from "@sandstreamdev/react-swipeable-list";
// import "@sandstreamdev/react-swipeable-list/dist/styles.css";
// import React, { Component } from "react";

// class SwipableList extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//   render() {
//     return (
//       <SwipeableList>
//            <SwipeableListItem
//             swipeLeft={swipeLeftOptions('Item with swipe left')}
//             onSwipeEnd={handleSwipeEnd}
//             onSwipeProgress={handleSwipeProgress}
//             onSwipeStart={handleSwipeStart}
//           >
//             <BasicListItem label="Item with swipe left" />
//           </SwipeableListItem>
//         <SwipeableListItem
//           swipeLeft={{
//             content: <div>Revealed content during swipe</div>,
//             action: () => console.info("swipe action triggered"),
//           }}
//           swipeRight={{
//             content: <div>Revealed content during swipe</div>,
//             action: () => console.info("swipe action triggered"),
//           }}
//           onSwipeProgress={(progress) =>
//             console.info(`Swipe progress: ${progress}%`)
//           }
//         >
//           <div>Item name</div>
//         </SwipeableListItem>
//       </SwipeableList>
//     );
//   }
// }

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
    content: <BasicSwipeContent label="Right content" position="right" />,
    action: () => triggerItemAction(`Swipe left action on "${name}"`),
  });

  const handleSwipeStart = () => {
    triggerItemAction("None");
    handleSwipeAction("Swipe started");
  };

  const handleSwipeEnd = () => {
    handleSwipeAction("Swipe ended");
    handleSwipeProgress();
  };
  console.log("todddddd:", todoData);
  return (
    <>
      {/* <span className="page__action--title">Trigger threshold: 0.5</span> */}
      <div className="basic-swipeable-list__container">
        <SwipeableList>
          {/* <SwipeableListItem
            swipeRight={swipeRightOptions("Item with swipe right")}
            onSwipeEnd={handleSwipeEnd}
            onSwipeProgress={handleSwipeProgress}
            onSwipeStart={handleSwipeStart}
          >
            <BasicListItem label="Item with swipe right" />
          </SwipeableListItem> */}
          {todoData.data.map((obj) => {
            return (
              <SwipeableListItem
                swipeLeft={swipeLeftOptions("Item with swipe left")}
                onSwipeEnd={handleSwipeEnd}
                onSwipeProgress={handleSwipeProgress}
                onSwipeStart={handleSwipeStart}
              >
                <BasicListItem label="Item with swipe left" />
              </SwipeableListItem>
            );
          })}

          {/* <SwipeableListItem
            swipeLeft={swipeLeftOptions("Item with both swipes")}
            swipeRight={swipeRightOptions("Item with both swipes")}
            onSwipeEnd={handleSwipeEnd}
            onSwipeProgress={handleSwipeProgress}
            onSwipeStart={handleSwipeStart}
          >
            <BasicListItem label="Item with both swipes" />
          </SwipeableListItem>
          <SwipeableListItem>
            <BasicListItem label="Item without swipe actions" />
          </SwipeableListItem> */}
        </SwipeableList>
      </div>
      {/* <div className="page__summary">
        <span className="page__action--title">Triggered action:</span>
        <span className="page__action--value">{triggeredItemAction}</span>
        <span className="page__action--title">Callback swipe action:</span>
        <span className="page__action--value">{swipeAction}</span>
        <span className="page__action--title">Callback swipe progress:</span>
        <span className="page__action--value">{swipeProgress ?? "-"}%</span>
      </div> */}
    </>
  );
};

export default SwipableList;
