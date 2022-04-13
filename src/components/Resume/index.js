import React from "react";
import myResume from "../../assets/TeresaWohlResume.pdf";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={myResume}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>Bulma, Bootstrap, JSON</li>
            <li>React, SQL</li>
            <li>Git</li>
            <li>Github Repo</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;