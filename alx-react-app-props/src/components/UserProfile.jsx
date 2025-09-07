import { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(30);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserProfile;
