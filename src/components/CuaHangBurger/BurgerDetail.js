import React, { Component } from "react";
import { connect } from "react-redux";

class BurgerDetail extends Component {
  render() {
    return (
      <div className="text-center">
        <h3>Cửa hàng burger</h3>
        <div className="burger">
          <div className="burger-top"></div>
          <div className="salad flex-center">Salad: {this.props.salad}</div>
          <div className="cheese flex-center">Cheese: {this.props.cheese}</div>
          <div className="beef flex-center">
            Beef:
            {this.props.beef}
          </div>
          <div className="burger-bottom"></div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    salad: state.BurgerReducer.burger.salad,
    cheese: state.BurgerReducer.burger.cheese,
    beef: state.BurgerReducer.burger.beef,
  };
};

export default connect(mapStatetoProps)(BurgerDetail);
