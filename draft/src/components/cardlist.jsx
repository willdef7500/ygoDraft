import React, { Component } from "react";
import Card from "./card";

class CardList extends Component {
  render() {
    const { cardlist } = this.props;
    return (
      <div>
        {cardlist.map((card, index) => (
          <Card key={index} id={card.id} name={card.name} />
        ))}
      </div>
    );
  }
}

export default CardList;
