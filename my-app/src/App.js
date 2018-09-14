import React, { Component } from 'react';
import Products from './Products';
import Test2 from './Test2';
import MyState from './MyState';
import EventHandling from './EventHandling';

class App extends Component {
  render() {
    
    let newName = this.props.name + "Jeff";

    return (
      <div>
        <EventHandling /> 
        {/* {newName}<br />
        {this.props.name} {this.props.lastName + 'Veronica'}
        <Products name={this.props.name} newName="Matt" /> */}

        {/* <Test2 txt="hello world" cat={1} /> */}

        {/* <MyState /> */}
        {/* {this.props.name}
        <Products name={this.props.name} />
        <Test2 txt="txt test" cat={1} />
        <MyState /> */}
      </div>
    );
  }
}

export default App;
