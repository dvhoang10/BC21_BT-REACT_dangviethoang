import { cloneDeep } from "../../utils";
import {
  EDIT_FOOD,
  UPDATE_EDIT_FOOD,
  UPDATE_FOOD_LIST,
} from "../constants/food.constant";

let initialState = {
  foodList: [],
  foodEdit: null,
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FOOD_LIST: {
      state.foodList = action.payload;
      return { ...state };
    }
    case EDIT_FOOD: {
      state.foodEdit = cloneDeep(action.payload);
      return { ...state };
    }
    case UPDATE_EDIT_FOOD: {
      state.foodList = action.payload;
      state.foodEdit = null;
      return { ...state };
    }
    default:
      return state;
  }
};
