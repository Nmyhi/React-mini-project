import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild';

export class LifeCyclesCDU extends Component {
    constructor(props) {
      console.log("Comstructor called");
        super(props)
        this.state = {
            greeting: "Hello!"
        }
    }
    updateGreeting = () => {
        console.log("Update greeting called!");
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === "Hello!" ? "Goodbye": "Hello!"
            }
        })
    }
    componentDidUpdate () {
      console.log("Component updated!");
    }
  render() {
    console.log("Render method called!")
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update Greeting!</button>
        <LifeCyclesCDUChild/>
      </div>
    )
  }
}

export default LifeCyclesCDU