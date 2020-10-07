import React, { Component } from 'react'

export default class Tab extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.onClick} style={{ backgroundColor: this.props.bgColor }}>{this.props.name}</button>
            </>
        )
    }
}
