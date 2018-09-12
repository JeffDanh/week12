import React, { Component } from 'react';

class MyState extends Component{
    constuctor(props){
        super(props);
        this.state = {
            txt: "hello world",
            count: 1
        }
    }
    update(e){
        this.setState({txt: e.target.value});
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.update.bind(this)}></input>
                {/* {this.state.count} */}
                {/* {this.state.txt.map(t => t)} */}
            </div>
        )
    }
}

export default MyState;