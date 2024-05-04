// import { useState } from "react";
import { useLocation } from "react-router-dom";
import Rps from "./rps";

// images
import paper from "./images/paper.png";
import rock from "./images/rock.png";
import scissor from "./images/scissor.png";

export default function Win(props) {
  const location = useLocation();
  const { name, cname } = location.state;

  function getImage(name) {
    switch (name) {
      case "rock":
        return rock;
      case "paper":
        return paper;
      case "scissor":
        return scissor;
      default:
        return null;
    }
  }

  function winner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return " It's TIE try again";
    } else if (
      (userChoice === "rock" && computerChoice === "scissor") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissor" && computerChoice === "paper")
    ) {
      return " Yaay!!! USER WON";
    } else {
      return "Uff!! COMPUTER WON";
    }
  }

  return (
    <>
      <center>
        <h1 className="winner">{winner(name, cname)}</h1>
      </center>
      <div className="seed">
        <div>
          <h1>Your Choice:</h1>
          <Rps name={name} image={getImage(name)} />
        </div>
        <div>
          <h1>Computer Choice:</h1>
          <Rps name={cname} image={getImage(cname)} />
        </div>
      </div>
    </>
  );
}
