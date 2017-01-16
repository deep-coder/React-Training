/**
 * Created by deepcoder on 16/01/17.
 */
import React from 'react';
let clearTimer;
class ClockComponent extends React.Component{
  constructor(props){
    super(props);
    const currentTime = new Date();
    this.state={
      hours:currentTime.getHours(),
      minutes:currentTime.getMinutes(),
      seconds:currentTime.getSeconds(),
      ampm:currentTime.getHours()>12? 'pm':'am'
    };

  }
  componentWillMount(){
    this.updateClock();
  }

  componentDidMount(){
    clearTimer=setInterval(()=>{
      this.updateClock();
    },1000)
  }

  componentWillUnmount(){
    clearInterval(clearTimer);
  }

  updateClock =() =>{
    const currentTime = new Date();
    this.setState({
      hours:currentTime.getHours(),
      minutes:currentTime.getMinutes(),
      seconds:currentTime.getSeconds(),
      ampm:currentTime.getHours()>12? 'pm':'am'
    });
  }

  render(){
    const {hours,minutes,seconds,ampm} = this.state; //ES6 Destructuring
    return(
      <div className='clock-component'>
        <label>{hours==0?12:(hours>12)?hours-12:hours}:{minutes>9?minutes:`0${minutes}`}:{seconds>9?seconds:`0${seconds}`} {ampm}</label>
      </div>
    );
  }
}

export default ClockComponent;