import { useState } from "react";
import { Header } from "./Components/header/Header";
import { MealSummary } from "./Components/meal-summary/MealSummary";
import { Meals } from "./Components/meals/Meals";
import { Basket } from "./Components/basket/Basket";
import { CardProvaider } from "./store/Card-contex";
// import { UseCounter } from "./Hooks/Counter";
function App() {
  const [toggle, setToggle] = useState(false);
  // const { inc, dec, count } = UseCounter;?
  function ToggleHandler() {
    setToggle((prev) => !prev);
  }
  return (
    <CardProvaider>
      {/* <button onClick={dec}>-</button>
      <h1 style={{ color: "greenyellow" }}>{count}</h1>
      <button onClick={inc}>+</button> */}
      <Header onToggle={ToggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket onToggle={ToggleHandler} />}
    </CardProvaider>
  );
}

export default App;
