import React from "react";
import Styles from "./login-styles.scss";
import { Footer, Input, FormStatus, LoginHeader } from "../../components/";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input placeholder="Enter your e-mail" type="email" name="email" />
        <Input
          placeholder="Enter your passoword"
          type="password"
          name="password"
        />
        <button type="submit" className={Styles.submit}>
          {" "}
          Enter{" "}
        </button>
        <span className={Styles.link}>Sign up</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  );
};

export default Login;
