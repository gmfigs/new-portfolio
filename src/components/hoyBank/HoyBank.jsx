import React from 'react';
import hoyBankImg from "../../assets/hoyBank-mockups.png";
import Whiteboard from "../../assets/hoyBank-whiteboard.png";
import quotation from "../../assets/quotation.png";
import Paul from "../../assets/paul-warren.png";
import UserFlow from "../../assets/user-flow.png";
import Wireframe1 from "../../assets/wireframe-1.png";
import Wireframe2 from "../../assets/wireframe-2.png";
import styleguide1 from "../../assets/styleguide1.png";
import styleguide2 from "../../assets/styleguide2.png";
import mockupcollection from "../../assets/mockup-collection.png";
import technologies from "../../assets/technologies.png";
import mockup from "../../assets/mockup.gif";
import mockup2 from "../../assets/mockup2.gif";
import ImgLoad from '../imgLoad/ImgLoad';
import "../../App.css";
import "./hoyBank.css";

const HoyBank = () => {
    return (
        <div className="portfolio-hero-section  section">
        <div className="divider-container w-container">
            <h1 className="section__title">HoyBank Project</h1>
            <div className="section__subtitle">The future generation payment method is here.</div>
            <div className="divider-25"></div>
            <div className="w-layout-grid portfolio-details portfolio-details-custom">
                <div className="portfolio-detail-left"><strong>Timeline: </strong>3 weeks</div>
                <div><strong>Year: </strong>2023</div>
                <div className="portfolio-detail-right"><strong>Role:</strong> Frontend Developer</div>
            </div>
        </div> 
        <div className="portfolio-section" id="challenge">
            <div className="divider-container w-container">
                <h2 className="portfolio-title">The Challenge</h2>
                <p className="portfolio-description">Build, Design and Deploy a conceptual responsive website for an Online Digital Bank. 
                Using Figma for UX design, as well as React.js and Tailwind css for the coding and styling. The website should have data statistics, client testimonials and CTA buttons included.</p>
                <div className="div-block-7">
                </div>
                
                <ImgLoad value="1.75" className="hoyBank__img" src={hoyBankImg} id="J*Nm=@t7M{of~qof"/>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">
                <h4 className="portfolio-tag color-grey">Part 1</h4>    
                <h2 className="portfolio-title">Discover and understand users</h2>
                <p className="portfolio-description">This section is all about discovering and understanding the user´s needs, goals and pain points. I set myself a few research goals before getting started.</p>
                <ol className="portfolio-list" role="list">
                    <li>Learn as much as possible about my potential users</li>
                    <li>Understand current solutions and the competitive landscape</li>
                    <li>Determine if and how I can leverage new technology and innovation</li>
                </ol>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container"> 
                <h2 className="portfolio-title">Survey and user characteristics</h2>
                <div className="double-layout-grid">
                    <div>
                        <p className="portfolio-description">Given time constraints, my primary focus shifted towards <strong>Desktop Research</strong>.</p>
                        <p className="portfolio-description">This encompassed activities such as immersing myself in user reviews to identify pain points and user goals, staying updated on the latest trends within the digital banking sphere to challenge assumptions, and conducting informal discussions with two potential clients to understand their needs. </p>
                        <p className="portfolio-description"><strong>Using a whiteboard</strong>, I documented and structured the wealth of information gathered, ensuring clarity and organization throughout the process, thereby creating an environment conducive to addressing client needs effectively.</p>
                    </div>
                    <ImgLoad value="1.51" className="hoyBank__img" src={Whiteboard} id="LAM?^^NK_hWB~AaxxDjZUbaytmWB"/>
                    
                </div>
                
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">  
                <h2 className="portfolio-title">Key User Insights</h2>
                <p className="portfolio-description">There were some common themes and patterns that stood out along the user research.</p>
                <div className="w-layout-grid grid-user-insights">
                    <div className="skills__content" id="w-node-fc4041ef-2b01-ff9f-43c8-9693a716d747-d1caa1fc">
                        <div className="insight-align-content">
                            <i className="uil uil-shield-check"></i>
                            <h4 className="color-black">Security and trust</h4>
                        </div>
                        <p className="insights-description" id="w-node-b3dcc0de-35db-5498-2f8a-dc607e1126df-d1caa1fc">Digital Bank users are mostly afraid with scams and the viability of the product. It´s mandatory to make the product trustable so the user can feel a sense of safety. </p>
                    </div>
                    <div className="skills__content" id="w-node-_214644b2-0099-45eb-7db7-9d09c5862444-d1caa1fc">
                        <div className="insight-align-content">
                            <i className="uil uil-book-open"></i>
                            <h4 className="color-black">Less technical information</h4>
                        </div>
                        <p className="insights-description" id="w-node-_214644b2-0099-45eb-7db7-9d09c5862447-d1caa1fc">Bank users in general are often bored by the internal politics and organizational cultures. The goal is for them to worry exclusively about the use of the product.</p>
                    </div>
                    <div className="skills__content" id="w-node-_086ff372-f47b-d6ff-96c2-b99cab9df867-d1caa1fc">
                        <div className="insight-align-content">
                            <i className="uil uil-bill"></i>
                            <h4 className="color-black">Cost and Flexibility</h4>
                        </div>
                        <p className="insights-description" id="w-node-_086ff372-f47b-d6ff-96c2-b99cab9df86a-d1caa1fc">Most of the people are not willing to pay a lot when trying out the product or even to subscribe to a fidelity option.</p>
                    </div>
                    <div className="skills__content" id="w-node-_086ff372-f47b-d6ff-96c2-b99cab9df867-d1caa1fc">
                        <div className="insight-align-content">
                            <i className="uil uil-thumbs-up"></i>
                            <h4 className="color-black">Simplicity and Transparecy</h4>
                        </div>
                        <p className="insights-description" id="w-node-_086ff372-f47b-d6ff-96c2-b99cab9df86a-d1caa1fc">The digital shift is expected to come with an appealing and clean design. The users expect an attractive and easy to use interface.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">  
                <h2 className="portfolio-title">User Feedback</h2>
                <p className="portfolio-description">Here’s what some of the users said when asked about digital banks.</p>
                <div className="w-layout-grid grid-user-quotations">
                    <div className="quotation skills__content">
                        <div className="insight-align-content">
                            <img src={quotation} alt="" loading="lazy" width="48" />
                            <h4 className="color-black">Make it usefull.</h4>
                        </div>
                        <p>"Allows making the most necessary things fast and easy."</p> 
                    </div>
                    <div className="quotation skills__content">
                        <div className="insight-align-content">
                            <img src={quotation} alt="" loading="lazy" width="48" />
                            <h4 className="color-black">Show the testimonials.</h4>
                        </div>
                        <p>"Client feedbacks can make the digital product more trustable."</p> 
                    </div>
                    <div className="quotation skills__content">
                        <div className="insight-align-content">
                            <img src={quotation} alt="" loading="lazy" width="48" />
                            <h4 className="color-black">Transparecy is key.</h4>
                        </div>
                        <p>"An attractive appearence and easy to use interface."</p> 
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">  
                <h2 className="portfolio-title">User Persona</h2>
                <p className="portfolio-description">Based on the Research and the User interviews, I was able to find a persona that fits our project the best. With that in mind, some pain points and major goals patterns were starting to be noticeable.</p>
                <div className="w-layout-grid grid-user-persona user-persona-info">
                    <ImgLoad className='persona__img' value="0.70" src={Paul} id="CYH.A]_3_3x[~qoz%MtR"/>
                        <div className=''>
                            
                            <div>
                                <h2>Paul Walnen</h2>
                                <p className="persona-subtitle">32 yrs old | Manhattan, New York | IP Lawyer</p>
                            </div>
                            <div className='mt-medium'>
                                <div className="user-persona-section">
                                    <h4 className="color-black">Bio</h4>
                                    <div className="paragraph-small">Paul Walnen currently lives in New York. He is an IP Lawyer. Due to his professional occupation Paul often sees himself communicating with young clients throught digital channels. To avoid always thinking about work he deslikes having to deal with slow, admnistrative processes, especially for his finances.</div>
                                </div>
                                
                                <div className="user-persona-section">
                                    <h4 className="color-black">Goals</h4>
                                    <ol className="user-persona-list" role="list">
                                        <li>Not worrying about security processes when making online transfers.</li>
                                        <li>Have easy access through a website to this billings and invoicings.</li>
                                        <li>The price of the service is very important.</li>
                                    </ol>
                                </div>
                                
                                <div className="user-persona-section">
                                    <h4 className="color-black">Frustrations</h4>
                                    <ol className="user-persona-list" role="list">
                                        <li>Expensive accounting services.</li>
                                        <li>Late invoices and no way to follow up but email or phone call.</li>
                                        <li>Safety concerns when changing from a physical banking option.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className="portfolio-section">
            <div className="divider-container w-container">  
                <h2 className="portfolio-title">User Journey</h2>
                <p className="portfolio-description">A possible situation of our digital bank usage</p>
                <div className="journey__content">
                    <div className="responsive-two-column-grid">
                        <div className='color-black'>Paul's daughter sent a photo through Whatsapp of Rome (Italy) saying she would love to go there eventually. He decides to book a family trip there to celebrate her birthday.</div>
                        <div className='color-black strong'> <p>+ Thanks to Hoy Bank, Paul can ask his bank “What are the transactions fees for European Destinations?” and prepare his trip in advance</p></div>
                    </div>
                    <div className="responsive-two-column-grid">
                        <div className='color-black'>Paul then proceeds to put some money aside to make the most of their holidays in Europe. He will set a goal of $1200 through the projects section.</div>
                        <div className='color-black strong'> <p>+ Create a tab (Daughter´s birthday) in his projects section specific for the trip.</p> <p className='mt-medium'>- Not being able to automate his saving needs as everything needs to be authorized by him.</p> </div>
                    </div>
                    <div className="responsive-two-column-grid">
                        <div className='color-black'>Just to make sure he reaches the target before the departure, he adjusts his montly spending challenges. He will try to spend less money in restaurants for 2 months.  </div>
                        <div className='color-black strong'> <p> + It allows him to be organized and make sure he reaches his goals without a lot of effort.</p> <p className='mt-medium'>- Future notifications would help him to stay on track and be aware of what are his savings at the moment.</p> </div>
                    </div>
                    <div className="responsive-two-column-grid border-bottom">
                        <div className='color-black'>As the journey's date approaches, Paul notices that he has saved more money than he actually needed, and he moves the extra funds to a new tab labeled "fine dining" in order to have an even better dining experience when they come back.</div>
                        <div className='color-black strong'> <p> + The feature enables Paul to create new tabs and effortlessly transfer funds between them, making his money easily transferable with just a single click.</p></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">
                <h4 className="portfolio-tag color-grey">Part 2</h4>    
                <h2 className="portfolio-title">Problem definition & ideation</h2>
                <p className="portfolio-description">At this stage it was time to re-define the problem based on the research insights and Paul´s needs.</p>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container"> 
                <h2 className="portfolio-title">Problem statement</h2>
                <p className="portfolio-description">Design a landpage only website that transmits security to the client, is attractive to new users through the use of eye-catching discounts and prominent CTA´s buttons without losing the main focus on a user-friendly, simple and transparent design.</p>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container"> 
                <h2 className="portfolio-title">How Might We</h2>
                <div className="w-layout-grid grid-ideation">
                    <div className="skills__content insight-align-content hoyBank__bgcolor" id="w-node-fc4041ef-2b01-ff9f-43c8-9693a716d747-d1caa1fc">
                            <h3 className='title__color number__title'>01 |</h3>
                            <p className=''>Design a landing page website that effectively transmits a sense of security to the client? </p>
                    </div>
                    <div className="skills__content insight-align-content hoyBank__bgcolor" id="w-node-_214644b2-0099-45eb-7db7-9d09c5862444-d1caa1fc">                     
                            <h3 className='title__color number__title'>02 |</h3>
                            <p>Attract new users through the use of eye-catching discounts and promotions?</p>                   
                    </div>
                    <div className="skills__content insight-align-content hoyBank__bgcolor" id="w-node-_086ff372-f47b-d6ff-96c2-b99cab9df867-d1caa1fc">
                            <h3 className='title__color number__title'>03 |</h3>
                            <p>Ensure that the website is user-friendly and easy to navigate, with a focus on simplicity and a good user experience?</p>                    
                    </div>
                    <div className="skills__content insight-align-content hoyBank__bgcolor" id="w-node-_086ff372-f47b-d6ff-96c2-b99cab9df867-d1caa1fc">               
                        <h3 className='title__color number__title'>04 |</h3>
                        <p>Emphasize clear and prominent call-to-action buttons that encourage users to take action?</p>               
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">  
                <h2 className="portfolio-title">The Solution</h2>
                <p className="portfolio-description">Based on Paul´s needs and the user research, I come up with a list of key features for the landing page website. </p>
                <ol className="portfolio-list" role="list">
                    <li><strong>Use clear and simple language</strong>: Avoid using complex language and technical terms that might confuse the client. Keep the language clear and simple.</li>
                    <li><strong>Keep the design clean and professional</strong>: A clean and professional design wi     such as Airbnb, Binance, and others to give clients confidence in the security of the site.</li>
                    <li><strong>Show testimonials</strong>: Showcase testimonials from satisfied customers to provide social proof and increase the client's trust in the site.</li>
                </ol>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">
                <h4 className="portfolio-tag color-grey">Part 3</h4>    
                <h2 className="portfolio-title">Design</h2>
                <p className="portfolio-description">At this stage it was time to re-define the problem based on the research insights and Paul´s needs.</p>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">
                <h2 className="portfolio-title">User Flow</h2>
                <p className="portfolio-description">With the problem re-defined,, the next step was to create a detailed user flow to map out the interactions and steps a user would take to accomplish their goals within the solution.</p>
                <div className="div-block-7">
                </div>
                
                <ImgLoad value="1.39" className="hoyBank__img" id="LDRD7vog%IxZ%KfQWDWE~QodM~WW" src={UserFlow}/>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">
                <h2 className="portfolio-title">Wireframes & Prototype - Desktop</h2>
                <p className="portfolio-description">With the userflow completed, the next step was to create wireframes to the desktop landing page. I used medium-low fidelity prototypes using Figma.</p>
                <div className="div-block-7">
                </div>
                
                <div className="wireframes-layout-grid">
                <ImgLoad value="0.60" className="hoyBank__img" id="LCDS:tD%WB%M%M00t7~q?b%MWBIU" src={Wireframe1}/>
                <ImgLoad value="0.60" className="hoyBank__img" id="L9EMLD%M9F-;WB9Ft7_34n00M{~q" src={Wireframe2}/>
                </div>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">  
                <h2 className="portfolio-title">Usability Testing</h2>
                <p className="portfolio-description">I planned a usability testing using the mid-fidelity wireframes and these three tasks ...</p>
                <div className="w-layout-grid grid-user-quotations">
                    <div className="quotation usability skills__content">
                            <h3 className='title__color number__title'>Task 01 |</h3>
                            <h4 className="usability-paragraph color-black">Security assessment</h4>
                        <p>Ask participants to rate how secure they feel while using the landing page of the website and conducting transactions. Ask specific questions about the website's security features and whether they understand how those features protect their information.</p> 
                    </div>
                    <div className="quotation usability skills__content">
                            <h3 className='title__color number__title'>Task 02 |</h3>
                            <h4 className="usability-paragraph color-black">Layout and UX evaluation</h4>
                        <p>Ask the participants to complete specific tasks on the website and tell us how could we change it while observing how easily and efficiently they can complete those tasks. Get their feedback on the overall layout and visual design of the website.</p> 
                    </div>
                    <div className="quotation usability skills__content">
                        
                            <h3 className='title__color number__title'>Task 03 |</h3>
                            <h4 className="usability-paragraph color-black">Language clarity</h4>
                        
                        <p>Ask participants to explain in their own words what they think, in general, of the website. This helps assess whether the language used is clear and easy to understand. 
                        As well as identify any confusion or misunderstandings they experienced while using it.</p> 
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio-section" id="styleguide">
            <div className="divider-container w-container">  
                <h2 className="portfolio-title">Style guide</h2>
                <p className="portfolio-description">I was mindful to chose colors that would work well with a dark theme - A dark blue background can convey a sense of reliability and stability, while a lighter shade of blue can be used for buttons and other interactive elements.</p>
                <div className="wireframes-layout-grid">
                    <ImgLoad value="1.75" className="hoyBank__img" id="L~Lg|h~qaeE1j[j[f6fkjZj[j[ay" src={styleguide1}/> 
                    <ImgLoad value="1.75" className="hoyBank__img" id="L~Lg|h~qaeE1j[j[f6fkjZj[j[ay" src={styleguide2}/> 
                    
                </div>
                
                    
                
                
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">  
                <h2 className="portfolio-title">Final Designs</h2>
                <p className="portfolio-description">All these components culminate in the final designs, which are seamlessly responsive and user-friendly across all devices. The use of static mockups was instrumental in visualizing the end product before moving on to the development phase.</p>
                <ImgLoad value="1.75" className="hoyBank__img" id="L~Lg|h~qaeE1j[j[f6fkjZj[j[ay" src={mockupcollection}/> 
                
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">  
                <h2 className="portfolio-title">Technologies used</h2>
                <p className="portfolio-description">This were the <strong>main technologies I used for the implementation</strong> of the project: </p>
                
                 <ImgLoad value="1.75" className="technologies_img" id="L~Lg|h~qaeE1j[j[f6fkjZj[j[ay" src={technologies}/>
                
                
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">  
                <h2 className="portfolio-title">Dynamic Mockups</h2>
                <p className="portfolio-description">This is an immersive preview of the project, featuring visuals that demonstrate the functionality of the website's features.</p>
                <p className="portfolio-description"><strong>To delve deeper into the project, explore the website firsthand:</strong> <a href="https://hoy-bank.netlify.app/">https://hoy-bank.netlify.app</a></p>
                <div className="horizontal-grid">
                    <ImgLoad value="1.75" className="hoyBank__img" id="L~Lg|h~qaeE1j[j[f6fkjZj[j[ay" src={mockup}/> 
                    <ImgLoad value="1.75" className="hoyBank__img" id="L~Lg|h~qaeE1j[j[f6fkjZj[j[ay" src={mockup2}/> 
                </div>
            </div>
        </div>

        <div className="portfolio-section">
            <div className="divider-container w-container">
                <h4 className="portfolio-tag color-grey">Part 4</h4>    
                <h2 className="portfolio-title">Next Steps</h2>
                <p className="portfolio-description">Next steps should include additional user research and usability testing, expanding the landing page to a full functional platform and go beyond the MVP.</p>
                <ol className="portfolio-list" role="list">
                    <li><strong>Design the full platform website</strong>, including navbar tasks such as Features, Product and Clients.</li>
                    <li><strong>Usability testing</strong> of the smartphone version with posible real users of online digital banks.</li>
                    <li>Conduct <strong>user interviews or surveys</strong> to develop analysis reports that are tailored to digital bank users.</li>
                    <li>A more <strong>in depth analysis</strong> of existing digital bank options currently on the market.</li>
                    <li>Explore <strong>more user personas</strong> and try to build a <strong>smartphone dedicated app</strong>. That the users can use safely and easily.</li>    
                </ol>
            </div>
        </div>
        

    </div>
    );
};

export default HoyBank;