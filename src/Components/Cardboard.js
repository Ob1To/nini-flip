import React, { Component } from 'react'
import Card from './Card'
import './../styles/Cardboard-main.css'

class Cardboard extends Component {

    constructor(props) {
        super(props)

        this.onCardClick = this.props.onCardClick.bind(this);

        this.state = {
            currentGameboard: this.props.currentGameboard
        }
    }

    fillTheBoard = function () {
        for (let i = 0; i < 16 / 4; i++) {
            this.props.currentGameboard[i] = [];
        }
    
        for (let i = 0; i < 16 / 4; i++) {
            for (let y = 0; y < 16 / 4; y++) {
                this.props.currentGameboard[i][y] = <Card isHidden={this.props.isHidden} onCardClick={this.onCardClick} imageAddress={urlGenerator(this.props.arrayImages)} />;
            }
        }
    }

    componentDidMount() {
        this.fillTheBoard();
    }

    render() {
        return (
            <div className='Cardboard-main'>
                {this.state.currentGameboard}
            </div>
        )
    }
}

const urlGenerator = function (imgSourceArray) {
    while (imgSourceArray.length) {
        var index = Math.floor(Math.random() * imgSourceArray.length);
        let item = imgSourceArray[index];
        imgSourceArray.splice(index, 1);
        return item
    }
}
export default Cardboard
