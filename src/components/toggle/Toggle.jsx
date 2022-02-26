import React from "react";
import classes from "./Toggle.module.css";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className={classes.togglePage}>
      <img src={sun} alt="" className={classes.toggleIcon} />
      <img src={moon} alt="" className={classes.toggleIcon} />
      <div
        className={classes.toggleButton}
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}

export default Toggle;
