import React from "react";
import mealsImage from '../../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {

    return (
        <>
            <header className={classes.header}>
                <h1>Unusual CasualMeals</h1>
                <HeaderCartButton onClick={props.click} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='zarcie' />
            </div>
        </>)
}

export default Header