import React, { Component } from "react";
import { dataShoes } from "./dataShoes";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class ShoesStore extends Component {
  state = {
    dataShoes: dataShoes,
    productDetail: dataShoes[0],
  };

  setStateModal = (item) => {
    this.setState({ productDetail: item });
  };

  render() {
    return (
      <div className="container">
        <ProductList
          productData={this.state.dataShoes}
          setStateModal={this.setStateModal}
        ></ProductList>
        <Modal content={this.state.productDetail}></Modal>
      </div>
    );
  }
}
