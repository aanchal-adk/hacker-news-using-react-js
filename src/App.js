import React, { Component } from 'react';
import NavBar from './components/navBar';
import New from './components/new';
import Show from './components/show';
import Ask from './components/ask';
import Job from './components/jobs';
import Top from './components/top'
import {BrowserRouter, Router, Route, Link,Switch} from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App clearfix"> 
        <BrowserRouter>
    <div>
      
      <NavBar/>
       <Route exact path = '/' component = {Top}/> 
      {/* <Route path = '/home' component = {NavBar}/> */}
      <Route path = '/new' component = {New}/>
      <Route path = '/show' component = {Show}/>
      <Route path = '/ask' component = {Ask}/>
      <Route path = '/jobs' component = {Job}/>
    </div>
  </BrowserRouter>
      </div>
    );
  }
}

export default App;
