import React  from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 2,
    addItem: (item) => { },
    removeItem: (id) => { }
});

export default CartContext