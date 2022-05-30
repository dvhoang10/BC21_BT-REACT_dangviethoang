import React, { Component } from "react";
import { connect } from "react-redux";
import FoodItem from "./FoodItem";

class foodList extends Component {
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Hình ảnh</th>
            <th>Mô tả</th>
            <th>Thao tác</th>
          </thead>

          <tbody>
            {this.props.foodList?.map((food) => {
              return <FoodItem key={food.id} food={food}></FoodItem>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    foodList: state.foodList,
  };
};

export default connect(mapStateToProps)(foodList);
