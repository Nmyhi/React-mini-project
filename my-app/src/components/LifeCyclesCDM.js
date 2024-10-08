import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifecyclesCDMChild'

export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log("constructor called!")
        super(props)
        this.state = {
            data: "loading"
        }
    }
    getData() {
        console.log("getData() is called")
        setTimeout(() => {
            console.log("Data Fetced!")
            this.setState({
                data: "loaded"
            })
        }, 3000)
    }
    componentDidMount() {
        console.log("Component mounted")
        this.getData()
    }
    render() {
        console.log("render method called")
    return (
      <div>
        <h1>{this.state.data}</h1>
        <LifeCyclesCDMChild/>
      </div>
    )
  }
}

export default LifeCyclesCDM