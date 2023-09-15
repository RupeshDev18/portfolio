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
            <h3>2020-2021</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              deserunt aliquam cupiditate maxime modi voluptates molestiae
              commodi quis tempora odio alias, quibusdam minus doloremque totam
              omnis eaque reiciendis, dolores sint! Possimus, ut praesentium
              laudantium cupiditate nemo saepe et suscipit amet eaque aliquid
              facere at, id nihil consectetur ipsam!
            </p>
          </div>
        </div>
        {/* ----------------------------------------------------- */}

        {/* --------------------------------------------------- */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-2022</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              deserunt aliquam cupiditate maxime modi voluptates molestiae
              commodi quis tempora odio alias, quibusdam minus doloremque totam
              omnis eaque reiciendis, dolores sint! Possimus, ut praesentium
              laudantium cupiditate nemo saepe et suscipit amet eaque aliquid
              facere at, id nihil consectetur ipsam!
            </p>
          </div>
        </div>
        {/* ----------------------------------------------------- */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2023-2023</h3>
            <p>
              <b>Nodejs Intern</b>
              <br />
              During my internship, I had the privilege of working with a
              skilled Node.js development team. I actively contributed to
              building and optimizing server-side applications, creating
              efficient RESTful APIs, and mastering the art of debugging and
              troubleshooting. My experience also included integrating diverse
              data storage solutions like MySQL and MongoDB, honing my abilities
              in data management. This internship not only deepened my Node.js
              expertise but also exposed me to industry best practices and a
              collaborative work culture, making it a pivotal step in my journey
              as a developer
            </p>
          </div>
        </div>
        {/* ------------------------------------------------------- */}
      </div>
    </div>
  );
}
