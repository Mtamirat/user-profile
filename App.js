import React from "react";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <UserProfile
        name="Jane Doe"
        email="jane.doe@example.com"
        photo="https://via.placeholder.com/150"
      />

<UserProfile
        name="John Smith"
        email="john.smith@gmail.com"
        photo="https://via.placeholder.com/150"
      />

<UserProfile
        name="Student User"
        email="student@university.edu"
        photo="https://via.placeholder.com/150"
      />

{/* <UserProfile
  name="!@#$%^&*()_+"
  email="special@example.com"
  photo="https://via.placeholder.com/150"
/> */}
    </div>
  );
}

export default App;