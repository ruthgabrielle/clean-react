import React, { memo } from "react";
import Styles from "./login-header-styles.scss";
import Logo from "../../components/logo/logo";

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Survey for Developers</h1>
    </header>
  );
};
export default memo(Header);
