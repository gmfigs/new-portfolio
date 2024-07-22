import React from "react";
import "./airbnb.css";
import ImgLoad from "../imgLoad/ImgLoad";
import airbnb from "../../assets/airbnb-clone.png";

const Airbnb = () => {
  return (
    <>
      <div className="portfolio-hero-section">
        <div className="divider-container w-container">
          <div className="align-content">
            <span className="nunito hugeicons--airbnb"></span>
            <h1 className="nunito">
                airbnb clone
            </h1>
          </div>
          <div className="section__subtitle side-padding">
            Full Stack Airbnb clone using Next.js, Tailwind CSS, Prisma and MongoDB.
          </div>
          <div className="divider-25"></div>
          <div className="w-layout-grid portfolio-details portfolio-details-custom">
            <div className="portfolio-detail-left">
              <strong>Timeline: </strong> In progress
            </div>
            <div>
              <strong>Year: </strong>
               2024
            </div>
            <div className="portfolio-detail-right">
              <strong>Role: </strong>
               Full Stack Developer
            </div>
          </div>

          <div className="portfolio-section">
            <div className="divider-container w-container">
                <h2 className="portfolio-title">The Challenge</h2>
                <p className="portfolio-description">The project aimed to create a fully functional Airbnb clone using modern web development technologies. 
                Challenges included implementing dynamic routing with Next.js, designing a responsive interface with Tailwind CSS, managing database schemas using Prisma, integrating MongoDB for data storage, and ensuring secure user authentication.</p>

                <h2 className="portfolio-title bg-top sm-bottom">Project in Progress</h2>
                <p>The Airbnb clone project is currently under development.</p>
                <div className="progress-container">
                    <div className="progress-bar">
                        <div className="progress">
                        </div>
                    </div>
                </div>

                <ImgLoad value="1.33" className="hoyBank__img" src={airbnb} id="LJLX#,NH%$s,~pfkD*oe.8oJIAWX"/>
            </div>
          </div>

          <div className="portfolio-section">
            <div className="github-code">
                <h2 className="portfolio-title sm-bottom">Access the code development</h2>
                <p className="bg-bottom">You can track the progress, access the source code, and contribute on my GitHub repository. There, you can view the latest updates, explore documentation, and raise issues or feature requests.</p>
                <a href="https://github.com/gmfigs/airbnb-clone" className="button button--flex gigantic-bottom">View the Code on GitHub<svg className="button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z" fill="var(--container-color)"></path><path d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z" fill="var(--container-color)"></path></svg></a>
            </div>
          </div>
      </div>
      </div>
    </>
  );
};

export default Airbnb;