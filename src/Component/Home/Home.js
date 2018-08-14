import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/Motion">Motion</Link>
        <Link to="/StaggeredMotion">Staggered Motion</Link>
        <Link to="/MenuPop">MenuPop</Link>
        <Link to="/DraggableIcons">DraggableIcons</Link>
        <Link to="/WeMake">WeMake</Link>
        <Link to="/IMake">IMake</Link>
      </div>
    );
  }
}
