import React, { Component } from 'react'
import Cardboard from './Cardboard'
import Header from './../Header/Header'
import './../../styles/Game-main.css'

const allCardsArray = [
    { key: 0, isHidden: false, notFlipped: true, imageAddress: "/images/1.jpg" },
    { key: 1, isHidden: false, notFlipped: true, imageAddress: "/images/1.jpg" },
    { key: 2, isHidden: false, notFlipped: true, imageAddress: "/images/2.jpg" },
    { key: 3, isHidden: false, notFlipped: true, imageAddress: "/images/2.jpg" },
    { key: 4, isHidden: false, notFlipped: true, imageAddress: "/images/3.jpg" },
    { key: 5, isHidden: false, notFlipped: true, imageAddress: "/images/3.jpg" },
    { key: 6, isHidden: false, notFlipped: true, imageAddress: "/images/4.jpg" },
    { key: 7, isHidden: false, notFlipped: true, imageAddress: "/images/4.jpg" },
    { key: 8, isHidden: false, notFlipped: true, imageAddress: "/images/5.jpg" },
    { key: 9, isHidden: false, notFlipped: true, imageAddress: "/images/5.jpg" },
    { key: 10, isHidden: false, notFlipped: true, imageAddress: "/images/6.jpg" },
    { key: 11, isHidden: false, notFlipped: true, imageAddress: "/images/6.jpg" },
    { key: 12, isHidden: false, notFlipped: true, imageAddress: "/images/7.jpg" },
    { key: 13, isHidden: false, notFlipped: true, imageAddress: "/images/7.jpg" },
    { key: 14, isHidden: false, notFlipped: true, imageAddress: "/images/8.jpg" },
    { key: 15, isHidden: false, notFlipped: true, imageAddress: "/images/8.jpg" },
    { key: 16, isHidden: false, notFlipped: true, imageAddress: "/images/9.jpg" },
    { key: 17, isHidden: false, notFlipped: true, imageAddress: "/images/9.jpg" },
    { key: 18, isHidden: false, notFlipped: true, imageAddress: "/images/10.jpg" },
    { key: 19, isHidden: false, notFlipped: true, imageAddress: "/images/10.jpg" },
    { key: 20, isHidden: false, notFlipped: true, imageAddress: "/images/11.jpg" },
    { key: 21, isHidden: false, notFlipped: true, imageAddress: "/images/11.jpg" },
    { key: 22, isHidden: false, notFlipped: true, imageAddress: "/images/12.jpg" },
    { key: 23, isHidden: false, notFlipped: true, imageAddress: "/images/12.jpg" }
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
            gameStarted: true,
            cardboard: this.generateCardboard(prevState)
        }))
    }

    generateCardboard(prevState) {

        let currentGameCardsArray = allCardsArray.filter(value => value.key < prevState.level);
        currentGameCardsArray = shuffle(currentGameCardsArray);
        return currentGameCardsArray;

        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            let coordinates = 0;
            array.map(v => v.coordinates = coordinates++)
            return array;
        }

    }

    onCardClick(card) {
        if (this.state.disabled) {
            return;
        }

        if (this.state.lastClicked !== null && card !== null) {
            if (this.state.lastClicked === card) {
                return;
            } else {
                this.setState({
                    disabled: true
                })
            }
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

    levelSelection(levelSelection) {
        this.setState({
            level: levelSelection
        })
    }

    render() {

        return (
            <div className="Game-main" disabled={this.state.disabled}>
                <Header gameStarted={this.state.gameStarted} levelSelection={this.levelSelection} score={this.state.score} time={this.state.time} />
                <Cardboard startButtonClicked={this.startButtonClicked} gameStarted={this.state.gameStarted} arrayOfCards={this.state.cardboard} onCardClick={this.onCardClick} level={this.state.level} />
            </div>
        )
    }
}

export default Game