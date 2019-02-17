import React from "react";

const Image = props => {
  const { imageData } = props;

  return (
    <>
      <div className="col-4 p-2">
        <div className="card p-3">
          <img
            className="img-fluid"
            src={imageData.urls.regular}
            alt={ imageData.description }
          />
          <div className="card-body p-0">
            <h3 className="font-weight-light mt-3">
              { imageData.description }
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
