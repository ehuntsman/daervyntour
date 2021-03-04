import React from "react";

function TitleScreen(props) {
  console.log(props, "this is props")
  return (
    <div className="overlay" id="title-overlay">
      <div id="title-screen-header" className="clouds-wrapper">
        <div id="logo">Daervyn Exploration DIY</div>
        {/* <form>
          <input
            value={props.parentState.name}
            type="text" 
            name="name" 
            placeholder="name" 
            onChange={(e) => props.changeName(e)} 
            />
          <label>Character Name</label>
        </form> */}
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




{/* <div className="home-page">
    <div className="clouds-wrapper">
        <div className="cloud first">
            <img src={cloud} className="cloud1" alt="cloud" />
            <img src={cloud} className="cloud2" alt="cloud" />
        </div>
    </div>
    <div className="home-container">
        <img src={logo} className="home-logo" alt="logo" />
        <div className="home-links">
            {amILoggedIn}
        </div>
    </div>
</div> */}