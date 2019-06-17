import React, { Component } from "react";
import Firestore from "./../../Utils/Firebase";

class AdminUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      Subject: "",
      Text: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const db = Firestore.firestore();
    db.collection("Updates").add(this.state);
    this.props.appState.handleChange("Updates")
  };
  render() {
    return (
      <div className="Updates">
        <div className="Updates-Title">Add an Update</div>
        <form onSubmite={this.handleSubmit}>
          <div className="Updates-Subject">
            <label>Subject:</label>
            <input
              id="Subject"
              onChange={this.handleChange}
              value={this.state.Subject}
            />
          </div>
          <div className="Updates-Text">
            <label>New info:</label>
            <textarea
              id="Text"
              onChange={this.handleChange}
              placeholder="What's the update?"
              value={this.state.Text}
            />
          </div>
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}
export default AdminUpdate;
