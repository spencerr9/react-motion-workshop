import React from "react";
import { StaggeredMotion, spring } from "react-motion";

export default class TheStaggeredMotion extends React.Component {
  render() {
    return (
      <div>
        <StaggeredMotion
          defaultStyles={[
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 },
            { x: 2000 }
          ]}
          styles={prevArr => {
            return prevArr.map((_, i) => {
              return i === 0
                ? { x: spring(0, { stiffness: 60, damping: 15 }) }
                : { x: spring(prevArr[i - 1].x) };
            });
          }}
        >
          {x => {
            return (
              <div>
                {x.map((val, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: i % 2 === 0 ? "flex-end" : "flex-start"
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: i % 2 === 0 ? "blue" : "black",
                          border: `1px solid`,
                          height: 50,
                          width: val.x
                        }}
                      />
                    </div>
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
