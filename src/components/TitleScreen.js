import React from "react";

function TitleScreen(props) {
  console.log(props, "this is props")
  return (
    <div className="overlay" id="title-overlay">
      <div id="title-screen-header">
        <div id="logo">Daervyn Exploration DIY</div>
        <form>
          <input
            value={props.parentState.name}
            type="text" 
            name="name" 
            placeholder="name" 
            onChange={(e) => props.changeName(e)} 
            />
          <label>Character Name</label>
        </form>
        <ul id="menu">
          <li>
            <span onClick={props.beginStory}>Begin</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TitleScreen;
