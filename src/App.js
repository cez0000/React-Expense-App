import React, { useState } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [click, setClick] = useState(false);

  const showModal = () => {
    setClick(true)
  };
  const hideModal = () => {
    setClick(false)
  };
  return (
    <CartProvider>
      {click && <Cart onClick={hideModal} />}
      <Header click={showModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App;
