import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Your name here");
  const [bio, setBio] = useState("short bio");

//   console.log("name", { name }, "bio", { bio });
  return (
    <div style={{ width: "400px", display: "flex", flexDirection: "column" }}>
      <img
        src="https://images.unsplash.com/photo-1703243597099-4fc9bb2613cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
        width={"150px"}
        alt="Picture"
      />
      <div>
      <input
        type="text"
        placeholder="name here"
        onChange={(e) => setName(e.target.value)}
        />

      <input
        type="text"
        placeholder="bio"
        onChange={(e) => setBio(e.target.value)}
        />
        </div>
        <Info name={name} bio={bio}/>
      <a href="#">Facebook</a>
      <a href="#">Twiter</a>
    </div>
  
  );
};

const Info=({name, bio})=>{
    return(
<div>
<h1>{name}</h1>
<p>{bio}</p>
</div>
    );
}
export default App;
