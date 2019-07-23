import React, { Component } from 'react'
import './../../styles/Highscores-main.css'

class Highscores extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='Highscores-main'>
                <div className='highscore-element'>1: {this.props.highscores[0].name} - {this.props.highscores[0].time}</div>
                <div className='highscore-element'>2: {this.props.highscores[1].name} - {this.props.highscores[1].time}</div>
                <div className='highscore-element'>3: {this.props.highscores[2].name} - {this.props.highscores[2].time}</div>
            </div>

        )
    }

}



export default Highscores