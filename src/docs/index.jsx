import React from "react";
import { render } from "react-dom";
import {Component1} from '../lib/components';
import {Container1, Container2} from '../lib/containers';


import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <Container1/>
      <Container2/>
      <Component1/>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
