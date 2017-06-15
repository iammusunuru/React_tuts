import React, { Component } from 'react';
import './list.css';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      colorSelected: null
    };
    this.handleOptionSelected = this.handleOptionSelected.bind(this);
  }

handleOptionSelected(event){
  this.props.onColorSelected(event.target.value);
}



  render() {
    return (
      <ul>
      {this.props.todo_list.map((todo, index)=>{
        return (<li key={index}><input type="radio" name="color" value={todo}
         onChange={this.handleOptionSelected}/>{todo}</li>)
      })}
      </ul>
    );
  }
}

export default List;
