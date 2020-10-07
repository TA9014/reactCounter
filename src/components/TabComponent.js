import React, { Component } from 'react'
import Tab from './Tab';

export default class TabComponent extends Component {
    state = {
        currentTab: 0
    };
    render() {
        const { children } = this.props;
        const { currentTab } = this.state;
        return (
            <div>
                {
                    React.Children.map(children, (child, idx) => {
                        return (
                            <Tab onClick={() => this.setState({ currentTab: idx })} name={child.props.name} bgColor={child.props.bgColor} />
                        )

                    })
                }

                <div style={{ width: "300px", height: "300px", margin: "0 auto", border: "3px solid green", backgroundColor: children[currentTab].props.bgColor }}>
                    {children[currentTab].props.name}
                </div>

            </div>
        )
    }
}
