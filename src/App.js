import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './Components/HomePage.js'
import PlantDiary from './Components/PlantDiary.js'
import NovelFinds from './Components/NovelFinds.js'
import TurboTyping from './Components/TurboTyping.js'
import EventPlanner from './Components/EventPlanner.js'
import ExpandedAboutMe from './Components/ExpandedAboutMe.js'
import Resume from './Components/Resume.js'
import AlternateProjects from './Components/AlternateProjects.js'
import Footer from './Components/Footer.js'
import Contact from './Components/Contact.js'
import Menu from './Components/Menu.js'

class App extends Component {

  render() {
    return (
      <div>
      <Menu />
        <Switch>
          <Route path="/projects" component={AlternateProjects}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/event-planner" component={EventPlanner}/>
          <Route path="/about-me" component={ExpandedAboutMe}/>
          <Route path="/plant-diary" component={PlantDiary}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/novel-finds" component={NovelFinds}/>
          <Route path="/turbo-typing" component={TurboTyping}/>
          <Route path="/" component={HomePage}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
