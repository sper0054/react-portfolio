import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "SpartanSearch",
    image: "../../assets/spartansearch.png",
    repo: "https://github.com/sper0054/SpartanSearch",
    live: "https://limitless-island-48434.herokuapp.com/",
  },
  {
    id: 1,
    title: "Book Critic",
    image: "../../assets/bookcritic.png",
    repo: "https://github.com/Cbracewell30/Book-library",
    live: "https://cbracewell30.github.io/Book-library/",
  },
  {
    id: 2,
    title: "Work Day Scheduler",
    image: "../../assets/workdayschedule.png",
    live: "https://sper0054.github.io/Work-Day-Scheduler/",
    repo: "https://github.com/sper0054/Work-Day-Scheduler",
  },
  {
    id: 3,
    title: "Tech Blog",
    image: "../../assets/techblog.png",
    repo: "https://github.com/sper0054/tech-blog",
    live: "https://peaceful-spire-06772.herokuapp.com/",
  },
  {
    id: 4,
    title: "Budget Tracker",
    image: "../../assets/budgettracker.png",
    repo: "https://github.com/sper0054/budget-tracker",
    live: "https://rocky-atoll-65703.herokuapp.com/",
  },
  {
    id: 5,
    title: "JavaScript Quiz",
    image: "../../assets/javascriptquiz.png",
    repo: "https://github.com/sper0054/JavaScript-Quiz",
    live: "https://sper0054.github.io/JavaScript-Quiz/",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    image: "../../assets/weatherdashboard.png",
    repo: "https://github.com/sper0054/Weather-Dashboard",
    live: "https://sper0054.github.io/Weather-Dashboard/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
