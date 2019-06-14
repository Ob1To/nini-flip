import React, { Component } from 'react'
import './../styles/Cardboard-main.css'
import Card from './Card'

class Cardboard extends Component {
    render() {

        let level = Number(this.props.level);
        let cardArray = [];

        let imgSourceArray = [
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

        imgSourceArray = imgSourceArray.concat(imgSourceArray);

        for (let i = 0; i < level / 4; i++) {
            cardArray[i] = [];
        }

        for (let i = 0; i < level / 4; i++) {
            for (let y = 0; y < level / 4; y++) {
                cardArray[i][y] = <Card imageAddress = {urlGenerator(imgSourceArray)}/>;
            }
        }
        
        return (
            <div className='Cardboard-main'>
                {cardArray}
            </div>
        )
    }
}

const urlGenerator = function(imgSourceArray) {
    
    while(imgSourceArray.length) {
        var index = Math.floor( Math.random()*imgSourceArray.length );
        let item = imgSourceArray[index];
        imgSourceArray.splice( index, 1 );
        return item
    }
}

export default Cardboard
