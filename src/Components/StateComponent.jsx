import React, { Component } from 'react'

class StateComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "Welcom Visitor"
        }
    }
    
    changeMessage = () => {
        this.setState({message: "thank you for subscribe"})
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Subscribe</button>
            </div>
        )
    }
}

export default StateComponent
