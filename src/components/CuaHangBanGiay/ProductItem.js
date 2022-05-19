import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { name, price, image } = this.props.item;
    return (
      <div className="col-12 col-lg-6 col-xl-4">
        <div>
          <div className="card mb-4">
            <img
              data-toggle="modal"
              data-target="#exampleModal"
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.setStateModal(this.props.item);
              }}
              src={image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                className="card-title"
              >
                {name}
              </h5>
              <p className="card-text">{price} $</p>
              <button className="btn btn-dark">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
