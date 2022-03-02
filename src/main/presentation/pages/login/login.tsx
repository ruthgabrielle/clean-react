import React from "react";
import Styles from "./login-styles.scss";
import Spinner from "../../components/spinner/spinner";
import Header from "../../components/login-header/login-header";
import Footer from "../../components/footer/footer";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
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
      <Footer />
    </div>
  );
};

export default Login;
