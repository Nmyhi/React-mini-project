import React from "react";




class StatefulGreetingsWithCallback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttontext: "Exit",
        }
    }

// The callback function is required to console log the state values after the changes because the setState function is asynchronous //

    handleClick() {
        if (this.state.introduction === "Hello!") {
        this.setState({
            introduction: "Goodbye!",
            buttontext: "Enter"
        }, () => {
            console.log("new state", this.state.introduction);
            console.log("new state", this.state.buttontext);
        });
    };
    if (this.state.introduction === "Goodbye!") {
        this.setState({
            introduction: "Hello!",
            buttontext: "Exit"
        }, () => {
            console.log("new state", this.state.introduction);
            console.log("new state", this.state.buttontext);
        });
    };    
        console.log(this.state.introduction);
    }

    render () {
        return(
            <div>
                <h1>{this.state.introduction}{this.props.greeting} Hello {this.props.name}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttontext}</button>
            </div>
        ) 
    }
}

export default StatefulGreetingsWithCallback;