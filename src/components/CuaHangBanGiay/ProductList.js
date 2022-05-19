import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderShoesList = () => {
    return this.props.productData?.map((item) => {
      return (
        <ProductItem
          key={item.id}
          item={item}
          setStateModal={this.props.setStateModal}
        ></ProductItem>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-2 col-xl-2"></div>
          <div className="col-12 col-lg-10 col-xl-10">
            <h1 className="text-center my-4">Shoes Shop</h1>
          </div>
          <div className="col-12 col-lg-2 col-xl-2">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Home</li>
              <li className="list-group-item">Shop</li>
            </ul>
          </div>
          <div className="col-12 col-lg-10 col-xl-10">
            <div className="row row-cols-1 row-cols-md-3">
              {this.renderShoesList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
