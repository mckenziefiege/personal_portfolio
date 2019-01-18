import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu.js'


class Header extends Component {

  render(){
    return (
      <div>
      <Link to='/'><h1 className="name-header">
        <span className="name-header-main">McKenzie Fiege</span>
        <span className="name-header-sub">Full Stack Web Developer</span>
      </h1></Link>
      <Menu />
      </div>
    )
  }
}

export default Header
