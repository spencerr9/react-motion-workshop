import React, { Component } from "react";
import { Motion, spring } from "react-motion";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: true
    };
  }
  render() {
    return (
      <div className="App" style={{ display: "flex" }}>
        <Motion
          defaultStyle={{ opacity: 0, x: -150 }}
          style={{
            opacity: spring(1),
            x: this.state.menu
              ? spring(0, { stiffness: 60, damping: 5 })
              : spring(-150, { stiffness: 60, damping: 5 })
          }}
        >
          {x => {
            return (
              <div
                style={{
                  backgroundColor: "yellow",
                  border: "1px solid black",
                  height: "100vh",
                  width: 200,
                  opacity: x.opacity,
                  transform: `translateX(${x.x}px)`,
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <img
                  src="/cowboy-dog.jpg"
                  alt="cowboy-dog"
                  style={{ width: 150, height: 150 }}
                />
                <button
                  onClick={() => this.setState({ menu: !this.state.menu })}
                  style={{ height: 50, width: 50 }}
                >
                  Hit Me
                </button>
              </div>
            );
          }}
        </Motion>
      </div>
    );
  }
}

export default App;
