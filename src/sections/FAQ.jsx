import React, { useState } from "react";
import PlusImage from '../assets/add-circle.svg'
import DropDown from '../assets/arrow-drop-down.svg'
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get a Referral Code?",
      answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "How do I get a Referral Code?",
      answer: "Get Notified Soon",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-8 py-12 bg-primary">
      <div className="bg-white p-8 bg-opacity-5 rounded-lg max-w-3xl my-10 mx-auto">

        <h2 className="text-center border-b border-gray-600 text-yellow-300 text-2xl font-bold pb-6 font-mono">FAQs</h2>


        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-600 py-4 flex flex-col"
          >

            <div
              className="flex justify-between items-center cursor-pointer text-white"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-lg">{faq.question}</p>
              <span className="text-gray-400">
                {openIndex === index ? <img src={DropDown} width={25} height={25} alt="Arrow" /> : <img src={PlusImage} width={25} height={25} alt="Arrow" />}
              </span>
            </div>


            {openIndex === index && faq.answer && (
              <p className="text-sm text-gray-400 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

