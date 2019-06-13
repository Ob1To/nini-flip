import React, { Component } from 'react'
import './../styles/Cardboard-main.css'
import Card from './Card'

class Cardboard extends Component {
    render() {

        let cardArray = [];

        for (let index = 0; index < this.props.level; index++) {
            cardArray[index] = <Card/>
        }
        
        return (
            <div className='Cardboard-main'>
                {cardArray}
            </div>
        )
    }
}

export default Cardboard
