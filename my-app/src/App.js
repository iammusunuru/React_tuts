import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list.js';
import Colors from './colors.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      item: [],
      colorSelected: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleColorSelected = this.handleColorSelected.bind(this);
  }

  handleColorSelected(color){
    this.setState({colorSelected: color});
  }


  handleInput(event){
    if (event.charCode==13)
    {
      let temp_arr = this.state.item;
      temp_arr.push(event.target.value);
      this.setState({item: temp_arr});
    }
  }

  render() {
    return (
      <div className="container">
        <div className="left-div">
            <div className="top-left-div">
              <input type="text" placeholder="enter a color name" onKeyPress={this.handleInput}/>
            </div>
            <div className="bottom-left-div">
              <List todo_list={this.state.item} onColorSelected={this.handleColorSelected}></List>
            </div>
        </div>
        <div className="right-div">
        <Colors color_selected={this.state.colorSelected}/>
        </div>
      </div>
    );
  }
}

export default App;
