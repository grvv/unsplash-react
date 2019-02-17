import React, { Component } from "react";
import Image from "./Image";
import Pagination from "./Pagination";

class ImageContainer extends Component {
  // state = {  }
  render() {
    const { imageList, ...paginationProps } = this.props;
    const renderImages = imageList.length > 0;

    return (
      <div className="container-fluid mt-3 p-2">
        {!renderImages ? (
          <h1 className="text-center font-weight-light">Search Something...</h1>
        ) : (
          <div className="row m-0">
            <div className="col-12 justify-content-center">
              <Pagination {...paginationProps} />
            </div>
            {imageList.map(image => (
              <Image imageData={image} key={image.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ImageContainer;
