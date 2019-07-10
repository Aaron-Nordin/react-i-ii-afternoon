import React, { Component } from "react";

export default class Previous extends Component {
  render() {
    return <button onClick={() => this.props.indexFn()}>{"< Previous"}</button>;
  }
}
