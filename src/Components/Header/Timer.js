import React, { Component } from 'react'
import './../../styles/Timer-main.css'

class Timer extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='Timer-main'>
                Time: {this.props.time}
            </div>
        )
    }
}

export default Timer