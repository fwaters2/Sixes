import React, { Component } from "react";
import "./AdminLogin.css";
import firebase from '../../Utils/Firebase'


class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state.email)
  };
  handleLogin =() =>{
    this.props.appState.adminToggle()
    this.props.appState.toggleLogin()
    this.props.appState.handleChange("adminConsole")
  }

  handleSubmit = (e) =>{
      e.preventDefault()
      firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(
        console.log("successful")
      ).catch(console.log("some kind of error"))
      
      this.setState({
          email:"",
          password:""
      })

  }
  render() {
    return (
      <div className="AdminLogin">
        <form onSubmit={this.handleSubmit}>
          <input
            id="email"
            type="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.handleChange}
          />
          <input
            id="password"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          {console.log(firebase.auth().currentUser?true:false)}
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default AdminLogin;
