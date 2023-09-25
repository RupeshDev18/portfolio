import React from "react";
// import author from "../profile.jpg";
import prof from "../profi (1).jpg";
export default function AboutMe() {
  return (
    <div className="container py-5" id="aboutme">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            {/* <img src={author} alt="profile..." className="profile-img" /> */}
            <img src={prof} alt="profile..." className="profile-img" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hey there! I'm Rupesh, a Computer Science and Engineering senior
            with a knack for backend magic using Django and Node.js, crafting
            delightful front-end experiences with React, and navigating the
            intricacies of MySQL, PostgreSQL, and MongoDB databases. I thrive on
            solving complex problems through code and am driven by the
            ever-evolving tech landscape. Let's connect and build something
            amazing together!
          </p>
        </div>
      </div>
    </div>
  );
}
