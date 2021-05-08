import React,{ Component } from 'react';
import './App.css';
import CalenderInput from './components/CalenderInput';
import Reminder from './components/Reminder';
class App extends Component {
  constructor() {
    super();
    this.reminderDate = 0;
    this.endtime = "";
    this.state = {
      input: "",
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  CalendarInput = (event) => {
    this.setState({input: event.target.value});
  }

  start = () => {
    if(this.state.input!=="") {
      this.reminderDate = new Date(this.state.input).getTime();
      this.endtime = new Date(this.state.input).toDateString();
      this.endtime = this.endtime.substring();
      this.setState({input: ""});
      this.getTodayTime();
    }
  }

  getTodayTime = () => {
    let today = new Date().getTime();

    let counter = this.reminderDate - today;
    if(counter<0) {
      this.endtime = "";
      this.setState({days: 0, hours: 0, minutes: 0, seconds: 0}, () => this.countDownEnd());
    }
    else {
      this.timer(counter);
    }
  }

  timer = (counter) => {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
      counter = counter- 1000;
      let days = Math.floor(counter / (24*60*60*1000));
      let hours = Math.floor((counter % (24*60*60*1000)) / (60*60*1000));
      let minutes = Math.floor((counter % (60*60*1000)) / (60*1000));
      let seconds = Math.floor((counter % (60*1000)) / (1000));
      this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds}, () => this.countDownEnd());
    }, 1000);
  }

  countDownEnd = () => {
    let {days, hours, minutes, seconds} = this.state;
    let sum = days + hours + minutes + seconds;
    if(!sum) {
      clearInterval(this.interval);
    }
  }

  render() {
    let {days, hours, minutes, seconds} = this.state;
    return (
      <div className="flex flex-column items-center justify-center " >
        <Reminder days={days} hours={hours} minutes={minutes} seconds={seconds} timeend={this.endtime}/>
        <div>
          <CalenderInput CalendarInput={this.CalendarInput} value={this.state.input} start={this.start}/>
        </div>
      </div>
    );
  }
}

export default App;