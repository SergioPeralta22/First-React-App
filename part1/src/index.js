import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
  return (
    <div>
      <h1>
        Hello, {props.name} you are {props.age} years old
      </h1>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      App de Saludar creado por{" "}
      <a href="https://github.com/SergioPeralta22">Sergio Peralta</a>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <>
      <h1>Saludos:</h1>
      <Hello name="Neidy" age={20 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
