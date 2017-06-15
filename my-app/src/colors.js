import React, { Component } from 'react';
import './colors.css';

class colors extends Component{
  render() {
    let style = {
      "background-color": this.props.color_selected
    }
    return (
      <div className="colors-div" style={style}></div>
    );
  }
}

export default colors;
