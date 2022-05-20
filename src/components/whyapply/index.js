import React from 'react';
import './style.scss';
import Arrow from "../../assets/images/arrow.svg";

const WhyApply = () => {
    return (
      <div className='grid'>
            <div className='big-title'>
                <div className='blocks'>
                    <div className='row'>
                        <div className='square'></div>
                        <div className='square'></div>
                        <div className='square'></div>
                        <div className='square'></div>
                        <div className='oval' id='oval1'></div>
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
                        <div className='oval' id='oval2'></div>
                        <div className='square'></div>
                        <div className='square'></div>
                    </div>
                    <div className='row'>
                        <div className='square'></div>
                        <div className='square'></div>
                        <div className='square'></div>
                    </div>
                </div>
                <h1>WHY APPLY?</h1>
            </div>
            
            
            <div className='text-block1'>
                <div className='text-title'>
                    <img src={Arrow} />
                    <h2>Build Up your portfolio and resume</h2>
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
                    <h2>Network with peers and industry professionals</h2>
                </div>
                <p>
                    Get to collaborate with students from different backgrounds and 
                    connect with mentors and impactful nonprofits in the community!
                </p>
            </div>
            <div className='text-block1' id='second-row'>
                <div className='text-title'>
                    <img src={Arrow} />
                    <h2>Put classroom knowledge to use in a real-world setting</h2>
                </div>
                <p>
                    Apply your academic design knowledge this summer by solving 
                    real-world problems and taking part in social justice initiatives.
                </p>
            </div>
            <div className='text-block2' id='second-row'>
                <div className='text-title'>
                    <img src={Arrow} />
                    <h2>Create meaningful solutions for social impact nonprofits</h2>
                </div>
                <p>
                    Work directly to address current social issues that you care about 
                    and be a part in spreading awareness through universal design thinking!
                </p>
            </div>

            <h2 className='subtitle'>
                Here’s what previous participants of Level Up and Power Up have to 
                say about the program:
            </h2>
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
      </div>
    )
  }
  
  export default WhyApply;