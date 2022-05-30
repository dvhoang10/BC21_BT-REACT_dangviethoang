import axios from "axios";
import { BASE_URL } from "../configURL";

export let foodServ = {
  getList: () => {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },

  addFood: (food) => {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: food,
    });
  },

  deleteFood: (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },

  getEditFood: (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },

  updateFood: (id, food) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "PUT",
      data: food,
    });
  },
};
