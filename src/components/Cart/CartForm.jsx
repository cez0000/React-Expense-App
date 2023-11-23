import useInput from "../../hooks/use-input";
import classes from './Cart.module.css';
const CartForm = props => {
    const {
        enteredValue: enteredName,
        isValid: nameIsValid,
        hasError: hasNameError,
        setInputValue: handleNameChange,
        handleBlur: handleNameBlur,
        reset: nameReset
    } = useInput(value => value.trim() !== '');

    const {
        enteredValue: enteredLastName,
        isValid: lastNameIsValid,
        hasError: hasLastNameError,
        setInputValue: handleLastNameChange,
        handleBlur: handleLastNameBlur,
        reset: LastNameReset
    } = useInput(value => value.trim() !== '');

    const {
        enteredValue: enteredEmail,
        isValid: emailIsValid,
        hasError: hasEmailError,
        setInputValue: handleEmailChange,
        handleBlur: handleEmailBlur,
        reset: EmailReset
    } = useInput(value => value.includes('@'));

    const formIsValid = nameIsValid && emailIsValid && lastNameIsValid;

    const formData = {
        name: enteredName,
        lastName: enteredLastName,
        email: enteredEmail
    }


    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (!formIsValid) {
            return
        }
        nameReset();
        LastNameReset();
        EmailReset();
        const sendUserData = async () => {
            await fetch('https://react-http-efea9-default-rtdb.firebaseio.com/users.json', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json());
        };
        sendUserData();

    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div >
                <input className={classes.form_control} type="text" name="name" placeholder="Twoje imię" value={enteredName} onChange={handleNameChange} onBlur={handleNameBlur} />
                {hasNameError && <p style={{ color: 'red' }}>Name must not be empty</p>}
            </div>
            <div>
                <input className={classes.form_control} type="text" name="name" placeholder="Twoje nazwisko" value={enteredLastName} onChange={handleLastNameChange} onBlur={handleLastNameBlur} />
                {hasLastNameError && <p style={{ color: 'red' }}>Last Name must not be empty</p>}
            </div>
            <div>
                <input className={classes.form_control} type="text" name="email" placeholder="Twój email" value={enteredEmail} onChange={handleEmailChange} onBlur={handleEmailBlur} />
                {hasEmailError && <p style={{ color: 'red' }}>Email must contain @</p>}
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
                <button type="submit" className={classes.button}>Order</button>
            </div>

        </form>)

}

export default CartForm