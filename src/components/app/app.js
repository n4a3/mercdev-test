import React from "react";
import { connect } from "react-redux";

import AuthForm from "../auth-form";
import UserInfo from "../user-info";

import "../../fonts/fonts.css";
import "./app.css";

import logo from "./img/w-mercury-development.svg";

const App = props => {
  return (
    <main className="user-page">
      <img src={logo} alt="Mercury Development" className="logo" />
      <div className="user-box">
        {props.userData ? <UserInfo userData={props.userData} /> : <AuthForm />}
      </div>
    </main>
  );
};

const mapStateToProps = ({ user: { userData } }) => {
  return { userData };
};

export default connect(mapStateToProps)(App);
