import * as React from "react";

import Image from "components/Image/Image";

import "./album.scss";

interface IAlbum {
  title: string;
  tags: string[];
  images: string[];
}

class Album extends React.Component < IAlbum, {}> {
  public render() {
    return (
      <div className="albumContainer">
        <h2>{this.props.title}</h2>
        <div>{this.props.tags.map((tag) => <div className="tag">{tag}</div>)}</div>
        <div className="pictureContainer">
          {this.props.images.map((image) => <Image src={image}/>)}
        </div>
      </div>
    );
  }
}

export default Album;
