import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log("you have clicked functional component button");
    };
  return (
    <div>
        <button onClick={clickHandler}>Click me - functional component</button>
    </div>
  )
};

export default EventsFunctional;