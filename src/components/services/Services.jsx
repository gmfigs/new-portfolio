import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
  <h2 className="section__title">Services</h2>
  <span className="section__subtitle">What I offer</span>

  <div className="services__container container grid">
    <div className="services__content" onClick={() => toggleTab(1)}>
      <div>
        <i className="uil uil-arrow services__icon"></i>
        <h3 className="services__title">
          Frontend <br /> Development
        </h3>
      </div>

      <span className="services__button">
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      <div
        className={
          toggleState === 1
            ? "services__modal active-modal"
            : "services__modal"
        }
        onClick={(e) => {
          if (e.target.classList.contains("services__modal")) {
            toggleTab(0);
          }
        }}
      >
        <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
          <i
            onClick={(e) => {
              e.stopPropagation();
              toggleTab(0);
            }}
            className="uil uil-times services__modal-close"
          ></i>
          <div className="align-content">
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__modal-title">Frontend Development</h3>
          </div>
          <p className="services__modal-description">
            With 2+ years in the tech sector, skills were refined 
            while working in a software development company.
          </p>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Responsive Web Development.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Cross-Browser Compatibility.</p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Usage of Frontend Frameworks.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Applying styles to enhance the visual appeal and usability.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Using tools like Git for collaborative development and code versioning.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="services__content" onClick={() => toggleTab(2)}>
      <div>
        <i className="uil uil-web-grid services__icon"></i>
        <h3 className="services__title">
          UI/UX <br /> Design
        </h3>
      </div>

      <span className="services__button">
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      <div
        className={
          toggleState === 2
            ? "services__modal active-modal"
            : "services__modal"
        }
        onClick={(e) => {
          if (e.target.classList.contains("services__modal")) {
            toggleTab(0);
          }
        }}
      >
        <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
          <i
            onClick={(e) => {
              e.stopPropagation();
              toggleTab(0);
            }}
            className="uil uil-times services__modal-close"
          ></i>

          <div className="align-content">
            <i className="uil uil-web-grid services__icon"></i>   
            <h3 className="services__modal-title">UI/UX Design</h3>
          </div>
          <p className="services__modal-description">
            With 2+ years of experience. Providing quality
            work to freelance clients and tech industry. 
            Experience managing design deadlines and expectations.
          </p>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I develop the user interface.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Web page development.</p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I create UX element interactions.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I position your company brand.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Design and mockups of products for companies.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="services__content" onClick={() => toggleTab(3)}>
      <div>
        <i className="uil uil-edit services__icon"></i>
        <h3 className="services__title">
          Visual <br /> Design
        </h3>
      </div>

      <span className="services__button">
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      <div
        className={
          toggleState === 3
            ? "services__modal active-modal"
            : "services__modal"
        }
        onClick={(e) => {
          if (e.target.classList.contains("services__modal")) {
            toggleTab(0);
          }
        }}
      >
        <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
          <i
            onClick={(e) => {
              e.stopPropagation();
              toggleTab(0);
            }}
            className="uil uil-times services__modal-close"
          ></i>
          
          <div className="align-content">
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__modal-title">Visual Designer</h3>
          </div>
          
          <p className="services__modal-description">
            With 1+ year of experience. Mostly providing quality
            work to freelance clients.
          </p>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Create interactive prototypes to showcase design concepts and user flows.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Visual Hierarchy organization.</p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Create animated elements or interfaces to enhance user engagement.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Develop and maintain consistent visual identities for brands.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Knowledge of fonts and text layout.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Services;
