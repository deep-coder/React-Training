/**
 * Created by deepcoder on 17/01/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//Example Using Refs
class RefsInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: ''
    }
  };

  updateState =(e) => {
    this.setState({data: e.target.value});
  }

  clearInput=()=> {
    this.setState({data: ''});
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (
      <div>
        <input value = {this.state.data} onChange = {this.updateState}
               ref = "myInput"></input>
        <button onClick = {this.clearInput}>CLEAR</button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}

export default RefsInput;