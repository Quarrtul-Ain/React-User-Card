//src/UserCard.js
import React from "react";
function UserCard({name, role}) {
    return(
        <div style={{border:'1px solid #ddd', padding:'1em', margin:'1em', borderRadius:'10px',width:'200px'}}>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
}
export default UserCard;