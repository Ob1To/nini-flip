import React, { Component } from "react";
import Timer from './Timer'
import Level from './Level'
import Score from './Score'
import './../styles/Header.css'
import './../styles/Level-main.css'
import './../styles/Score-main.css'

class Header extends Component {

    render() {

        return (
            <div className='Header-main'>
                <Timer />
                <Level />
                <Score />
            </div>
        )
    }
}

export default Header