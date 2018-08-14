import React, { Component } from "react";
import { Motion, spring, presets } from "react-motion";

class WeMake extends Component {
  render() {
    console.log(presets);
    return (
      <div className="App">
        <Motion
          defaultStyle={{ opacity: 0, x: 0 }}
          style={{
            opacity: spring(1),
            x: spring(300, { ...presets.wobbly })
          }}
        >
          {x => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  height: x.x,
                  width: x.x,
                  opacity: x.opacity
                }}
              />
            );
          }}
        </Motion>
      </div>
    );
  }
}

export default WeMake;
