import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchLogin } from "../../actions";
import withMercdevService from "../hoc/withMercdevService";
import { compose } from "../../utils";

import "./auth-form.css";

const Error = ({ text }) => {
  return (
    <div className="error-indicator">
      <span>{`${text}`}</span>
    </div>
  );
};

const AuthForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const login = e.target[0].value;
    const pass = e.target[1].value;
    if (login && pass) {
      props.fetchLogin(login, pass);
    }
  };

  return (
    <div
      className={`auth ${props.error ? "error" : ""}`}
      onSubmit={handleSubmit}
    >
      <h1>Log In</h1>
      <form>
        <input type="email" placeholder="E-Mail" />
        <input type="password" placeholder="Password" />

        {props.error ? <Error text={props.error} /> : null}

        <button>Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ user: { error } }) => {
  return { error };
};

const mapDispatchToProps = (dispatch, { mercdevService }) => {
  return bindActionCreators(
    {
      fetchLogin: fetchLogin(mercdevService)
    },
    dispatch
  );
};

export default compose(
  withMercdevService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AuthForm);
