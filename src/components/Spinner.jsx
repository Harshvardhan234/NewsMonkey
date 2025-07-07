import React, { Component } from "react";
import pSpinner from "./Spinner.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={pSpinner} alt="loading" />
      </div>
    );
  }
}
