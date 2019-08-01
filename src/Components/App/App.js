import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Router from "../Router";
import Dropdown from "../Dropdown/Dropdown";
import AdminLogin from "../AdminLogin/AdminLogin";
import firebase from '../../Utils/Firebase'
import DLFirebase from "./DLFirebase";

function App() {
  const [page, changePage] = React.useState("Home");
  const [drawer, toggleDrawer] = React.useState(false);
  const [adminLogin, togglesLogin] = React.useState(false);
  const [adminLoggedIn, toggleAdmin] = React.useState(false);
  const [user, updateUser ] = React.useState("")
  const [userInfo, updateUserInfo ] =React.useState("")
  const [fireDBinfo, updatefireDBinfo ] = React.useState([])
 

  function handleChange(newPage) {
    changePage(newPage);
  }
  function handleDrawer() {
    toggleDrawer(!drawer);
  }
  function toggleLogin() {
    togglesLogin(!adminLogin);
  }
  function adminToggle() {
    toggleAdmin(!adminLoggedIn);
  }
  const appState = {
    handleChange: handleChange,
    currentPage: page,
    handleDrawer: handleDrawer,
    adminLogin: adminLogin,
    toggleLogin: toggleLogin,
    adminLoggedIn: adminLoggedIn,
    adminToggle: adminToggle,
    user:user,
    userInfo:userInfo
  };
  return (
    <div className="App">
      <div className="Header">
<DLFirebase fireDBinfo={fireDBinfo} updatefireDBinfo={updatefireDBinfo} />
        {console.log(fireDBinfo)}
        <Header appState={appState} />
      </div>
      {drawer ? <Dropdown appState={appState} /> : <div />}
      {adminLogin ? <AdminLogin appState={appState} /> : <div />}
      <div className="App-Body">
        <Router appState={appState} />
      </div>
    </div>
  );
}

export default App;
