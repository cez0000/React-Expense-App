import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useState, useEffect } from "react";




const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false)
    const getMeals = async () => {
        setLoading(true)
        await fetch('https://react-http-efea9-default-rtdb.firebaseio.com/meals.json')
            .then((response) => {
                return response.json()
            })
            .then(data => {
                const rawMeals = Object.values(data);
                const readyMeals = rawMeals.map(meal => <MealItem
                    key={meal.id + Math.random()}
                    id={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price} />);
                setMeals(readyMeals);
                setLoading(false)
            })
    }
    useEffect(() => {
        getMeals()
    }, [])



    return (
        <section className={classes.meals}>
            <Card>
                {loading && <h1>Meals are loading...</h1>}
                <ul>
                    {meals}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals