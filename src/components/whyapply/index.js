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
                    <h2>Lorem ipsum dolor sit amet</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id 
                    laoreet faucibus placerat volutpat aliquam. Orci ut ultricies 
                    ac mi. Est, amet, viverra interdum eu mattis lobortis felis.
                </p>
            </div>
            <div className='text-block2'>
                <div className='text-title'>
                    <img src={Arrow} />
                    <h2>Lorem ipsum dolor sit amet</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id 
                    laoreet faucibus placerat volutpat aliquam. Orci ut ultricies 
                    ac mi. Est, amet, viverra interdum eu mattis lobortis felis.
                </p>
            </div>
            <div className='text-block1' id='second-row'>
                <div className='text-title'>
                    <img src={Arrow} />
                    <h2>Lorem ipsum dolor sit amet</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id 
                    laoreet faucibus placerat volutpat aliquam. Orci ut ultricies 
                    ac mi. Est, amet, viverra interdum eu mattis lobortis felis.
                </p>
            </div>
            <div className='text-block2' id='second-row'>
                <div className='text-title'>
                    <img src={Arrow} />
                    <h2>Lorem ipsum dolor sit amet</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id 
                    laoreet faucibus placerat volutpat aliquam. Orci ut ultricies 
                    ac mi. Est, amet, viverra interdum eu mattis lobortis felis.
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