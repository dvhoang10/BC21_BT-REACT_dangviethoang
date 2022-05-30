import { message } from "antd";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  updateEditFoodAction,
  updateFoodListAction,
} from "../redux_food/action/food.aciton";
import { foodServ } from "../service/food.service";

class FoodForm extends Component {
  state = {
    name: "",
    img: "",
    description: "",
    price: "",
  };

  constructor(props) {
    super(props);
    this.formRef = createRef();
  }

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps.foodEdit);
    if (nextProps.foodEdit) {
      this.setState({
        ...nextProps.foodEdit,
      });
    }
  }

  handleAddFood = () => {
    foodServ
      .addFood(this.state)
      .then((res) => {
        return foodServ.getList();
      })
      .then((res) => {
        this.props.updateFoodList(res.data);
        message.success("Thêm món ăn thành công");
      })
      .catch((err) => {
        message.error("Thêm món ăn thất bại");
      });
  };

  handleUpdateFood = (id) => {
    foodServ
      .updateFood(id, this.state)
      .then((res) => {
        return foodServ.getList();
      })
      .then((res) => {
        this.props.updateEditFood(res.data);
        message.success("Cập nhật món ăn thành công");
        this.formRef.current.reset();
      })
      .catch((err) => {
        message.error("Cập nhật món ăn thất bại");
      });
  };

  render() {
    return (
      <div className="container py-5 text-left">
        <form ref={this.formRef}>
          <div className="form-group">
            <label htmlFor="name">Tên món</label>
            <input
              value={this.state.name || ""}
              type="text"
              className="form-control"
              name="name"
              id="name"
              aria-describedby="helpId"
              onChange={(event) => {
                this.handleOnChange(event);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Giá món</label>
            <input
              value={this.state.price}
              type="text"
              className="form-control"
              name="price"
              id="price"
              aria-describedby="helpId"
              onChange={(event) => {
                this.handleOnChange(event);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Hình ảnh</label>
            <input
              value={this.state.img}
              type="text"
              className="form-control"
              name="img"
              id="img"
              aria-describedby="helpId"
              onChange={(event) => {
                this.handleOnChange(event);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Mô tả</label>
            <input
              value={this.state.description}
              type="text"
              className="form-control"
              name="description"
              id="description"
              aria-describedby="helpId"
              onChange={(event) => {
                this.handleOnChange(event);
              }}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              this.handleAddFood();
            }}
            className="btn btn-warning mr-2"
          >
            Thêm món
          </button>
          <button
            type="button"
            onClick={() => {
              this.handleUpdateFood(this.state.id);
            }}
            className="btn btn-success"
          >
            Cập nhật
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFoodList: (list) => {
      dispatch(updateFoodListAction(list));
    },

    updateEditFood: (food) => {
      dispatch(updateEditFoodAction(food));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    foodEdit: state.foodEdit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);
