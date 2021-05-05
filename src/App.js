import React, { Component } from 'react';
import './App.css';
import ListItem from './Listitem'

class MyList extends Component {
  render() {
    const phrases = ['ice cream', 'dinosaurs', 'hobbits']
    const phrasesArray = phrases.map(( phrase, index) => {
      return <ListItem key={index} doThis={phrase}/>
    })
    return(
      <div>
        <h1>Things I should stop Procrastinating</h1>
        <ul>
          <ListItem doThis="buy ice cream"/>
          {phrasesArray}
        </ul>
      </div>
    )
  }
}

export default MyList