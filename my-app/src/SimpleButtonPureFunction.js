/**
 * Created by deepcoder on 17/01/17.
 */
import React from 'react';

//Example for showing how pure component works
const SimplePureBtn =({label}) =>{
  const btnClick = () =>{
    alert('Btn Clicked');
  }
  return(
  <div>
    <button onClick={btnClick}>{label}</button>
  </div>
  )
}
SimplePureBtn.propTypes={
  label: React.PropTypes.string
}
export default SimplePureBtn;