import React from "react";
import Label from "../atoms/Label";

const example = (name) => {
  return <h4>{name}</h4>;
};

export default function Main() {
  return (
    <main>
      <img className="main__image" src="./images/images/main.png"></img>
      <div className="game__info">
        <h1>Cyberpunk 2077</h1>
        <h3>59.99 R$</h3>
        <div className="flex label__container">
          <Label name="FPS" color="blue"></Label>
          <Label name="RPG" color="red"></Label>
        </div>
      </div>
    </main>
  );
}
