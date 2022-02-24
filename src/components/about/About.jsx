import React from "react";
import classes from "./About.module.css";
import webdev from "../../images/webDevelopment.jpg";
import award from "../../images/award.png";

function About() {
  return (
    <div className={classes.aboutPage}>
      <div className={classes.aboutLeft}>
        <div className={classes.aboutWrapperBg}></div>
        <div className={classes.aboutWrapper}>
          <img
            src={webdev}
            alt=""
            className={classes.aboutImg}
            width="704"
          ></img>
        </div>
      </div>

      <div className={classes.aboutRight}>
        <h1 className={classes.aboutTitle}>About Me</h1>
        <p className={classes.aboutSub}>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className={classes.aboutDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className={classes.award}>
          <img src={award} alt="" className={classes.aboutAwardImage} />
          <div className={classes.awardTexts}>
            <h4 className={classes.awardTitle}>
              International Design Awards 2021
            </h4>
            <p className={classes.awardDescription}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
