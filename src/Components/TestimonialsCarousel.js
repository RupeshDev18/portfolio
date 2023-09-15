import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//Avatars import
import ava1 from "../images/avatars/avatar-1.png";
// import ava2 from "../images/avatars/avatar-2.png";
import ava3 from "../images/avatars/avatar-3.png";
// import ava4 from "../images/avatars/avatar-4.png";
import ava5 from "../images/avatars/avatar-5.png";

export default function TestimonialsCarousel() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <img src={ava1} alt="Bharat" />
        <div className="myCarousel">
          <h3>Bharat</h3>
          <p>
            I've known Rupesh for years, and their passion for technology is
            infectious. Whether it's backend, frontend, or databases, Rupesh is
            a versatile coder always up for a challenge. Their friendly and
            approachable nature makes them a fantastic teammate and
            collaborator.
          </p>
        </div>
      </div>

      <div>
        <img src={ava3} alt="Utpal Patel" />
        <div className="myCarousel">
          <h3>Utpal Patel</h3>
          <p>
            I've mentored Rupesh and I'm truly impressed. Their passion for
            coding is commendable. Proficient in Django and Node.js, they
            quickly grasp complex concepts and apply them. Rupesh's dedication,
            creativity, and attention to detail make them a standout student.
            They will excel in their future endeavors.
          </p>
        </div>
      </div>

      <div>
        <img src={ava5} alt="Arzoo" />
        <div className="myCarousel">
          <h3>Arzoo👑😎</h3>
          <p>
            Rupesh is a joy to work with. Their technical progress in Django and
            Node.js is unmatched. What sets them apart is their collaborative
            spirit. During our project, their problem-solving skills and
            commitment to delivering quality code were impressive. I look
            forward to more opportunities to work with Rupesh.
          </p>
        </div>
      </div>
    </Carousel>
  );
}
