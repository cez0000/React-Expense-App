import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";
import CartForm from "./CartForm";

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = item => {
        const amount = 1
        cartCtx.addItem({
            id: item.id,
            name: item.name,
            amount: amount,
            price: item.price
        });

    }
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => {
                return <CartItem key={item.id} name={item.name} price={item.price}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)} />
            })}
        </ul>
    );

    return (
        <Modal onClose={props.onClick}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {hasItems && <CartForm onClick={props.onClick} />}

        </Modal>
    )
};

export default Cart