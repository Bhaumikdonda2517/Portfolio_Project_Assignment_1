import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content flex">
        {/* Use absolute path for public assets */}
        <img src="/Photoit.jpeg" alt="Profile Photo" className="profile-photo" />
        <div>
          <h2>About Me</h2>
          <p>
            My name is Bhaumik Donda, and I am an IT student currently studying at Loyalist College, Toronto Campus.
            I am passionate about technology and problem-solving, with proficiency in programming languages like C, C#, Java, SQL, and MySQL.
            I thrive on creating innovative solutions to challenges and aim to apply my technical knowledge in real-world scenarios.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
