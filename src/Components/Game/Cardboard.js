import React, { Component } from 'react'
import Card from './Card'
import './../../styles/Cardboard-main.css'

class Cardboard extends Component {

    constructor(props) {
        super(props)

        this.onCardClick = this.props.onCardClick.bind(this);
        this.startButtonClicked = this.props.startButtonClicked.bind(this);
    }

    render() {

        return (
            // <div className='Cardboard-main'>
            //     {this.props.arrayOfCards.map(i => <Card key={i.key} coordinates={i.coordinates} isHidden={i.isHidden} notFlipped={i.notFlipped} imageAddress={i.imageAddress} onCardClick={this.props.onCardClick} />)}
            // </div>

            <div>
                {this.props.gameStarted
                    ? this.props.arrayOfCards.map(i => <Card key={i.key} coordinates={i.coordinates} isHidden={i.isHidden} notFlipped={i.notFlipped} imageAddress={i.imageAddress} onCardClick={this.props.onCardClick} />)
                    : <div id='start-button-container'><button onClick={this.startButtonClicked} className='/start-game'>Start Game</button></div>
                }
            </div>
        )
    }

    // fillTheBoard = () => {
    //     let board = []
    //     for (let i = 0; i < 8 / 4; i++) {
    //         board[i] = [];
    //     }

    //     for (let i = 0; i < 8 / 4; i++) {
    //         for (let y = 0; y < 8 / 4; y++) {
    //             let imageAddress = this.urlGenerator(this.props.arrayImages)
    //             board[i][y] = <Card key={i + y} coordinates={i.toString() + y.toString()} isHidden={false} notFlipped={true}
    //                 onCardClick={this.onCardClick} imageAddress={imageAddress} onCardboardCardClick={this.onCardboardCardClick} />;


    //         }
    //     }
    //     return board;
    // }

    // urlGenerator = (imgSourceArray) => {
    //     while (imgSourceArray.length) {
    //         var index = Math.floor(Math.random() * imgSourceArray.length);
    //         let item = imgSourceArray[index];
    //         imgSourceArray.splice(index, 1);
    //         return item
    //     }
    // }
}


export default Cardboard
