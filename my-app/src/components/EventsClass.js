import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler() {
        console.log("you have clicked the the class component button");
    };
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me - class component</button>
      </div>
    )
  }
};

export default EventsClass