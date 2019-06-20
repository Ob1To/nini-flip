import React from 'react';
import './../../styles/Dropdown.css';


class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialTextValue: "Choose Level"
    };

    // this.showDropdownMenu = this.showDropdownMenu.bind(this);
    // this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.levelSelection = this.props.levelSelection.bind(this);
  };

  // showDropdownMenu() {
  //   this.setState({ displayMenu: true });
  // }

  // hideDropdownMenu() {
  //   this.setState({ displayMenu: false });
  // }

  // levelSelection(level) {
  //   this.levelSelection(level);
  // }

  render() {
    return (
      <div className="dropdown">
        <div className="button"> {this.state.initialTextValue} </div>
        <ul onClick={this.props.levelSelection()}>
          <li><a >Easy - 8 Cards</a></li>
          <li><a >Medium - 12 Cards</a></li>
          <li><a >Hard - 16 Cards</a></li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;