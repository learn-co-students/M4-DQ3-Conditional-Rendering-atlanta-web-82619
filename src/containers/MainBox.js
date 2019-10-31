import React, {Component} from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends Component {
  state = {
    selected: "profile"
  }

  changeSelected = (selected) => {
    this.setState({
      selected: selected
    })
  }

  render() {
    let detailsToDisplay

    switch (this.state.selected) {
      case "profile":
        detailsToDisplay = <Profile />
        break;
      case "photos":
        detailsToDisplay = <Photos />
        break;
      case "cocktails":
        detailsToDisplay = <Cocktails />
        break;
      case "pokemon":
        detailsToDisplay = <Pokemon />
        break;
      default:
        detailsToDisplay = null
        break;
    }

    return (
      <div>
        <MenuBar selected={this.state.selected} changeSelected={this.changeSelected}/>
        {detailsToDisplay}
      </div>
    )
  }
}

export default MainBox
