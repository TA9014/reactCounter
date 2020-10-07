import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <div>
                <button style={{ fontSize: "40px", width: "200px", height: "100px" }} onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
                <button style={{ fontSize: "40px", width: "200px", height: "100px" }} disabled={this.state.counter === 0} onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
                <h1 style={{ fontSize: "40px" }}>{this.state.counter}</h1>
                <button style={{ fontSize: "40px", width: "200px", height: "100px" }} onClick={() => this.setState({ counter: 0 })}>reset</button>
            </div>
        )
    }
}
