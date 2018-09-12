import React, { Component } from 'react';
import Products from './Products';
import Test2 from './Test2';
import MyState from './MyState';

class App extends Component {
  render() {
    
    console.log(this.props.name);

    return (
      <div>
        {this.props.name}
        <Products name={this.props.name} />
        <Test2 txt="txt test" cat={1} />
        <MyState />
      </div>
    );
  }
}

export default App;
