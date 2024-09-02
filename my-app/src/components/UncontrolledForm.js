import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
      super(props)
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
    }
  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="id-name">Your Name:</label>
            <input id="id-name" name="name" type="text"></input>
          </div>
          <div>
            <label htmlFor="id-category">Query category:</label>
            <select id="id-categtory" name="category">
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General enquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-comments">Comments:</label>
            <textarea id="id-comments" name="comments"/>
          </div>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default UncontrolledForm