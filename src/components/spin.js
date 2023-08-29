import React, { Component } from "react";
import load from "./Full snake.gif";
export class spin extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-3" src={load} alt="loading" />
      </div>
    );
  }
}

export default spin;
