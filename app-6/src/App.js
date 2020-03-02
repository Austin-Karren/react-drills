import React, { Component } from 'react';
import './App.css'
import Todo from './Todo'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { list: [], input: ''}
  }

  handleInput = (value) => this.setState({input: value});
  handleAddTask = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    });
  }
  handleEnterKey = (event) => {
    if (event.key === 'Enter'){
      console.log('Enter key hit')
      this.handleAddTask(event.target.value);
    }
  }

  render(){
    let displayList = this.state.list.map((element, index) => {
      return <Todo key={index} task={element}></Todo>
    })
    return(
      <div className="App">
        <h1>Todo List</h1>
        <div>
        <input 
        type="text" 
        placeholder="Enter new task :)" 
        value={this.state.input} 
        onChange={e => this.handleInput(e.target.value)}
        onKeyPress={e => this.handleEnterKey(e)}
        />
        <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br/>
        {displayList}
      </div>
    )
  }

}

export default App;