//src/App.js
import React from "react";
import Header from "./Header";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <Header />
      <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
      <UserCard name="Quarrtul Ain" role="Front End Developer"/>
      <UserCard name="Maham Sardar" role="Student"/>
      </div>
    </div>
  );
}

export default App;
