import { Avatar } from '@mui/material'
import React from 'react'
import "./Menu.scss"


const Menu = ({avatar, Icon, name}) => {
  return (
    <div className='menu'>
    {Icon && <Icon  className = "menu__icon" />}
    {avatar && <Avatar  src = {avatar}/>}
    <h1>{name}</h1>
    </div>
  )
}

export default Menu