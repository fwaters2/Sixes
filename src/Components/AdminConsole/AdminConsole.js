import React, { Component } from 'react'
import './AdminConsole.css'
import AdminUpdate from './AdminUpdate'

class AdminConsole extends Component{
    handleClick=()=>{
        this.props.appState.adminToggle()
        this.props.appState.handleChange("Home")
    }
    render(){
        return(
            <div className="Admin-Container">
                <div className="Admin-Title">Welcome Admin!</div>
                <div className="Admin-Items">Things you can do:
                    <button>Post Updates</button>
                    <div className="Admin-Item">Update Schedule</div>
                    <button onClick={this.handleClick}>Logout</button>
                </div>
                <AdminUpdate appState={this.props.appState} />
            </div>
        )
    }
}
export default AdminConsole