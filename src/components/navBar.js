import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
  
  render(){
    return(
      <div className = "nav-bar-style clearfix">
        <ul>
          <li><Link to = "/"><img className = "logo" src = {require("/home/aanchal/react-training/hacker-news/src/assets/logo.gif")}/></Link></li>
          <li><Link to = "/new">new</Link></li>
          <li><Link to = "/show">show</Link></li>
          <li><Link to = "/ask">ask</Link></li>
          <li><Link to = "/jobs">jobs</Link></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;