import React, { Component } from 'react'
// import Dropdown from './Dropdown'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './../../styles/Level-main.css'

const options = [
    { value: '8', label: 'Easy'},
    { value: '12', label: 'Medium'},
    { value: '16', label: 'Hard'},
    { value: '20', label: 'Very Hard'},
    { value: '24', label: 'Insane'}
]

class Level extends Component {
    constructor(props) {
        super(props);
        this.levelSelection = this.props.levelSelection.bind(this)
        this._onSelect = this._onSelect.bind(this)

        this.state = {
            dropdownLabel: "Easy"
        }

    }
    _onSelect(option) {
        this.levelSelection(parseInt(option.value));

        this.setState({
            dropdownLabel:option.label
        })
    }

    render() {
        return (
            <div className='Level-main'>
                <div className='choose-level'>Choose You Level</div>
                <Dropdown disabled={this.props.gameStarted} options={options} value={this.state.dropdownLabel} onChange={this._onSelect} placeholder="Select an option" />
            </div>
        )
    }
}

export default Level