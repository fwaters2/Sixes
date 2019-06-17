import React from "react";

import "./App.css";
import Header from "../Header/Header";
import Router from "../Router";
import Footer from "../Footer/Footer";
import Dropdown from "../Dropdown/Dropdown";
import AdminLogin from "../AdminLogin/AdminLogin";

function App() {
  const [page, changePage] = React.useState("Home");
  const [drawer, toggleDrawer] = React.useState(false);
  const [adminLogin, togglesLogin] = React.useState(false);
  const [adminLoggedIn, toggleAdmin] = React.useState(false);

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
    adminToggle: adminToggle
  };
  return (
    <div className="App">
      <div className="Header">
        <Header appState={appState} />
      </div>
      {drawer ? <Dropdown appState={appState} /> : <div />}
      {adminLogin ? <AdminLogin appState={appState} /> : <div />}
      <div className="Body">
        <Router appState={appState} />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
