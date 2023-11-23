import { useState } from "react"

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [didTouch, setDidTouch] = useState(false);
    const isValid = validateValue(enteredValue);
    const setInputValue = event => {
        setDidTouch(true);
        setEnteredValue(event.target.value);
    };
    const hasError = !isValid && didTouch
    const handleBlur = () => {
        setDidTouch(true)
    }
    const reset = () => {
        setEnteredValue('');
        setDidTouch(false)
    };

    return {
        enteredValue,
        isValid,
        hasError,
        setInputValue,
        handleBlur,
        reset
    }
}

export default useInput