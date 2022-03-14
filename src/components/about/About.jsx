import React from "react";
import classes from "./About.module.css";
import webdev from "../../images/webDevelopment.jpg";
import award from "../../images/award.png";
import axios from "axios";

function About() {
  async function getStuff() {
    try {
      const response = await axios.get(
        "https://dad-jokes.p.rapidapi.com/random/joke"
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  getStuff();

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
          Strong-willed person. Quick learner. A strong can-do attitude.
          Self-motivation.
        </p>
        <p className={classes.aboutDescription}>
          I have always been a curious and determined person, seeking to
          understand <br></br>in depth more and more about the overall
          environment. When I set my objectives right, <br></br> I know there
          are just delays, not failure. <br></br>
          <br></br>
          Currently I focus on front-end web development. I am purely amazed by
          how complex <br></br> yet simple it is to "speak to" the WEB and
          computers, in general.<br></br>
          <br></br>I am fascinated and eager to dive deeper into this never
          ending world of programming <br></br> which is, in itself, a real
          treasure to be discovered.
        </p>
        <div className={classes.award}>
          <img src={award} alt="" className={classes.aboutAwardImage} />
          <div className={classes.awardTexts}>
            <h4 className={classes.awardTitle}>
              Certificate of completion - UDEMY Javascript Course
            </h4>
            <p className={classes.awardDescription}>
              Covered: Javascript fundamentals, DOM & Events, Data structures,
              Modern operators, Object-Oriented Programming with JS and many
              more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
