import React, { Component } from 'react';
import './App.scss';
import User from './components/User.js';
import AboutMe from './components/AboutMe.js';
import Education from './components/Education.js';

class App extends Component {
  render() {
    return <main className="app">
    <User />
    <AboutMe />
    <h2 className="education-title">EDUCATION</h2>
    <Education />
    </main>;
  }
}
export default App;
