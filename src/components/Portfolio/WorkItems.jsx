import React from "react";

const WorkItems = ({ item }) => {
  const renderCardContent = (title) => {
    switch (title) {
      case "Work at SISCOG SA":
        return (
          <>
            <div className="work-align-content">
              <h3 className="work__title">{item.title}</h3>
              <i className="uil ml-less uil-trademark"></i>
            </div>
            <a href={item.url} className="work__button">
              View Project
              <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
          </>
        );
      case "Mr.Geek - UX/UI Design":
        return (
          <>
            <div className="work-align-content">
              <h3 className="work__title">{item.title}</h3>
            </div>
            <div className="work-text-align-content">
              <a href={item.url} className="work__button">
                View Project
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
              </a>
            </div>
          </>
        );
      case "HoyBank - Frontend Development":
        return (
          <>
            <div className="work-align-content">
              <h3 className="work__title">{item.title}</h3>
            </div>
            <div className="work-text-align-content">
              <a href={item.url} className="work__button">
                View Project
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
              </a>
              <div className="symbol__button">
                <a className="work__button-icon button-hover mr-1" alt="view code" href="https://github.com/gmfigs/hoy_bank">
                  <i className="uil uil-github" ></i>
                </a>
                <a className="work__button-icon button-hover" alt="view presentation" href="https://www.figma.com/proto/07jcjaNMmw6TTT6s8YTbfJ/HoyBank?page-id=0%3A1&node-id=113-31&viewport=165%2C494%2C0.03&t=u7inNm8ALXiJE0Md-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=101%3A27">
                  <i className="uil uil-caret-right" ></i>
                </a>
              </div>
            </div>
          </>
        );
      case "BrainUp - UX/UI Project":
        return (
          <>
            <div className="work-align-content">
              <h3 className="work__title">{item.title}</h3>
            </div>
            <div className="work-text-align-content">
              <a href={item.url} className="work__button">
                View Project
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
              </a>
              <div className="symbol__button">
                <a className="work__button-icon button-hover" alt="view presentation" href="https://www.figma.com/proto/nrcDx3XB1CRzHMJr1jfaBD/brainup?page-id=33436%3A493&node-id=33800-28861&starting-point-node-id=33800%3A28861&t=z9jdJXLOwUlqjigN-1">
                  <i className="uil uil-caret-right" ></i>
                </a>
              </div>
            </div>
          </>
        );
        case "Portfolio Template - Code & Design":
        return (
          <>
            <div className="work-align-content">
              <h3 className="work__title">{item.title}</h3>
            </div>
            <div className="work-text-align-content">
              <a href="https://github.com/gmfigs/portfolio" className="work__button">
                View Project
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
              </a>
              <div className="symbol__button">
                <a className="work__button-icon button-hover mr-1" alt="view code" href="https://github.com/gmfigs/portfolio">
                  <i className="uil uil-github" ></i>
                </a>
              </div>
            </div>
          </>
        );
        case "Full Stack - Airbnb clone":
        return (
          <>
            <div className="work-align-content">
              <h3 className="work__title">{item.title}</h3>
            </div>
            <div className="work-text-align-content">
              <a href={item.url} className="work__button">
                View Project
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
              </a>
              <div className="symbol__button">
                <a className="work__button-icon button-hover mr-1" alt="view code" href="https://github.com/gmfigs/airbnb-clone">
                  <i className="uil uil-github" ></i>
                </a>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="work-align-content">
              <h3 className="work__title">{item.title}</h3>
            </div>
          </>
        );
    }
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      {renderCardContent(item.title)}
    </div>
  );
};

export default WorkItems;
