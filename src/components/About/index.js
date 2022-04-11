import React from 'react';
import coverImage from '../../assets/tiles.jpeg'

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        By day, I am a lead product owner at Target. By night, I am a student learning full-stack web development. I have been with Target for more than 10 years in various roles. In my spare time (when I am not learning how to code) I enjoy playing co-rec sports, baking, and spending time with my family.
        </p>
      </div>
    </section>
  );
}

export default About;