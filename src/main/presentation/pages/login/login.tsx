import React from "react";
import Styles from "./login-styles.scss";
import Spinner from "../../components/spinner/spinner";
import Logo from "../../components/logo/logo";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <Logo />
        <h1>4Dev - Survey for Developers</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Enter your e-mail" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />{" "}
          <span className={Styles.status}>🔴</span>
        </div>
        <button type="submit" className={Styles.submit}>
          {" "}
          Enter{" "}
        </button>
        <span className={Styles.link}>Sign up</span>

        <div className={Styles.errorWrap}>
          <Spinner />
          <span className={Styles.error}> Error </span>
        </div>
      </form>
      <footer className={Styles.footer} />
    </div>
  );
};

export default Login;
