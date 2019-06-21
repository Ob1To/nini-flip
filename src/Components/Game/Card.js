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

    setCardsWidth() {
        if (this.props.level <= 16) {
            return 'card-width-8vw'
        } else if (this.props.level === 20) {
            return 'card-width-7vw'
        } else {
            return 'card-width-6vw'
        }
    }

    render() {
        let width = this.setCardsWidth();
        const style = this.props.notFlipped ? { display: 'none' } : {}
        const hidden = this.props.isHidden ? { visibility: 'hidden' } : {}
        return (
            <div style={hidden} className={'Card ' + width} onClick={this.cardClicked}>
                <img style={style} src={this.props.imageAddress} alt="ERROR"></img>
            </div>
        )
    }
}

export default Card
