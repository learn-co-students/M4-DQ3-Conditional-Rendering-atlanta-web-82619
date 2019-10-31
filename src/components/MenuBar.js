import React from 'react'

const MenuBar = ({changeSelected, selected}) => {
  const itemClicked = (e) => {
    changeSelected(e.target.id)
  }

  return (
    <div className="ui four item menu">
      <a onClick={itemClicked} className={"item" + (selected === "profile" ? " active" : "")} id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a onClick={itemClicked} className={"item" + (selected === "photo" ? " active" : "")} id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={itemClicked} className={"item" + (selected === "cocktail" ? " active" : "")} id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={itemClicked} className={"item" + (selected === "pokemon" ? " active" : "")} id="pokemon"> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )
}

export default MenuBar
