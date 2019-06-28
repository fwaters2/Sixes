import React, { Component } from "react";
var myVar;


class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regDate: "July 4, 2019 13:24:00",
      days: 0,
      hoursTens: 0,
      hour: 0,
      minutesTens: 0,
      minutes: 0,
      secondsTens: 0,
      seconds: 0,
     countdown: null
    };
  }

  componentDidMount=()=> {
    
    myVar = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount(){
    clearInterval(myVar)
  }
  tick() {
    const regSecs = Date.parse(new Date(this.state.regDate));
    const time = (regSecs - Date.parse(new Date()));

    const seconds = time/1000
    const secondsOnes = seconds%10
    const secondsTens = Math.floor(seconds / 10)%6

    const minutes = Math.floor(seconds / 60)
    const minutesOnes = minutes%10
    const minutesTens = Math.floor(minutes / 10)%6

    const hours = Math.floor(minutes / 60)
    const hoursOnes = (hours % 24) % 10
    const hoursTens = Math.floor((hours % 24) /10 ) %3
    const days = Math.floor(hours / 24)
    
    this.setState({
      days: days,
      hoursTens: hoursTens,
      hour: hoursOnes,
      minutesTens: minutesTens,
      minutes: minutesOnes,
      secondsTens: secondsTens,
      seconds: secondsOnes
    });
  }

  render() {
    return (
      <div>
        {this.state.days} days, {this.state.hoursTens}{this.state.hour}:{this.state.minutesTens}
        {this.state.minutes}.{this.state.secondsTens}
        {this.state.seconds}
      </div>
    );
  }
}
export default Countdown;
