import React, { Component } from 'react'

export default class ListJoke extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <p className='joke s1 white pa2 m0 mb1'>
                { this.props.joke }
            </p>
        )
    }

}
