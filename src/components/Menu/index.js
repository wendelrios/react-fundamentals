import React from 'react'
import './menu.css'
import Logo from '../../assets/images/logo.png' 
import Button from '../Button'


function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="linguissaFlix"/>
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo video
      </Button>
    </nav>
  )
}

export default Menu