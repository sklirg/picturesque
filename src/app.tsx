import * as React from "react";
import * as ReactDOM from "react-dom";

import Album from "components/Album/Album";
import Header from "components/Header/Header";

import "./app.scss";

ReactDOM.render(
  <div>
    <Header/>
    <Album title="Album title" tags={["Landscape", "Travel"]}
    images={["https://www.w3schools.com/w3css/img_lights.jpg",
    "https://www.w3schools.com/w3css/img_lights.jpg",
    "https://www.w3schools.com/w3css/img_lights.jpg",
    "https://www.w3schools.com/w3css/img_lights.jpg",
    "https://www.w3schools.com/w3css/img_lights.jpg"]} />
  </div>,
  document.getElementById("app"),
);
