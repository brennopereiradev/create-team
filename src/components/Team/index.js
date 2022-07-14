import User from "../User";
import "./style.css";

const Team = (props) => {
  return (
    (props.users.length > 0) ? <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h1 style={{ borderColor:props.primaryColor }}>{props.name}</h1>
      <div className="users">
        {props.users.map( user => <User backgroundColor={props.primaryColor} key={user.name} name={user.name} functionF={user.functionF} image={user.image} /> )}
      </div>
    </section>
    : ''
  );
};

export default Team;
