//import react
import React, { Component } from 'react';

//most simple way to create a component
//using arrow function to create function in js
// const HelloWorld = (props) => (
//   //must have one single root component (ex: div)
//   <div>
//     <h2>Hello <em>{props.name}</em></h2>
//   </div>
// );

//class based component
class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h2>Hello <em>{this.props.name}</em></h2>
      </div>
    );
  }
}

//this says what component to export from this file
export default HelloWorld;
