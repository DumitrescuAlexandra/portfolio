import React from "react";
import Project from "./project/Project";
import classes from "./Projects.module.css";
import { projects } from "../../data";

function Projects() {
  return (
    <div className={classes.projectsPage}>
      <div className={classes.projectsTexts}>
        <h1 className={classes.projectsTitle}>
          Divide <span>&</span> conquer. One thing at a time
        </h1>
        <div className={classes.projectsDescription}>
          During the learning process, I have developed some little projects.
          Some of them are inspired by the material from the courses, while some
          are personal work. Each of them highlights a certain set of skills.
        </div>
      </div>
      <div className={classes.projectsList}>
        {projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            link={item.link}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
