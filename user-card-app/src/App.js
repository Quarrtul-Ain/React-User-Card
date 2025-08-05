//src/App.js
import React from "react";
import Header from "./header";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <Header />
      <UserCard name="Quarrtul Ain" role="Front End Developer"/>
      <UserCard name="Maham Sardar" role="Student"/>
    </div>
  );
}

export default App;
