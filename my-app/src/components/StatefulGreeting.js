import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttontext: "Exit",

        };
    }

    handleClick() {
        if (this.state.introduction === "Hello!") {
        this.setState({
            introduction: "Goodbye!",
            buttontext: "Enter"
        });
    };
    if (this.state.introduction === "Goodbye!") {
        this.setState({
            introduction: "Hello!",
            buttontext: "Exit"
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

export default StatefulGreeting;