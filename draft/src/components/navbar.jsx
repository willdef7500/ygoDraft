import React, { Component } from "react";

const NavBar = ({ amountOpened, onAddCards, counter }) => {
  return (
    <nav
      className="navbar navbar-light bg-light fixed-top navbar-default"
      style={{ height: 60 }}
    >
      <a className="navbar-brand" href="#">
        <span className="align-left">Remaining Packs: {amountOpened}</span>
        <span className="align-right position-absolute" style={{ right: 10 }}>
          <button
            style={{ display: counter === 10 ? "none" : "block" }}
            className="btn btn-secondary"
            onClick={onAddCards}
          >
            {counter === 10 ? "No new packs" : "Open Next Pack"}
          </button>
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
