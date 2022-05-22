import React, { useState } from "react";
import FaqTable from "../faqtable";
import './style.scss';

function Accordion() {
  const [faqs, setfaqs] = useState([
    {
      question: "{WHO IS ELIGIBLE FOR BUILD UP?}",
      answer:
        "Registration is open to UCSD students and recent graduates of all levels and backgrounds. We encourage everyone to apply and share their own unique perspectives, knowledge, and skills!",
      open: false,
    },
    {
      question: "{WHAT IS THE TIME COMMITMENT?}",
      answer:
        "Build Up will require a 12-15 hour commitment per week, for 10 weeks.",
      open: false,
    },
    {
      question: "{HOW MANY PEOPLE WILL BE ACCEPTED?}",
      answer:
        "Build Up will have around 6 student teams. Teams will have a minimum of 4 and a maximum of 6 members, so there will be a total of 24-36 participants.",
      open: false,
    },
    {
      question: "{WHO WILL MY MENTORS BE?}",
      answer:
        "More information about mentors will be released in the coming week(s). There will be 6-8 design mentors and 6-8 marketing mentors, with 2-3 mentors assigned to each team.",
      open: false,
    },
    {
      question: "{CAN I REQUEST TEAMMATES?}",
      answer:
        "Yes! We cannot guarantee you will be placed with everyone you request, but we will take this into consideration when organizing teams.",
    },
    {
      question: "{WHAT ROLES ARE AVAILABLE?}",
      answer:
        "Each team in Build Up may be comprised of a Web Builder/Developer, UX Designer, UX Researcher, Visual Designer, and Marketing + Content Strategist. Roles are flexible depending on the number of people working on the project, the deliverables, and the level of difficulty.",
      open: false,
    },
    {
      question: "{WHEN IS THE APPLICATION DUE?}",
      answer: "Monday, June 14 at 11:59PM PT.",
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
