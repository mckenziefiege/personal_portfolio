import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Projects extends Component {

  render() {
    return (
      <div className="project-section">
        <h2 className="h2-headers">Projects</h2>
          <div className="project-container">
              <div className="project-card">
                <p className="project-title">Plant Diary</p>
                  <Link to="/plant-diary">
                    <img className="project-image" src="https://user-images.githubusercontent.com/38592156/49955133-1db73a00-fed0-11e8-94e8-0f9b46ac0451.png" height="300px"/>
                  </Link>
              </div>
            <br />
              <div className="project-card">
                <p className="project-title">Turbo Typing</p>
                  <Link to="/turbo-typing">
                    <img className="project-image" src="https://user-images.githubusercontent.com/38592156/49956937-72f54a80-fed4-11e8-8e18-efea50917fdc.png" height="300px"/>
                  </Link>
              </div>
            <br />
              <div className="project-card">
                <p className="project-title">Novel Finds</p>
                  <Link to="/novel-finds">
                    <img className="project-image" src="https://user-images.githubusercontent.com/38592156/49903782-4854b480-fe36-11e8-87c7-08d1befc9b04.png" height="300px"/>
                  </Link>
              </div>
          </div>
      </div>
    )
  }
}

export default Projects
