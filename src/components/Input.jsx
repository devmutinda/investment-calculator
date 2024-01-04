export default function Input({tag, onChange, values, children}) {
    const handleOnChange = (event) => {
        const { value } = event.target;
        onChange(tag, value);
    }

    return (
        <p>
            <label>{children}</label>
            <input type="number" required value={values[tag]} onChange={handleOnChange}/>
        </p>
    )
}