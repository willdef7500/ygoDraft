import React, { Component } from "react";
import "./App.css";
import Cardlist from "./components/cardlist";
import NavBar from "./components/navbar";

const pool = [
  { id: "97268402", name: "Effect Veiler" },
  { id: "5318639", name: "Mystical Space Typhoon" },
  { id: "98645731", name: "Pot Of Duality" },
  { id: "44095762", name: "Mirror Force" },
  { id: "62279055", name: "Magic Cylinder" },
  { id: "42052439", name: "Fire Flint Lady" },
  { id: "70368879", name: "Upstart Goblin" },
  { id: "13532663", name: "Dummy Golem" },
  { id: "93920745", name: "Penguin Soldier" },
  { id: "66499018", name: "Flame Tiger" },
  { id: "52350806", name: "Danger! Mothman!" },
  { id: "68078978", name: "Fortune Fairy Chee" },
  { id: "99550630", name: "Sky Striker Maneuver - Afterburners!" },
  { id: "9748752", name: "Caius The Shadow Monarch" },
  { id: "73125233", name: "Raiza The Storm Monarch" },
  { id: "12538374", name: "Treeborn Frog" },
  { id: "1980574", name: "Hop Ear Squadron" },
  { id: "40975574", name: "Red Resonator" },
  { id: "65056481", name: "Satellarknight Alsahm" },
  { id: "98414735", name: "Paleozoic Canadia" },
];

class App extends Component {
  state = {
    cardlist: [],
    counter: 0,
  };

  addCards = () => {
    //Get 3 cards
    var c = [];
    function generateRNG(x, y) {
      var value = Math.floor(Math.random() * x);
      while (y.indexOf(value) >= 0) {
        value = Math.floor(Math.random() * x);
      }
      return value;
    }

    c.push(generateRNG(pool.length, c));
    c.push(generateRNG(pool.length, c));
    c.push(generateRNG(pool.length, c));

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
