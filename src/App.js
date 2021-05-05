import React, { Component } from 'react';
import './App.css';
import ListItem from './Listitem'

class MyList extends Component {
  render() {
    return(
      <div>
        <h1>Things I should stop Procrastinating</h1>
        <ul>
          <ListItem doThis="buy ice cream"/>
        </ul>
      </div>
    )
  }
}

export default MyList