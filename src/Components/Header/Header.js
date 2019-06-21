import React, { Component } from "react";
import Timer from './Timer'
import Level from './Level'
import Score from './Score'
import './../../styles/Header.css'
import './../../styles/Level-main.css'
import './../../styles/Score-main.css'

class Header extends Component {
    constructor(props) {
        super(props)
        this.levelSelection = this.props.levelSelection.bind(this)
    }
    render() {

        return (
            <div className='Header-main'>
                <Timer />
                <Level gameStarted={this.props.gameStarted} levelSelection={this.props.levelSelection}/>
                <Score />
            </div>
        )
    }
}

export default Header