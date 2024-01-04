import { useState } from "react";



export default function Input({tag, calcInvestment, children}) {
    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (event) => {
        const { value } = event.target;
        setInputValue(value);

        calcInvestment(tag, value);
    }

    return (
        <div>
            <label>{children}</label>
            <input type="number" required value={inputValue} onChange={handleOnChange}/>
        </div>
    )
}