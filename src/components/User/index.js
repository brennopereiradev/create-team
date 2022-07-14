import "./style.css";

const User = (props) => {
  return (
      <div className="user">
        <div className="user-header" style={{ backgroundColor: props.backgroundColor }}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className="user-footer">
          <h4>{props.name}</h4>
          <h5>{props.functionF}</h5>
        </div>
    </div>
  );
};
export default User;
