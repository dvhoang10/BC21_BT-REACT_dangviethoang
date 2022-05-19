import { CHANGE_QUANTITY } from "../constants/food";

const burgerState = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },

  menu: {
    salad: 10,
    cheese: 10,
    beef: 10,
  },

  total: 30,
};

export const BurgerReducer = (state = burgerState, { type, payload }) => {
  switch (type) {
    case CHANGE_QUANTITY: {
      let burgerCopy = { ...state.burger };
      let index = burgerCopy.hasOwnProperty(payload.key);

      if (index === true) {
        burgerCopy[payload.key] = burgerCopy[payload.key] + payload.value;
      }

      if (burgerCopy[payload.key] < 0) {
        burgerCopy[payload.key] = 0;
      }

      state.burger = burgerCopy;

      // let price = Object.keys(state.burger).map((key) => {
      //   return state.burger[key] * state.menu[key];
      // });

      let sum = 0;
      for (let key in state.burger) {
        sum += state.burger[key] * state.menu[key];
      }

      state.total = sum;

      return { ...state };
    }
    default:
      return state;
  }
};
