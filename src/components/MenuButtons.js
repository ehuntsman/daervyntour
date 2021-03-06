import React from "react";
import KeyHandler, { KEYDOWN, KEYUP } from "react-key-handler";

function MenuButtons(props) {
  function handleToggles(event, value, toggle) {
    return <KeyHandler keyEventName={event} keyValue={value} onKeyHandle={toggle} />;
  }

  return (
    <div className="container menu-buttons-container">
      <div className="menu-buttons">
        {handleToggles(KEYDOWN, " ", props.toggleTextBox)}
        {handleToggles(KEYDOWN, "Control", props.setNextFrame)}
        {handleToggles(KEYUP, "Enter", props.setNextFrame)}
        <button><a href="/">Start Over</a></button>
        {/* <button onClick={props.toggleConfigMenu}>{props.configMenuShown ? "Hide Config" : "Config"}</button> */}
        {/* <button onClick={props.toggleFullscreen} style={{ float: "right" }}>
          Fullscreen
        </button> */}
      </div>
    </div>
  );
}

export default MenuButtons;
