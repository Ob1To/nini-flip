import React, { Component } from 'react'
import '../../styles/Card.css'

class Card extends Component {
    constructor(props) {
        super(props)

        this.cardClicked = this.cardClicked.bind(this);

    }

    cardClicked() {
        this.props.onCardClick(this);
    }

    render() {
        const style = this.props.notFlipped ? { display: 'none' } : {}
        const hidden = this.props.isHidden ? { visibility: 'hidden' } : {}
        return (
            <div style={hidden} className='Card' onClick={this.cardClicked}>
                <img style={style} src={this.props.imageAddress} alt="ERROR"></img>
            </div>
        )
    }
}

export default Card
