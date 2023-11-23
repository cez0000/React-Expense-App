import CartIcon from "../Cart/CardIcon";
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = props => {
    const ctxCart = useContext(CartContext);
    const [shouldBump, setshouldBump] = useState(false)
    useEffect(() => {
        if (ctxCart.items.length === 0) {
            return
        }
        setshouldBump(true);
        const timer = setTimeout(() => {
            setshouldBump(false)
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    }, [ctxCart.items])

    const numberOfOrders = ctxCart.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    const btnClasses = `${classes.button} ${classes.bump}`
    return (


        <button className={shouldBump ? btnClasses : classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Order</span>
            <span className={classes.badge}>{numberOfOrders}</span>
        </button>

    )
};

export default HeaderCartButton