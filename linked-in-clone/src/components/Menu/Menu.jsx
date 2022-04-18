import React from 'react'
import "./Menu.scss"

const Menu = ({Icon, name}) => {
  return (
    <div className='menu'>
    {Icon && <Icon  className = "menu__icon" />}
    <h1>{name}</h1>
    </div>
  )
}

export default Menu