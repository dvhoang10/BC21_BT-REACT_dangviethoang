import { Button } from "antd";
import "./App.css";

// import ShoesStore from "./components/CuaHangBanGiay/ShoesStore";
// import BurgerStore from "./components/CuaHangBurger/BurgerStore";
import FoodStore from "./components/CuaHangDoAn/FoodStore";

function App() {
  return (
    <div>
      {/* Cửa hàng bán giày */}
      {/* <ShoesStore></ShoesStore> */}

      {/* Cửa hàng burger */}
      {/* <BurgerStore></BurgerStore> */}

      {/* Cửa hàng đồ ăn */}
      <FoodStore></FoodStore>
    </div>
  );
}

export default App;
