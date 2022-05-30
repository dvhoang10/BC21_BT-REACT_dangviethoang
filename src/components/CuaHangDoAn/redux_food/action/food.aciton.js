import { UPDATE_EDIT_FOOD, UPDATE_FOOD_LIST } from "../constants/food.constant";

export const updateFoodListAction = (value) => {
  return {
    type: UPDATE_FOOD_LIST,
    payload: value,
  };
};

export const updateEditFoodAction = (value) => {
  return {
    type: UPDATE_EDIT_FOOD,
    payload: value,
  };
};
