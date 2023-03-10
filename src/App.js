import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Development",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data-Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UI/UX Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [users, setUsers] = useState([]);

  const addedNewUser = (user) => {
    //debugger
    setUsers([...users, user]);
  };

  return (
    <div className="container-fluid">
      <div className="App">
        <Banner />
        <Form
          teams={teams.map((team) => team.name)}
          registeredUser={(user) => addedNewUser(user)}
        />
        {teams.map((team) => (
          <Team
            key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            users={users.filter((user) => user.team === team.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
