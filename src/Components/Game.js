import React, { Component } from 'react'
import Cardboard from './Cardboard'
import Header from './Header'
import './../styles/Game-main.css'

// let imgSourceArray = [
//     '/images/1.jpg',
//     '/images/2.jpg',
//     '/images/3.jpg',
//     '/images/4.jpg',
//     '/images/5.jpg',
//     '/images/6.jpg',
//     '/images/7.jpg',
//     '/images/8.jpg',
//     '/images/9.jpg',
//     '/images/10.jpg',
//     '/images/11.jpg',
//     '/images/12.jpg'
// ];
// imgSourceArray = this.imgSourceArray.concat(this.imgSourceArray);


// const fillTheBoard = () => {
//     let board = []
//     for (let i = 0; i < 8 / 4; i++) {
//         board[i] = [];
//     }

//     for (let i = 0; i < 8 / 4; i++) {
//         for (let y = 0; y < 8 / 4; y++) {
//             let imageAddress = urlGenerator(imgSourceArray)
//             board[i][y] = <Card key={i + y} coordinates={i.toString() + y.toString()} isHidden={false} notFlipped={true}
//                 onCardClick={this.onCardClick} imageAddress={imageAddress} onCardboardCardClick={this.onCardboardCardClick} />;

//         }
//     }
//     return board;
// }

// const urlGenerator = (imgSourceArray) => {
//     while (imgSourceArray.length) {
//         var index = Math.floor(Math.random() * imgSourceArray.length);
//         let item = imgSourceArray[index];
//         imgSourceArray.splice(index, 1);
//         return item
//     }
// }


class Game extends Component {
    constructor(props) {
        super(props)

        this.onCardClick = this.onCardClick.bind(this)

        this.state = {
            time: 0,
            score: 0,
            level: 0,
            cardboard: [
                {key: 0, coordinates: 0, isHidden:false, notFlipped:true, imageAddress: "/images/1.jpg"},
                {key: 1, coordinates: 1, isHidden:false, notFlipped:true, imageAddress: "/images/1.jpg"},
                {key: 2, coordinates: 2, isHidden:false, notFlipped:true, imageAddress: "/images/2.jpg"},
                {key: 3, coordinates: 3, isHidden:false, notFlipped:true, imageAddress: "/images/2.jpg"}
            ]
        }

    }

    onCardClick(card) {
        this.setState(prevState =>{
            let board = prevState.cardboard;
            board[card.props.coordinates].notFlipped = !board[card.props.coordinates].notFlipped;
            return board;
        })
    }

    render() {

        return (
            <div>
                <Header level={this.state.level} score={this.state.score} time={this.state.time} />
                <Cardboard arrayOfCards={this.state.cardboard} onCardClick={this.onCardClick} />
            </div>
        )
    }
}

export default Game