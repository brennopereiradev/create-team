import { useState } from "react";
import Button from "../Button";
import InputFieldText from "../InputFieldText";
import Dropdown from "../DropDown";
import "./style.css";

const Form = (props) => {
  const [name, setName] = useState('');
  const [functionF, setFunctionF] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    props.registeredUser({
      name,
      functionF,
      image,
      team
    })
    setName('')
    setFunctionF('')
    setImage('')
    setTeam('')
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Title</h2>
        <InputFieldText
          required={true}
          label="name"
          placeholder="Type Your name"
          value={name}
          onUpdate={(value) => setName(value)}
        />
        <InputFieldText
          required={true}
          label="function"
          placeholder="Type Your function"
          value={functionF}
          onUpdate={(value) => setFunctionF(value)}
        />
        <InputFieldText
          required={true}
          label="image"
          placeholder="Insert Your image"
          value={image}
          onUpdate={(value) => setImage(value)}
        />
        <Dropdown
          required={true}
          label="Teams"
          item={props.teams}
          value={team}
          onUpdate={(value) => setTeam(value)}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};
export default Form;
