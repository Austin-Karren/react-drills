import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      foods: ['apple', 'bread', 'sushi', 'cheese'],
      filtered: ''
     };
  }

  handleChange(val) {
    this.setState({filtered: val})
  }

  render() { 
    let filtered = this.state.foods.filter((element) => {
        return element.includes(this.state.filtered);
      }).map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return ( 
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type='text'/>
        {filtered}
      </div>
     );
  }
}
 
export default App;