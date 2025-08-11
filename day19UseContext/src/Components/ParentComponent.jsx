import React from "react";

export const ParentComponent = () => {
  return (
    <section>
      <h1>Component A</h1>
      <ChildComponent data="React JS" />
    </section>
  );
};

const ChildComponent = (props) => {
  return (
    <div>
      <h1>Hello, I am component B</h1>
      <GrandChildComponent data={props.data} />
    </div>
  );
};

const GrandChildComponent = (props) => {
  return (
    <div>
      <h1>Hello, I am component C</h1>
      <GrandGrandChildComponent data={props.data} />
    </div>
  );
};

const GrandGrandChildComponent = (props) => {
  return (
    <div>
      <h1>Hello, I am component D</h1>
      <p>Received Data: {props.data}</p>
    </div>
  );
};
