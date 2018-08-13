import React, { Component } from "react";
import "./App.css";
import { Motion, spring, StaggeredMotion } from "react-motion";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: true
    };
  }

  willLeave() {
    return { width: spring(0), height: spring(0) };
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ menu: !this.state.menu })}>
          Click Me
        </button>
        <Motion
          defaultStyle={{ opacity: 1, transform: 0 }}
          style={{
            transform: spring(this.state.menu ? 360 : 0),
            opacity: spring(this.state.menu ? 1 : 0)
          }}
        >
          {x => {
            return (
              <div>
                <img
                  src={"/cowboy-dog.jpg"}
                  alt="cowboy dog"
                  style={{
                    transform: `rotate(${x.transform}deg)`,
                    opacity: x.opacity,
                    height: 200,
                    width: 200
                  }}
                />
              </div>
            );
          }}
        </Motion>

        <StaggeredMotion
          defaultStyles={[
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 },
            { x: 0 }
          ]}
          styles={prevArr => {
            return prevArr.map((_, i) => {
              return i === 0
                ? { x: spring(200, { stiffness: 60, damping: 2 }) }
                : { x: spring(prevArr[i - 1].x) };
            });
          }}
        >
          {x => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                {x.map((val, i) => {
                  return (
                    <div
                      style={{
                        backgroundColor: i % 2 === 0 ? "blue" : "red",
                        border: `1px solid`,
                        height: 50,
                        width: val.x
                      }}
                    />
                  );
                })}
              </div>
            );
          }}
        </StaggeredMotion>
      </div>
    );
  }
}

export default App;
