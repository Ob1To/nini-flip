import React, { Component } from 'react'
import Cardboard from './Cardboard'
import Header from './../Header/Header'
import './../../styles/Game-main.css'

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
const allCardsArray = [
    { key: 0, coordinates: 0, isHidden: false, notFlipped: true, imageAddress: "/images/1.jpg" },
    { key: 1, coordinates: 1, isHidden: false, notFlipped: true, imageAddress: "/images/1.jpg" },
    { key: 2, coordinates: 2, isHidden: false, notFlipped: true, imageAddress: "/images/2.jpg" },
    { key: 3, coordinates: 3, isHidden: false, notFlipped: true, imageAddress: "/images/2.jpg" },
    { key: 4, coordinates: 4, isHidden: false, notFlipped: true, imageAddress: "/images/3.jpg" },
    { key: 5, coordinates: 5, isHidden: false, notFlipped: true, imageAddress: "/images/3.jpg" },
    { key: 6, coordinates: 6, isHidden: false, notFlipped: true, imageAddress: "/images/4.jpg" },
    { key: 7, coordinates: 7, isHidden: false, notFlipped: true, imageAddress: "/images/4.jpg" },
    { key: 8, coordinates: 8, isHidden: false, notFlipped: true, imageAddress: "/images/5.jpg" },
    { key: 9, coordinates: 9, isHidden: false, notFlipped: true, imageAddress: "/images/5.jpg" },
    { key: 10, coordinates: 10, isHidden: false, notFlipped: true, imageAddress: "/images/6.jpg" },
    { key: 11, coordinates: 11, isHidden: false, notFlipped: true, imageAddress: "/images/6.jpg" },
    { key: 12, coordinates: 12, isHidden: false, notFlipped: true, imageAddress: "/images/7.jpg" },
    { key: 13, coordinates: 13, isHidden: false, notFlipped: true, imageAddress: "/images/7.jpg" },
    { key: 14, coordinates: 14, isHidden: false, notFlipped: true, imageAddress: "/images/8.jpg" },
    { key: 15, coordinates: 15, isHidden: false, notFlipped: true, imageAddress: "/images/8.jpg" }
]


class Game extends Component {
    constructor(props) {
        super(props)

        this.onCardClick = this.onCardClick.bind(this)
        this.startButtonClicked = this.startButtonClicked.bind(this)
        this.levelSelection = this.levelSelection.bind(this)

        this.state = {
            time: 0,
            score: 0,
            level: 8,
            gameStarted: false,
            disabled: false,
            lastClicked: null,
            cardboard: []
        }

    }

    startButtonClicked() {
        this.setState(prevState => ({
            gameStarted: !prevState.gameStarted
        }))
    }

    onCardClick(card) {
        if(this.state.disabled){
            return;
        }

        if(this.state.lastClicked !== null && card !== null){
            this.setState({
                disabled:true
            })
        }

        if (this.state.lastClicked !== null && this.state.lastClicked.props.imageAddress === card.props.imageAddress) {
            this.setState(prevState => {
                let cardboard = prevState.cardboard;
                // cardboard[this.state.lastClicked.props.coordinates].isHidden = !cardboard[this.state.lastClicked.props.coordinates].isHidden;
                cardboard[card.props.coordinates].notFlipped = !cardboard[card.props.coordinates].notFlipped;

                setTimeout(() => {
                    this.hideCards(card);
                }, 1000);
                return {
                    cardboard
                }
            })
        } else if (this.state.lastClicked !== null && this.state.lastClicked.props.imageAddress !== card.props.imageAddress) {
            this.setState(prevState => {
                let cardboard = prevState.cardboard;
                // cardboard[this.state.lastClicked.props.coordinates].notFlipped = !cardboard[this.state.lastClicked.props.coordinates].notFlipped;
                cardboard[card.props.coordinates].notFlipped = !cardboard[card.props.coordinates].notFlipped;

                setTimeout(() => {
                    this.flipBack(card);
                }, 1000);

                return {
                    cardboard
                }
            })
        } else {
            this.setState(prevState => {
                let cardboard = prevState.cardboard;
                cardboard[card.props.coordinates].notFlipped = !cardboard[card.props.coordinates].notFlipped;
                let lastClicked = card;
                return {
                    cardboard,
                    lastClicked
                }
            })
        }
    }

    flipBack(card) {
        this.setState(prevState => {
            let cardboard = prevState.cardboard;
            let disabled = false;
            cardboard[this.state.lastClicked.props.coordinates].notFlipped = !cardboard[this.state.lastClicked.props.coordinates].notFlipped;
            cardboard[card.props.coordinates].notFlipped = !cardboard[card.props.coordinates].notFlipped;
            let lastClicked = null;
            return {
                cardboard,
                lastClicked,
                disabled
            };
        });
    }

    hideCards(card) {
        this.setState(prevState => {
            let cardboard = prevState.cardboard;
            let disabled = false;
            cardboard[this.state.lastClicked.props.coordinates].isHidden = !cardboard[this.state.lastClicked.props.coordinates].isHidden;
            cardboard[card.props.coordinates].isHidden = !cardboard[card.props.coordinates].isHidden;
            let lastClicked = null;
            return {
                cardboard,
                lastClicked,
                disabled
            };
        });
    }

    levelSelection (levelSelection){
        this.setState({
            level:levelSelection
        })
    }

    render() {

        return (
            <div className="Game-main" disabled={this.state.disabled}>
                <Header gameStarted={this.state.gameStarted} levelSelection={this.levelSelection} score={this.state.score} time={this.state.time} />
                <Cardboard startButtonClicked={this.startButtonClicked} gameStarted={this.state.gameStarted} arrayOfCards={this.state.cardboard} onCardClick={this.onCardClick} />
            </div>
        )
    }
}

export default Game