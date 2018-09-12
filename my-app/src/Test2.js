import React, { Component } from 'react';


class Test2 extends Component {
    render(){
        let students = ['Matt', 'Eric', 'Traci',];
        return(
            <div>
                {this.props.txt}
                <ul>
                    {students.map(student => {
                        return <li key={student}>{student}</li>;
                    })}
                </ul>
            </div>
        )
    }
}

Test2.propTypes = {
    txt: propTypes.string,

}
export default Test2;