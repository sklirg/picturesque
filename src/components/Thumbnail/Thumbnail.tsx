import * as React from "react";
import "./thumbnail.scss";

interface IThumbnail {
  src: string;
}

class Thumbnail extends React.Component < IThumbnail, {}> {
  public render() {
    return (
      <div>
        <img src={this.props.src}/>
      </div>
    );
  }
}


export default Thumbnail;
