import React from "react";
import classes from "./Toggle.module.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className={classes.togglePage}>
      <img src={Sun} alt="" className={classes.toggleIcon} />
      <img src={Moon} alt="" className={classes.toggleIcon} />
      <div
        className={classes.toggleButton}
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}

export default Toggle;
