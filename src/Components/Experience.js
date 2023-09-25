import React from "react";

export default function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2022-2022</h3>
            <p>
              <b>Volunteer</b> | <b>PU Projections</b>
              <br />I volunteered at <strong>PU projections</strong>, Gujarat's
              largest Tech Fest, where I managed a crowd of over 200
              participants during the CodeHunt event. My responsibilities
              included event coordination, crowd management, and providing
              technical support. Additionally, I played a pivotal role in
              designing challenging C and C++ questions for the competition.
              This experience allowed me to contribute to the success of the
              event, hone my event management skills, and promote a spirit of
              learning and collaboration among tech enthusiasts. I eagerly
              anticipate future opportunities to engage in such impactful
              initiatives.
            </p>
          </div>
        </div>
        {/* ----------------------------------------------------- */}

        {/* --------------------------------------------------- */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2023-2023</h3>
            <p>
              <b>Nodejs Intern </b> | <b>PanvaTech</b>
              <br />
              During my internship at <strong>PanvaTech</strong>, I had the
              privilege of working with a skilled Node.js development team. I
              actively contributed to building and optimizing server-side
              applications, creating efficient RESTful APIs, and mastering the
              art of debugging and troubleshooting. My experience also included
              integrating diverse data storage solutions like MySQL and MongoDB,
              honing my abilities in data management. This internship not only
              deepened my Node.js expertise but also exposed me to industry best
              practices and a collaborative work culture, making it a pivotal
              step in my journey as a developer
            </p>
          </div>
        </div>
        {/* ----------------------------------------------------- */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2023-Present</h3>
            <p>
              <b>Teaching Assistant </b> | <b>Parul University</b>
              <br />
              As a Teaching Assistant at <strong>Parul University</strong>, I've
              focused on imparting my expertise in programming languages,
              Database Management Systems (DBMS), and Operating Systems (OS). My
              approach blends theoretical knowledge with hands-on practice,
              ensuring that students gain a comprehensive understanding of these
              crucial facets of computer science. In the realm of programming, I
              emphasize problem-solving and practical application, equipping
              students with proficiency in multiple languages. In the DBMS
              domain, I delve into data modeling, query optimization, and
              database design, preparing students to handle complex data
              structures. In the context of Operating Systems, I explore
              fundamental concepts such as process management and memory
              allocation, enabling students to grasp the foundational
              infrastructure of computing.
            </p>
          </div>
        </div>
        {/* ------------------------------------------------------- */}
      </div>
    </div>
  );
}
