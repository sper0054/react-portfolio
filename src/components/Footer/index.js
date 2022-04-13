import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/sper0054" target="_blank" rel="noreferrer">
            Teresa Sperl Wohl
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/teresawohl/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://pin.it/60PfAn9" target="_blank" rel="noreferrer">
            Pinterest
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;