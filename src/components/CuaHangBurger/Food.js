import React, { Component } from "react";
import { connect } from "react-redux";
import { CHANGE_QUANTITY } from "./redux_CuaHangBurger/constants/food";

const increase = 1;
const decrease = -1;

class Food extends Component {
  render() {
    let item = this.props.data;
    return (
      <tr>
        <td>{item}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleChangeQuantity(item, decrease);
            }}
          >
            -
          </button>
          <span className="px-2">{this.props.burger[item]}</span>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.handleChangeQuantity(item, increase);
            }}
          >
            +
          </button>
        </td>
        <td>{this.props.menu[item]}$</td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.BurgerReducer.menu,
    burger: state.BurgerReducer.burger,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeQuantity: (key, value) => {
      dispatch({
        type: CHANGE_QUANTITY,
        payload: {
          key,
          value,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Food);
