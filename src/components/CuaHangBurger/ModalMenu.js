import React, { Component } from "react";
import { connect } from "react-redux";
import Food from "./Food";

class ModalMenu extends Component {
  renderFood = () => {
    return Object.keys(this.props.menu).map((item, index) => {
      return <Food key={index} data={item}></Food>;
    });
  };

  render() {
    return (
      <div>
        <h3 className="pb-4 text-center">Chọn thức ăn</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Thức ăn</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Giá</th>
            </tr>
          </thead>
          <tbody>{this.renderFood()}</tbody>
        </table>
        <div className="float-right">
          <div className="total pb-2">
            <span className="font-weight-bold">Tổng tiền:</span>{" "}
            <span className="total__price">{this.props.total}$</span>
          </div>
          <button className="btn btn-primary w-100">THANH TOÁN</button>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

export default connect(mapStatetoProps)(ModalMenu);
