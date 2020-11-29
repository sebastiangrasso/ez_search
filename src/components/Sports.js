import React, { Component } from "react";

class Sports extends Component {
  handleClick() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h1>Sports</h1>
        <button type="button" onClick={() => this.handleClick()}>
          Home
        </button>
      </div>
    );
  }
}

export default Sports;
