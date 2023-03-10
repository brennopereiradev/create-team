import { useState } from "react";
import Button from "../Button";
import InputFieldText from "../InputFieldText";
import Dropdown from "../DropDown";
import "./style.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [functionF, setFunctionF] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.registeredUser({
      name,
      functionF,
      image,
      team,
    });
    setName("");
    setFunctionF("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Fill the fields bellow</h2>
        <InputFieldText
          required={true}
          placeholder="Type Your name"
          value={name}
          onUpdate={(value) => setName(value)}
        />
        <InputFieldText
          required={true}
          placeholder="Type Your function"
          value={functionF}
          onUpdate={(value) => setFunctionF(value)}
        />
        <InputFieldText
          required={true}
          placeholder="Insert Your image"
          value={image}
          onUpdate={(value) => setImage(value)}
        />
        <Dropdown
          required={true}
          item={props.teams}
          value={team}
          onUpdate={(value) => setTeam(value)}
        />
        <div className="button-area">
          <Button>Create Card</Button>
        </div>
      </form>
    </section>
  );
};
export default Form;
