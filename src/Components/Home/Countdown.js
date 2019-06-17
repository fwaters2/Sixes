import React, { Component } from "react";



class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regDate: "July 4, 2019 03:24:00",
      days: 0,
      hoursTens: 0,
      hours: 0,
      minutesTens: 0,
      minutes: 0,
      secondsTens: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount(){
    clearInterval()
  }
  tick() {
    const regSecs = Date.parse(new Date(this.state.regDate));
    const time = (regSecs - Date.parse(new Date()));
    const seconds = Math.floor(time/1000)%10
    const secondsTens = Math.floor(time/10000)%6
    const minutes = Math.floor(time/60000)%10
    const minutesTens = Math.floor(time/600000)%6
    const hours = Math.floor(time / 60 / 60 / 1000) % 10
    const hoursTens = Math.floor(time / 60 / 60 / 1000) % 3
    const days = Math.floor(time / 1000 / 60 / 60 / 24)
    this.setState({
      days: days,
      hoursTens: hoursTens,
      hour: hours,
      minutesTens: minutesTens,
      minutes: minutes,
      secondsTens: secondsTens,
      seconds: seconds
    });
  }

  render() {
    return (
      <div>
        {this.state.days} days, {this.state.hoursTens}{this.state.hours}:{this.state.minutesTens}
        {this.state.minutes}.{this.state.secondsTens}
        {this.state.seconds}
      </div>
    );
  }
}
export default Countdown;
