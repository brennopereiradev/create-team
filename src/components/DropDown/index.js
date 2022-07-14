import "./style.css";

const Dropdown = (props) => {
  return (
    <div className="drop-down">
      <label>{props.label}</label>
      <select onChange={event => props.onUpdate(event.target.value)} required = {props.required} value={props.value} >
      <option value="">Select</option>
        {props.item.map(item => <option key={item} >{item}</option>)}
      </select>
    </div>
  )
}
export default Dropdown;
