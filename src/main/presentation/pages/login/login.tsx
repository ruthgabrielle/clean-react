import React from "react";
import Styles from "./login-styles.scss";
import Header from "../../components/login-header/login-header";
import Footer from "../../components/footer/footer";
import Input from "../../components/input/input";
import FormStatus from "../../components/form-status/form-status";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
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
