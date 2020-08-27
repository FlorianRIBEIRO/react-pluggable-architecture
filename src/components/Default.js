import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log('Component props :', this.props)
        return (
            <div>
                <h1>Default component</h1>
            </div>
        )
    }
}