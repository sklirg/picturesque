import * as React from "react";
import "./image.scss";

interface IImage {
  src: string;
}
/*
class Image extends React.Component < IImage, {}> {
  public render() {
    return (
    <div>
      <img src={this.props.src}/>
    </div>
  );
}*/

class Image extends React.Component < IImage, {}> {
  public render() {
    return (
      <div>
        <img src="https://www.w3schools.com/w3css/img_lights.jpg"/>
      </div>
    );
  }
}

export default Image;
