import React, { Component } from 'react'
import AboutMe from './AboutMe.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Header from './Header.js'

class HomePage extends Component {

  componentDidMount() {
   window.scrollTo(0, 0);
 }

  render(){
    return (
      <div>
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    )
  }
}

export default HomePage
