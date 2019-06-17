import React, { Component } from "react";
import "./AdminLogin.css";
const adminInfo = { userName: "Oliver", password: "sixes" };

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleLogin =() =>{
    this.props.appState.adminToggle()
    this.props.appState.toggleLogin()
    this.props.appState.handleChange("adminConsole")
  }
  authentification = () => {
      var userGood = false
      var passGood = false
      this.state.userName === adminInfo.userName?
        userGood=true : userGood = false
            
    this.state.password ===adminInfo.password?
    passGood=true :passGood = false
    userGood && passGood ?  this.handleLogin() : alert("Nope")
           
  }
  handleSubmit = (e) =>{
      e.preventDefault()
      this.authentification();
      this.setState({
          userName:"",
          password:""
      })

  }
  render() {
    return (
      <div className="AdminLogin">
        <form onSubmit={this.handleSubmit}>
          <input
            id="userName"
            type="name"
            value={this.state.userName}
            placeholder="UserName"
            onChange={this.handleChange}
          />
          <input
            id="password"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default AdminLogin;
