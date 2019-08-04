import React, { Component } from "react";
import firebase from "../Utils/Firebase";

const myCollection = firebase.firestore().collection("test");

export default class Fbitem extends Component {
  handleChange = e => {
    this.props.item[e.target.name] = e.target.value;
    this.forceUpdate();
  };
  handleUpdate = () => {
    myCollection.doc(this.props.item.id).update({
      order: this.props.item.order,
      title: this.props.item.title,
      content: this.props.item.content
    });
  };
  handleDelete = () => {
    myCollection.doc(this.props.item.id).delete();
  };
  render() {
    const { page } = this.props;
    const { title, content, order, id } = this.props.item;

    return (
      <div>
        <br />
        <div>propsid: {id}</div>
        <div>Page: {page}</div>
        <div>
          order:{" "}
          <input name="order" value={order} onChange={this.handleChange} />
        </div>
        <div>
          title:{" "}
          <input name="title" value={title} onChange={this.handleChange} />
        </div>
        <input name="content" value={content} onChange={this.handleChange} />{" "}
        <br />
        <button onClick={this.handleUpdate}>Update</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}
