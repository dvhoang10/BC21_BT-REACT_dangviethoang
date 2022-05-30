import React, { Component } from "react";
import { connect } from "react-redux";
import FoodForm from "./FoodForm/FoodForm";
import FoodList from "./FoodList/FoodList";
import { updateFoodListAction } from "./redux_food/action/food.aciton";
import { foodServ } from "./service/food.service";

class FoodStore extends Component {
  componentDidMount() {
    foodServ
      .getList()
      .then((res) => {
        this.props.updateFoodList(res.data);
      })
      .catch((err) => {});
  }
  render() {
    return (
      <div>
        <span className="p-5">
          Em có dùng reset form sau khi POST - PUT, nhưng cả 2 đều không work.
          Nhờ mentor gợi ý giúp em cách fix với ạ. Em cám ơn!.
        </span>
        <h2 className="text-center mt-5">Cửa hàng đồ ăn</h2>
        <FoodForm></FoodForm>
        <FoodList></FoodList>
      </div>
    );
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    updateFoodList: (list) => {
      dispatch(updateFoodListAction(list));
    },
  };
};

export default connect(null, mapDispatchToProp)(FoodStore);
