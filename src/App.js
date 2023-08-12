import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import ShoeItem from './Component/ShoeItem';




export default class App extends Component {
  render() {
    return (
      <div>
     <NavBar/>
     <ShoeItem/>
      </div>
    )
  }
}



