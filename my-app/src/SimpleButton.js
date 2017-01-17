/**
 * Created by deepcoder on 17/01/17.
 */
import React from 'react';

//Using Class Based
// How props are passed to Children
class SimpleButton extends React.Component{
  constructor(props){
    super(props);
  }

  buttonClick = () =>{
    alert('Button Clicked');
  }
  render(){
    return(
      <div>
        <button onClick={this.buttonClick}>{this.props.label}</button>
      </div>
    )
  }
}

SimpleButton.propTypes={
  label: React.PropTypes.string
}

export default SimpleButton;