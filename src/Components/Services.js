import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFileCode,
  faGlobe,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
// import {}

export default function Services() {
  return (
    <div className="services" id="services">
      <h1 className="py-5"> my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>
                I approach each project individually and always focus on the
                result
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>Your website will be build with an new proven technologies.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGlobe} size="2x" />
              </div>
              <h3>Google Ads</h3>
              <p>
                Your service or product will appear at the top of the Google
                search
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faTools} size="2x" />
              </div>
              <h3>Custom Backend Development</h3>
              <p>
                Ensure seamless communication between the frontend and backend
                components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
