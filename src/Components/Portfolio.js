import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
// import taskManager from "../images/task-manager.png";
import wisdomTap from "../images/WisdomTap.png";
//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOXES
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

export default function Portfolio() {
  //Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="Netflix Clone Project..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum
          recusandae obcaecati quaerat quos
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          href="https://github.com/Rupesh180902/"
          //   onClick={() => window.open("https://github.com/Rupesh180902")}
        >
          https://github.com/Rupesh180902
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //CityGuide
  const openPopupboxCity = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="CityGuide Project..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum
          recusandae obcaecati quaerat quos
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          href="https://github.com/Rupesh180902/"
          //   onClick={() => window.open("https://github.com/Rupesh180902")}
        >
          https://github.com/Rupesh180902
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigCity = {
    titleBar: {
      enable: true,
      text: "CityGuide Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Portfolio
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="Portfolio Clone Project..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum
          recusandae obcaecati quaerat quos
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          href="https://github.com/Rupesh180902/"
          //   onClick={() => window.open("https://github.com/Rupesh180902")}
        >
          https://github.com/Rupesh180902
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portfolio clone Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Task Manager
  const openPopupboxWisdomTap = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={wisdomTap}
          alt="Advice Whirl"
        />
        <p>
          Wisdom Tap is your source for instant, random words of wisdom. Click
          for a daily dose of insight and inspiration in a single tap.
        </p>
        <b>Demo:</b>
        <a
          className="hyper-link"
          href="https://wisdom-tap.onrender.com/"
          //   onClick={() => window.open("https://github.com/Rupesh180902")}
        >
          https://wisdom-tap.onrender.com
        </a>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          href="https://github.com/Rupesh180902/wisdom-tap"
          //   onClick={() => window.open("https://github.com/Rupesh180902")}
        >
          https://github.com/Rupesh180902/wisdom-tap
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigWisdomTap = {
    titleBar: {
      enable: true,
      text: "Advice Whirl",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper" id="portfolio">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="row image-box-wrapper justify-content-center">
          <div
            className="portfolio-image-box col"
            onClick={openPopupboxNetflix}
          >
            <img
              className="portfolio-image"
              src={netflix}
              alt="City Guide Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* ----- */}

          <div className="portfolio-image-box col" onClick={openPopupboxCity}>
            <img
              className="portfolio-image"
              src={cityGuide}
              alt="city guide..."
            />

            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* ------ */}

          <div
            className="portfolio-image-box col"
            onClick={openPopupboxPortfolio}
          >
            <img
              className="portfolio-image"
              src={portfolio}
              alt="portfolio ..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* ----- */}

          <div
            className="portfolio-image-box col"
            onClick={openPopupboxWisdomTap}
          >
            <img
              className="portfolio-image"
              src={wisdomTap}
              alt="Advice Whirl..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCity} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigWisdomTap} />
    </div>
  );
}
