import React from 'react'
import firebase from "../Utils/Firebase";
const myCollection = firebase.firestore().collection("adminUpdates");

export default function NewItem(props) {
    const [values, changeValues] = React.useState({
        page:"",
        order:"",
        title:"",
        content:""
    })

    const handleChange = e =>{
        changeValues({
            ...values,
            [e.target.name]: e.target.value
          });
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
        myCollection.add({
            title: values.title,
            page: props.currentPage,
            content: values.content,
            order: values.order
          });
    }
    return (
        <form onSubmit={handleSubmit}>
        <input
        name="order"
          placeholder="order"
          value={values.order}
          onChange={handleChange}
        />
        <input
        name="title"
          placeholder="title"
          value={values.title}
          onChange={handleChange}
        />
        <textarea
        name="content"
          placeholder="content"
          value={values.content}
          onChange={handleChange}
        /><br/>
        <button onClick={handleSubmit}>Add</button>  
        </form>
    )
}
