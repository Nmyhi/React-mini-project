import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloaded: true,
         isLoggedIn: true
      }
    }

  render() {
    return (
      <div>
        <h1>{this.state.isloaded ? "Data loaded!" : "Loading..."}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the site, please complete the steps below:</p>
                <ol>
                    <li>Confirm your email!</li>
                    <li>Complete your profile!</li>
                    <li>Subcribe to the newsletter!</li>
                </ol>  
            </div>
        ) : 
        ( <p>Please sign in!</p>)}
      </div>
    )
  }
}

export default ConditionalRenderingClass;