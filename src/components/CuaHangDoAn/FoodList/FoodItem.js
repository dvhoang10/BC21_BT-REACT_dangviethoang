import { message } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFoodListAction } from "../redux_food/action/food.aciton";
import { EDIT_FOOD } from "../redux_food/constants/food.constant";
import { foodServ } from "../service/food.service";

class FoodItem extends Component {
  handleDeleteFood = (id) => {
    foodServ
      .deleteFood(id)
      .then((res) => {
        return foodServ.getList();
      })
      .then((res) => {
        this.props.updateFoodList(res.data);
        message.success("Xóa món ăn thành công");
      })
      .catch((err) => {
        message.success("Xóa món ăn thất bại");
      });
  };

  handleEditFood = (id) => {
    foodServ
      .getEditFood(id)
      .then((res) => {
        this.props.editFood(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { id, name, price, img, description } = this.props.food;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{img}</td>
        <td>{description}</td>
        <td className="d-flex">
          <button
            onClick={() => {
              this.handleEditFood(id);
            }}
            className="btn btn-warning mr-2"
          >
            Sửa
          </button>
          <button
            onClick={() => {
              this.handleDeleteFood(id);
            }}
            className="btn btn-danger"
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    updateFoodList: (list) => {
      dispatch(updateFoodListAction(list));
    },

    editFood: (food) => {
      dispatch({
        type: EDIT_FOOD,
        payload: food,
      });
    },
  };
};

export default connect(null, mapDispatchToProp)(FoodItem);
