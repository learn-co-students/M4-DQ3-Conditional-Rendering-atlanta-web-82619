import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'


class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: "profile"
    }
  }

  handleChange = (e) => {

     this.setState({
       selectedItem: e.target.id
     })
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
   let detailsToDisplay ;

   if (this.state.selectedItem === "profile") {
    detailsToDisplay = <Profile />
  } else if (this.state.selectedItem === "photo") {
    detailsToDisplay = <Photos />
  } else if (this.state.selectedItem === "cocktail") {
    detailsToDisplay = <Cocktails />
  } else if (this.state.selectedItem === "pokemon") {
    detailsToDisplay = <Pokemon />
  }




    return (
      <div>
        <MenuBar handleChange={this.handleChange} selected={this.state.selectedItem} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
