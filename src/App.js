import React, { Component } from 'react';
import Display from './Display';

//class based component
class App extends Component {
    //state is a js object, where data resides
    state = {
        firstName: 'alina',
        lastName: 'joe',
        age: 30,
        city: 'pune',
        employeeData: [{}, {}, {}]
    }

    //it is a property for App Component
    handleClick = () => {
        //to update state
        //pre-defined method to update State
        this.setState({
            city: 'hyderabad',
            age: 35
        });
    }

    //whenever state changes, render method is called again(re-rendering happens)
    render() {
        let gst = 18;
        return (
            //jsx
            //this is referring to App
            <div>
                <p>My name is {this.state.firstName} and age is {this.state.age}, lives in {this.state.city}.</p>
                <p>{gst}</p>
                <button onClick={this.handleClick}>Click</button>
                <Display />
            </div>
        )
    }
}

export default App;


//js code
// class University {
//     age = 20;
//     constructor() {
//     }

//     display() {
//         console.log(this.age);

//     }
// }

{/* <button onclick="add()">Click</button> */ }


//task
//create an array of object and display data (try map here)
//create a object and update data(property) in it and display data
//diffing algorithm
//recoincilation process
