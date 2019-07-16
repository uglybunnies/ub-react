import React, { Component } from 'react'
import axios from 'axios'
import ListJoke from './ListJoke'

export default class DadJokes extends Component {
    constructor() {
        super();
        this.state= {
            currentJoke: 'What do you call a dad that has fallen through the ice? A Popsicle.'
        }
        this.getNewJoke = this.getNewJoke.bind(this);

    }
    componentDidMount() {
        this.getNewJoke()
    }
    getNewJoke() {
        axios.get('https://icanhazdadjoke.com/',{headers: {'Accept' : 'application/json'}})
        .then((resp) => {
            const joke = resp.data.joke;
            this.setState({
                currentJoke: joke
            });
        });
    }
    render() {
        return(
            <div className='dad-jokes'>
                <ListJoke joke={this.state.currentJoke} />
                <p>
                    <button onClick={ this.getNewJoke } className='s3'>Let’s Have Another!</button>
                </p>
            </div>
        )
    }
}
