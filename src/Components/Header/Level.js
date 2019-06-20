import React, { Component } from 'react'
// import Dropdown from './Dropdown'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './../../styles/Level-main.css'

const options = [
    { value: 8, label: 'Easy', className: 'myOptionClassName' },
    { value: 12, label: 'Medium', className: 'myOptionClassName' },
    { value: 16, label: 'Hard', className: 'myOptionClassName' }
]
const defaultOption = options[0]

class Level extends Component {
    constructor(props) {
        super(props);
        this.levelSelection = this.props.levelSelection.bind(this)
        this._onSelect = this._onSelect.bind(this)

    }
    _onSelect(option) {
        this.levelSelection(option.value)
    }

    render() {
        return (
            <div className='Level-main'>
                <div className='choose-level'>Choose You Level</div>
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            </div>
        )
    }
}

export default Level