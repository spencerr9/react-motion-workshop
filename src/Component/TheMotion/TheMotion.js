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
      </div>
    );
  }
}

export default App;
