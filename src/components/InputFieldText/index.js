import "./style.css";

const InputFieldText = (props)=>{

    const onType = (event)=>{
        props.onUpdate(event.target.value)
    }

    return(
        <div className="field-text">
        <label>{props.label}</label>
        <input value={props.value} onChange={onType} required = {props.required} placeholder={props.placeholder} />
        </div>
    );
}
export default InputFieldText;