import React, { Component } from 'react';

class Hello extends Component {
    render(){
        var friends = [
            {name: "Jeff", age: 22}, 
            {name: "Omar", age: 22},
            {name: "Ben", age: 25},
            {name: "Mason", age: 24}
        ]
        return(
            {friends.map(function(e, f){
                return(
                    <li key={f}>Hello, {e.name}</li>
                )
            })}
        );
    }
}

export default Hello;