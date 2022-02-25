import React from "react";
import classes from "./Project.module.css";

function Project(props) {
  return (
    <div className={classes.projectPage}>
      <div className={classes.projectBrowser}>
        <div className={classes.projectCircle}></div>
        <div className={classes.projectCircle}></div>
        <div className={classes.projectCircle}></div>
      </div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.img} alt="" className={classes.projectImg}></img>
      </a>
    </div>
  );
}

export default Project;
