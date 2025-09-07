import { useState } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(30);

  return (
    <UserContext.Provider value={{ name, age }}>
      <div>
        <h1>User Profile</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    </UserContext.Provider>
  );
}

export default UserProfile;
