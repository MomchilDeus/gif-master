import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props)
        this.queryString = ''
    }

    inputHandler = e => {
        this.setState({
            queryString: e.target.value
        })
    }

    render() {
        return (
            <div className="Input">
                <input 
                    onChange={this.inputHandler}
                    type="text" />
                <button 
                    onClick={() => this.props.fetchGif(this.state.queryString)}>Search</button>
                <button
                    onClick={this.props.randomGif} >Random</button>
            </div>
        )
    }
}