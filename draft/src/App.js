import React, { Component } from "react";
import "./App.css";
import Cardlist from "./components/cardlist";
import NavBar from "./components/navbar";
import jsonData from "./resources/main_deck.json";

const pool = [...jsonData];

class App extends Component {
  state = {
    cardlist: [],
    counter: 0,
  };

  addCards = () => {
    //Get 3 cards

    var c = [];
    function generateRNG(y) {
      var value = Math.floor(Math.random() * pool.length);
      while (y.indexOf(value) >= 0) {
        value = Math.floor(Math.random() * pool.length);
      }
      return value;
    }

    //eventually add the option to reroll if the same card appears more than x amount of times
    c.push(generateRNG(c));
    c.push(generateRNG(c));
    c.push(generateRNG(c));

    //Update cardlist
    var cardlist = this.state.cardlist;

    var card1 = pool[c[0]];
    cardlist.push(card1);

    var card2 = pool[c[1]];
    cardlist.push(card2);

    var card3 = pool[c[2]];
    cardlist.push(card3);

    //Update counter
    const counter = this.state.counter + 1;
    this.setState({ counter, /*newCards,*/ cardlist });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          amountOpened={10 - this.state.counter}
          counter={this.state.counter}
          onAddCards={this.addCards}
        />
        <main className="container" style={{ marginTop: 60 }}>
          <Cardlist cardlist={this.state.cardlist} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
