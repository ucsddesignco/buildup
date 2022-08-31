import React from 'react'
import "./styles.scss";
import ThanksGraphic from '../../assets/images/thanksGraphic.svg';
import RightVector from '../../assets/images/rightVector.svg';

function ShowcaseThanks() {

  const messagesArray = [
  {
    line: "To all the nonprofits for partnering with us in the second installment of our DEI initiative and giving students the chance to make a difference.",
  },
  {
    line: "To all the mentors for taking the time to guide and uplift a cohort of changemakers.",
  },
  {
    line: "To all the students for taking part in Build Up and collaborating to make an impact on these nonprofits.",
  },
];

  return (
    <div className='thanks' >
        <div className="top-container">
          <div className="text-container">
            <h2>THANK</h2>
            <h2>YOU</h2>
          </div>
          <img src={ThanksGraphic} alt="" />
        </div>
        <div className="bottom-container">
          {messagesArray.map((message) => (
            <div className="response-container">
              <img src={RightVector} alt="" />
              <p>{message.line}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ShowcaseThanks