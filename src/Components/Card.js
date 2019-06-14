import React, { Component } from 'react'
import './../styles/Card.css'

class Card extends Component {
    constructor (props) {
        super(props)

        this.cardClicked = this.cardClicked.bind(this);

        this.state = {
            show: false,
            isFlipped: true
        }
    }

    cardClicked () {
        this.setState(prevState => ({
            clicked: prevState.clicked === 0 ? 1 : 0,
            isFlipped: !prevState.isFlipped
        }))
    }

    render() {
        const style = this.state.isFlipped ? {display: 'none'} : {}
        return(
            <div className='Card' onClick={this.cardClicked}>
                <img style={style} src={this.props.imageAddress} alt="ERROR"></img>
            </div>
        )
    }
}

export default Card
