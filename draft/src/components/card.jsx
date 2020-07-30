import React, { Component } from "react";

class Card extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <div>
        <img
          src={"https://ygoprodeck.com/pics/" + id + ".jpg"}
          title={name}
          className="w3-third float-left"
        />
      </div>
    );
  }
}

export default Card;
