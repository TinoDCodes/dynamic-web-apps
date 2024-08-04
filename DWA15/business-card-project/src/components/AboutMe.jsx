import React from "react";

function AboutMe() {
  return (
    <div className="about">
      <section>
        <h4 className="about--sub_heading">About</h4>
        <p className="about--paragraph">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </section>

      <section>
        <h4 className="about--sub_heading">Interests</h4>
        <p className="about--paragraph">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
