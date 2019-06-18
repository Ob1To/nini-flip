import React, { Component } from 'react'
import Cardboard from './Cardboard'
import Header from './Header'
import './../styles/Game-main.css'


class Game extends Component {
    constructor(props) {
        super(props)

        this.onCardClick = this.onCardClick.bind(this)

        this.imgSourceArray = [
            '/images/1.jpg',
            '/images/2.jpg',
            '/images/3.jpg',
            '/images/4.jpg',
            '/images/5.jpg',
            '/images/6.jpg',
            '/images/7.jpg',
            '/images/8.jpg'
            // '/images/9.jpg',
            // '/images/10.jpg',
            // '/images/11.jpg',
            // '/images/12.jpg'
        ];
        this.imgSourceArray = this.imgSourceArray.concat(this.imgSourceArray);

        this.state = {
            isHidden: false,
            lastClicked: null,
            currentGameboard: [[]],
            time: 0,
            score: 0,
            level: 0
        }


    }

    onCardClick(card) {
        this.setState()
        // console.log(card.props.imageAddress);
        // console.log(card.state.notFlipped); // if true it is flipped

        // if (this.state.lastClicked !== null &&
        //     this.state.lastClicked.props.imageAddress === card.props.imageAddress) {
            
        // }

        // this.setState({
        //     lastClicked: card
        // })


    }

    componentDidMount() {
        this.setState({
            arrayImages: this.generateArrayOfImages
        })
    }

    render() {

        return (
            <div>
                <Header level={this.state.level} score={this.state.score} time={this.state.time} />
                <Cardboard isHidden={this.state.isHidden} currentGameboard={this.state.currentGameboard} arrayImages={this.imgSourceArray} onCardClick={this.onCardClick} />
            </div>
        )
    }
}

export default Game