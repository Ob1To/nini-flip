import React, { Component } from "react";
import Timer from './Timer'
import Level from './Level'
import Highscores from './Highscores'
import './../../styles/Header.css'
import './../../styles/Level-main.css'
import './../../styles/Highscores-main.css'

class Header extends Component {
    constructor(props) {
        super(props)
        this.levelSelection = this.props.levelSelection.bind(this)
    }
    render() {

        return (
            <div className='Header-main'>
                <Timer time={this.props.time} timerIsOn={this.props.timerIsOn}/>
                <Level gameStarted={this.props.gameStarted} levelSelection={this.props.levelSelection}/>
                <Highscores highscores={this.props.highscores}/>
            </div>
        )
    }
}

export default Header