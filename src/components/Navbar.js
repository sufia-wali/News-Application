import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper black">
              <Link to="/" className="brand-logo" style={{fontWeight:"bolder"}}>The Revolution</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="business">Business</Link></li>
                <li><Link to="entertainment">Entertainment</Link></li>
                <li><Link to="general">General</Link></li>
                <li><Link to="health">Health</Link></li>
                <li><Link to="science">Science</Link></li>
                <li><Link to="sports">Sports</Link></li>
                <li><Link to="technology">Technology</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar





