import React, { Component } from "react";
import BurgerDetail from "./BurgerDetail";
import ModalMenu from "./ModalMenu";
import "./styleBurger.css";

export default class BurgerStore extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-6">
            <BurgerDetail></BurgerDetail>
          </div>
          <div className="col-6">
            <ModalMenu></ModalMenu>
          </div>
        </div>
      </div>
    );
  }
}
