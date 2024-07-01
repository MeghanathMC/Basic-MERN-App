import { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((users) => {
        console.log(users);
        setUsers(users.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const Submit =()=>{
    axios
    .post("http://localhost:3001/createUser",{name,age})
    .then((users) => {
      console.log(users);
    })
    .catch((err) => console.log(err));
    

  }

  return (
    <div className="center">
      <h2>Coders Information</h2>
      {users.map((user) => {
        return (
          <div>
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
          </div>
        );
      })}

      <br />

      <input
        type="text"
        placeholder="Your name: "
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Your age : "
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button type="button" onClick={Submit}>Create User</button>
    </div>
  );
}

export default App;
