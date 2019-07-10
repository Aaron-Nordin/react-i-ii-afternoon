import React, { Component } from "react";

export default class Next extends Component {
  render() {
    return <button onClick={() => this.props.indexFn()}>{"Next >"}</button>;
  }
}
