import React from 'react';
import './style.scss';
import Arrow from "../../assets/images/arrow.svg";
import Google from "../../assets/images/Google-logo.png";
import Amazon from "../../assets/images/Amazon-logo.png";
import Microsoft from "../../assets/images/Microsoft-logo.png";
import Sony from "../../assets/images/Sony-logo.png";

const WhyApply = () => {
    return (
      <div className='grid' id='benefits-section'>
            <div className='big-title'>
                <div className='blocks'>
                    <div className='row'>
                        <div className='square'></div>
                        <div className='square'></div>
                        <div className='square'></div>
                        <div className='square'></div>
                        <div className='rect'>
                            <div className='oval' id='oval1'></div>
                        </div>
                        
                    </div>
                    <div className='row'>
                        <div className='square'></div>
                        <div className='square'></div>
                        <div className='square'></div>
                        <div className='circle'></div>
                        <div className='square'></div>
                        <div className='square'></div>
                    </div>
                    <div className='row'>
                        <div className='square'></div>
                        <div className='rect'>
                            <div className='oval' id='oval2'></div>
                        </div>
                       
                        <div className='square'></div>
                        <div className='square'></div>
                    </div>
                    <div className='row'>
                        <div className='square'></div>
                        <div className='square'></div>
                        <div className='square'></div>
                    </div>
                </div>
                <h2>WHY APPLY?</h2>
            </div>
            
            
            <div className='text-block1'>
                <div className='text-title'>
                    <img src={Arrow} />
                    <h3>Build Up your portfolio and resume</h3>
                </div>
                <p>
                    Develop a unique and tangible project to share with industry 
                    professionals, along with a meaningful story of your journey 
                    as you Build Up your initial ideas to final deliverables.
                </p>
            </div>
            <div className='text-block2'>
                <div className='text-title'>
                    <img src={Arrow} />
                    <h3>Network with peers and industry professionals</h3>
                </div>
                <p>
                    Get to collaborate with students from different backgrounds and 
                    connect with mentors and impactful nonprofits in the community!
                </p>
            </div>
            <div className='text-block1'>
                <div className='text-title'>
                    <img src={Arrow} />
                    <h3>Put classroom knowledge to use in a real-world setting</h3>
                </div>
                <p>
                    Apply your academic design knowledge this summer by solving 
                    real-world problems and taking part in social justice initiatives.
                </p>
            </div>
            <div className='text-block2'>
                <div className='text-title'>
                    <img src={Arrow} />
                    <h3>Create meaningful solutions for social impact nonprofits</h3>
                </div>
                <p>
                    Work directly to address current social issues that you care about 
                    and be a part in spreading awareness through universal design thinking!
                </p>
            </div>

            <h3 className='subtitle1'>
                Here’s what previous participants of Level Up and Power Up have to 
                say about the program:
            </h3>
            <p className='testimony1'>
                “You often hear about how group projects suck in college, but having 
                a group of focused and knowledgeable teammates made the last 10 weeks 
                a breeze and I appreciate them.” <br></br> <br></br>

                — Adrian Valdez, Power Up participant
            </p>
            <p className='testimony2'>
                “You often hear about how group projects suck in college, but having 
                a group of focused and knowledgeable teammates made the last 10 weeks 
                a breeze and I appreciate them.” <br></br> <br></br>

                — Adrian Valdez, Power Up participant
            </p>

            <h3 className='subtitle2'>
                Here’s what previous participants of Level Up and Power Up now work at:
            </h3>
            <div className='social-proof'>
                <img src={Google} />
                <img src={Amazon} />
                <img src={Microsoft} />
                <img src={Sony} />
            </div>
      </div>
    )
  }
  
  export default WhyApply;