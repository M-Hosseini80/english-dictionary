
import './Input.css'
export default function Input(props) {
    // const [val, setVal] = useState("")
    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);
    }
    return (
        <div className="input">
            <input value={props.value} onChange={handleChange} type="text" placeholder="English.." />
        </div>
    )
}
