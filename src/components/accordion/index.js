import React, { useState } from "react";
import FaqTable from "../faqtable";
import './style.scss';

function Accordion() {
  const [faqs, setfaqs] = useState([
    {
      question: "Who is eligible?",
      answer:
        "Power Up applications are open to all current UCSD undergraduates and recent 2021 graduates. Please note that we are prioritizing underrepresented students who identify as BIPOC, first-gen, low-income, persons with disabilities and/or part of other underrepresented groups in the tech and design industry. Applicants should also have some knowledge of the design process and experience working in a collaborative environment.",
      open: false,
    },
    {
      question: "What is the time commitment?",
      answer:
        "For the best experience, you are expected to contribute 12-15 hours per week towards Power Up. Typically, you will have weekly meetings with your team, mentor, business partner, and the whole Power Up team. \n We understand that a whole year of remote learning can lead to burnout and fatigue, so we recommend that you carefully consider whether you can commit to this program for 10 weeks or not. We want to prioritize your wellbeing and ensure that teammates can contribute equally. Please reach out if you have any questions.",
      open: false,
    },
    {
      question: "How many people will be accepted?",
      answer:
        "Around 20 people will be admitted into the program with 5 teams total and 4-5 people per team.",
      open: false,
    },
    {
      question: "Who will my mentors be?",
      answer:
        "We can’t tell you just yet, but past mentors have been from Google, Facebook, Intuit, Figma, and more! Mentors will be matched with teams at the beginning of the program after participants have been finalized.",
      open: false,
    },
    {
      question: "Can I request teammates?",
      answer:
        "Teams will be assigned, but you can list preferred teammates in your application. We cannot guarantee placement in the same team, but we will try to keep it in mind when forming teams.",
    },
    {
      question: "What roles are available?",
      answer:
        "You can apply to a max of 2 of the following: UX researcher, UI/UX designer, visual designer, content strategist, web builder, or marketing strategist.",
      open: false,
    },
    {
      question: "When is the application due?",
      answer: "Monday, June 14 at 11:59PM PT.",
      open: false,
    },
    {
      question: "Will this program be in person or remote?",
      answer: "Power Up will be fully remote.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i == index) {
          faq.open = !faq.open;
        } else {
          faq.open = false; //keeps the panel closed
        }
        return faq;
      })
    );
  };

  return (
    <div>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FaqTable faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
