import React from 'react';
import './siscog.css';
import ImageSlider from './ImageSlider';

import Siscog1 from "../../assets/siscog1.jpeg";
import Siscog2 from "../../assets/siscog2.jpeg";
import Siscog3 from "../../assets/siscog3.jpeg";
import Siscog4 from "../../assets/siscog4.jpeg";
import Siscog5 from "../../assets/siscog5.jpeg";
import colorpalette from "../../assets/color-palette.png";
import primaryinterfacecolors from "../../assets/primary-interface-colors.png";
import ImgLoad from '../imgLoad/ImgLoad';
import iconCover from "../../assets/iconCover.png";
import iconLibrary from "../../assets/iconLibrary.png";
import programming from "../../assets/programming.png";
import designing from "../../assets/designing.png";
import component1 from "../../assets/components1.png";
import component2 from "../../assets/components2.png";
import component3 from "../../assets/components3.png";
import component4 from "../../assets/components4.png";

const Siscog = () => {
    const images = [Siscog1, Siscog2, Siscog3, Siscog4, Siscog5];

    return (
        <div className="siscog-intro-padding portfolio-hero-section section">
            <div className="siscog-intro">
                <div className="divider-container w-container">
                    <h1 className="section__title align-left">
                        Work at SISCOG SA <i className="uil ml-less uil-trademark"></i>
                    </h1>
                    <h3 className="under__title align-left" >
                        as a Junior Software Engineer
                    </h3>
                    <ImageSlider images={images}/>
                    <h2 className="portfolio-title title-margin siscog-color" id="about">
                        Company Overview
                    </h2>
                    <div className="portfolio-description sm-bottom align-left">
                        SISCOG, also known as <strong>Sistemas Cognitivos SA</strong>, is a
                        Portuguese software company founded in 1986, specializing in
                        decision support systems for resource planning and management in
                        transportation sectors, particularly railways. SISCOG’s solutions
                        utilize a blend of artificial intelligence and operations research
                        to provide customized and optimized scheduling options, offering
                        manual, semi-automatic, and automatic modes to cater to different
                        operational needs​.
                    </div>
                    <div className="portfolio-description no-bottom align-left">
                        The Software has been implemented in various international railway
                        companies, including those in:
                        <ul className="bullet-list">
                            <li>Canada</li>
                            <li>Netherlands</li>
                            <li>Finland</li>
                            <li>Norway</li>
                            <li>UK (London Underground)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="portfolio-section">
                <div className="divider-container title-margin w-container">
                    <h2 className="portfolio-title title-margin siscog-color">
                        My Role and Achievements
                    </h2>
                    <div className="portfolio-details portfolio-details-custom align-left">
                        <div>
                            <strong>Starting Date: </strong>March 2023
                        </div>
                        <div className="portfolio-detail-right">
                            <strong>Main Role:</strong> Junior Software Engineer at Graphical
                            Interfaces team
                        </div>
                        <div className="portfolio-detail-right">
                            <strong>Complementary Role:</strong> UX/UI Designer across Diverse
                            Teams
                        </div>
                    </div>
                    <p className="portfolio-description">
                        For a year and a half, I worked as a Junior Software Engineer and
                        UX/UI Designer at SISCOG SA. I was integrated into the Graphical
                        Interfaces team with the mission to unify two distinct teams: the
                        Common Lisp team, responsible for the main software used by most
                        clients due to its functional algorithms, and the Web programming
                        team, which developed a complementary application to manage
                        schedules, plan resources, and handle personnel management.
                    </p>
                    <div className="div-block-7 bg-bottom"></div>
                    <div className="tasks-section">
                        <h3 className="portfolio-title">Main Tasks</h3>
                        <p className="portfolio-description">
                            My primary task throughout my work has been to revamp and elevate
                            the UI design aligning it with modern standards, incorporating
                            vital usability principles that were lacking. In essence, my role
                            involved a comprehensive transformation of the platform,
                            initially addressing functional behaviors, usability, and user
                            experience, followed by a complete redesign to the existing
                            software.
                        </p>
                        <div className="w-layout-grid grid-tasks no-bottom">
                            <div className="quotation usability bg-bottom skills__content">
                                <div className="flex-content">
                                    <h3 className="number__title siscog-color">Task 01 |</h3>
                                    <div>
                                        <h5 className="secondary-text sm-text">Duration</h5>
                                        <h4 className="secondary-text bold">3 months</h4>
                                    </div>
                                </div>
                                <h3 className="usability-paragraph tasks-subtitle color-black">
                                    Color Palette Redesign for Brand and Software App
                                </h3>
                                <ul className="skills-content-list">
                                    <li className="tasks-text sm-bottom">
                                        <strong>Redesign Initiative:</strong> Led the initiative to
                                        redesign the color palette for uniformity between Desktop
                                        Software and Web Application.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>Theme Development:</strong> Refined the three
                                        existing themes: Dark, Light, and Midnight Grey. This
                                        involved color and design adjustments to achieve distinct
                                        visual identities while ensuring consistency across all
                                        variations.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>Accessibility Focus:</strong> Designed the Midnight
                                        Grey theme specifically for companies prioritizing
                                        colorblind accessibility.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>Tools Utilized:</strong> Figma, Emacs, Common-Lisp,
                                        Git, Jira, Confluence...
                                    </li>
                                </ul>
                            </div>

                            <div className="quotation usability bg-bottom skills__content">
                                <div className="flex-content">
                                    <h3 className="number__title siscog-color">Task 02 |</h3>
                                    <div>
                                        <h5 className="secondary-text sm-text">Duration</h5>
                                        <h4 className="secondary-text bold">5 months</h4>
                                    </div>
                                </div>
                                <h3 className="usability-paragraph tasks-subtitle color-black">
                                    SCSS Implementation for Code Uniformity and Organization
                                </h3>
                                <ul className="skills-content-list">
                                    <li className="tasks-text sm-bottom">
                                        <strong>Analysis and Planning:</strong> Conducted a
                                        comprehensive review of the existing CSS codebase to
                                        identify inefficiencies and conflicts.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>SCSS Implementation:</strong> Converted CSS to SCSS,
                                        leveraging variables, nesting, and mixins to enhance code
                                        efficiency and readability.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>Folder and Directory Organization:</strong>{" "}
                                        Structured files into a well-organized directory system to
                                        minimize dependencies and facilitate maintainability.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>Documentation and Training:</strong> Documented new
                                        SCSS standards and provided training to developers to ensure
                                        a smooth transition.
                                    </li>
                                </ul>
                            </div>

                            <div className="quotation usability bg-bottom skills__content">
                                <div className="flex-content">
                                    <h3 className="number__title siscog-color">Task 03 |</h3>
                                    <div>
                                        <h5 className="secondary-text sm-text">Duration</h5>
                                        <h4 className="secondary-text bold">7 months</h4>
                                    </div>
                                </div>
                                <h3 className="usability-paragraph tasks-subtitle color-black">
                                    UI Improvement of Reports and Bootstrap Integration
                                </h3>
                                <ul className="skills-content-list">
                                    <li className="tasks-text sm-bottom">
                                        <strong>UI Enhancement:</strong> Upgraded the UI of all
                                        existing reports, enhancing visual elements and user
                                        interactions to create a more attractive and intuitive
                                        reporting experience.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>Usability Corrections:</strong> Identified and
                                        resolved usability issues, ensuring that the reports were
                                        intuitive and user-friendly.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>Bootstrap Integration:</strong> Led the transition
                                        from jQuery UI to Bootstrap, adjusting the code, updating
                                        versions of dependencies and implementing Bootstrap’s
                                        responsive grid system, components and utilities.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>Tools Utilized:</strong> Angular, Javascript, HTML,
                                        SCSS, Common-Lisp, Bootstrap, Figma...
                                    </li>
                                </ul>
                            </div>
                            <div className="quotation usability bg-bottom skills__content">
                                <div className="flex-content">
                                    <h3 className="number__title siscog-color">Task 04 |</h3>
                                    <div>
                                        <h5 className="secondary-text sm-text">Duration</h5>
                                        <h4 className="secondary-text bold">1 year</h4>
                                    </div>
                                </div>
                                <h3 className="usability-paragraph tasks-subtitle color-black">
                                    Implementation of Unified Styleguide
                                </h3>
                                <ul className="skills-content-list">
                                    <li className="tasks-text sm-bottom">
                                        <strong>Styleguide creation:</strong> Developed a
                                        Styleguide using a KSS-node template, enhancing its
                                        functionality to align with SISCOG's specific requirements
                                        and theme. Responsible for ongoing maintenance and oversight
                                        of all associated code.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>Components Integration:</strong> Define and refine
                                        interface components and interactions, ensuring alignment
                                        with design principles and usability standards. Integrate
                                        these components seamlessly into a Style Guide.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>Component Library Development:</strong> Developed a
                                        reusable component library within the style guide framework.
                                    </li>
                                    <li className="tasks-text sm-bottom">
                                        <strong>Tools Utilized:</strong> Angular, Node JS, SCSS,
                                        Javascript, Common-Lisp, Bootstrap, HTML, Figma, Git, Jira...
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-section no-padding-top" id="projects">
                <div className="divider-container w-container">
                    <h2 className="portfolio-title title-margin siscog-color">
                        Project Highlights
                    </h2>
                    <p className="portfolio-description bg-bottom">
                        Here are some of the project highlights that motivated me the most
                        and made me feel proud of my contributions. These highlights
                        showcase my key contributions on improving user experience,
                        enhancing visual design and ensuring consistency across the whole
                        application.
                    </p>
                    <div className="siscog-align-content">
                        <i className="uil uil-icons"></i>
                        <h3 className="color-black">Modernizing SISCOG SA's Iconography</h3>
                    </div>
                    <p className="portfolio-description md-bottom">
                        During a three-month period, I collaborated with a UX/UI Designer
                        to <strong>update and design all the icons at SISCOG SA</strong>,
                        aiming for a modern yet professional look. This task was inserted
                        into the larger project of creating a unified Style Guide. These
                        changes involved:
                    </p>
                    <ul className="bullet-list sm-bottom">
                        <li>Redesign the icon set to maintain the company’s visual language</li>
                        <li>Aim for a modern and professional look</li>
                        <li>Develop four styles: line, duo-tone, flat, and colorful</li>
                        <li>Conducted multiple design iterations for clarity and functionality</li>
                        <li>Implement the icons programatically in the software and test for consistency</li>
                    </ul>
                    <div className="wireframes-layout-grid bg-bottom">
                        <img src={iconCover} className="hoyBank__img" alt="img" />
                        <img src={iconLibrary} className="hoyBank__img" alt="img" />
                    </div>
                </div>
                <div className="divider-container w-container">
                <div className="siscog-align-content">
                        <i className="uil uil-create-dashboard"></i>
                        <h3 className="color-black">UI Components: Design and Implementation</h3>
                    </div>
                    <p className="portfolio-description md-bottom">
                        I took a <strong>leading role in the creation of new components and UI elements at SISCOG SA</strong>, which were pivotal in modernizing our applications.
                    </p>
                    <p className="portfolio-description md-bottom">
                        Implementing these components required meticulous attention to detail and a deep understanding of front-end technologies such as Angular and modern web programming languages. 
                        <strong>Weekly meetings were held during these component creations</strong>, where we conducted tests with the testing teams and gathered insights from various stakeholders to determine the best possible approach to the component implementations.
                    </p>
                    <p className="portfolio-description md-bottom">
                        One of the most challenging aspects was designing the components without significantly altering the initial component ideas. Since the software was old and many users were accustomed to its interface, we had numerous baselines and constraints.
                        Finding a sweet spot between design and programming was challenging, but <strong>being positioned between the two teams allowed me to provide valuable insights and learn from both sides</strong>. This process involved iterative development cycles, 
                        where I refined designs based on user feedback and usability testing to achieve optimal results.
                    </p>
                    <div className="wireframes-layout-grid bg-bottom">
                        <img src={component1} className="hoyBank__img" alt="img" />
                        <img src={component2} className="hoyBank__img" alt="img" />
                    </div>
                </div>
                <div className="divider-container w-container">
                    <div className="siscog-align-content">
                        <i className="uil uil-bag-alt"></i>
                        <h3 className="color-black">Improvement of Personal Technical Skills</h3>
                    </div>
                    <h4 className="portfolio-tag siscog-color bg-top">Programming skills</h4>
                    <p className="portfolio-description md-bottom">
                        I significantly enhanced my technical skills deepening my
                        programming knowledge and <strong>becaming more comfortable using
                        various frameworks</strong>. Implementing a Styleguide with Node.js
                        provided me with hands-on experience and a better understanding of
                        this powerful tool. The maintenance work I undertook taught me the
                        <strong>importance of writing clean and organized code</strong>, as
                        it was frequently revisited by myself and others.
                    </p>
                    <p className="portfolio-description md-bottom">
                        Additionally, I developed a strong ability to resolve issues and
                        work under pressure with tight deadlines. My skills in organizing
                        tasks, sharing ideas with colleagues, and continuously seeking the
                        best possible solutions were greatly improved.
                    </p>
                    <p className="portfolio-description bg-bottom">
                        Some of the technologies I used:
                    </p>
                    <div className="tools-layout-grid">
                        <img src={programming} alt="img" />
                    </div>
                    <h4 className="portfolio-tag siscog-color bg-top">UX/UI Design Skills</h4>
                    <p className="portfolio-description md-bottom">
                        Working at SISCOG SA provided me with invaluable experience in
                        adapting to a more professional and technical visual and voice
                        language, which was a significant shift from my previous work on
                        younger, more creative projects.
                    </p>
                    <p className="portfolio-description md-bottom">
                        SISCOG SA by being founded in 1986 and specializing in
                        transportation sectors, required a different approach to design. I
                        learned to <strong>create and modify components from scratch</strong>,
                        ensuring they aligned with the company’s established aesthetic.
                        This role also honed my organizational skills and taught me how to
                        <strong>effectively direct design meetings</strong>, justifying every
                        action and decision to align with the company’s standards.
                    </p>
                    <p className="portfolio-description md-bottom">
                        Additionally, I gained insights into <strong>improving UX and accessibility</strong>,
                        tackling challenges such as accommodating color blindness,
                        <strong>optimizing for large super wide screens</strong>, and ensuring
                        usability for multiple users viewing the same application simultaneously.
                        This experience significantly broadened my understanding of user-centric
                        design and accessibility considerations.
                    </p>
                    <p className="portfolio-description bg-bottom">
                        Some of the technologies I used:
                    </p>
                    <div className="tools-layout-grid bg-bottom">
                        <img src={designing} alt="img" />
                    </div>
                </div>
                <div className="divider-container w-container">
                    <div className="siscog-align-content">
                        <i className="uil uil-users-alt"></i>
                        <h3 className="color-black">Collaboration and Teamwork</h3>
                    </div>
                    <p className="portfolio-description sm-bottom">
                        During my time at SISCOG SA, I collaborated extensively with
                        cross-functional teams, stakeholders, and clients on various
                        significant projects. One of the key initiatives was{" "}
                        <strong>improving the user interface and ensuring the seamless
                        transition to new technologies</strong>. This involved phasing out
                        Common Lisp and adopting Angular and modern web programming
                        languages to achieve the same functionality as before.
                        The main challenge was that the knowledge was distributed across
                        different teams, necessitating effective communication and
                        collaboration.
                    </p>
                    <p className="portfolio-description sm-bottom">
                        I played a crucial role in <strong>building new components,
                        organizing and unifying styles, modernizing applications, and
                        organizing directories</strong>. This work required close coordination
                        with various teams to ensure a consistent approach and successful
                        implementation. Additionally, I contributed to introducing a
                        comprehensive Styleguide to align with the company's standards.
                    </p>
                    <p className="portfolio-description sm-bottom">
                        Throughout these projects, I actively participated in team meetings,
                        sharing ideas, and seeking feedback to ensure the best possible
                        outcomes. These collaborative efforts not only improved the
                        applications' overall design and functionality but also reinforced
                        the importance of teamwork, organized workflows, and continuous
                        knowledge sharing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Siscog;