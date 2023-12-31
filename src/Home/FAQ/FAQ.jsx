import React from "react";
import { Accordion } from "flowbite-react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="lg:flex justify-between items-center py-36">
      <div className="flex flex-col lg:justify-start lg:items-start items-center gap-5">
        <h4 className="text-3xl text-center lg:text-start lg:text-5xl font-bold uppercase">
          FAQ's!
        </h4>
        <p className="lg:w-1/2 text-[4.5vw] lg:text-lg lg:text-start text-center faq_title_text">
          The goal is to serve you the best quality experience 🚀
        </p>
        <button className="bg-[#CCFD01] lg:w-1/4 w-1/2 rounded-full px-3 py-2 text-black cursor-pointer">
          Learn More
        </button>
      </div>
      <Accordion className="border border-[#CCFD01] accordion_section">
        <Accordion.Panel>
          <Accordion.Title className="text-white  hover:text-black hover:bg-[#CCFD01]">
            Do you work with small businesses?
          </Accordion.Title>
          <Accordion.Content className="w-[25vw] accordion_content">
            <p className="mb-2 text-white dark:text-gray-400 accordion_text">
              <p>
                Yes, we do, we work for all types of businesses all over the
                world. Many businesses from all over the world have made their
                business stand out.
              </p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-white  hover:text-black hover:bg-[#CCFD01]">
            Do you work with small businesses?
          </Accordion.Title>
          <Accordion.Content className="w-[25vw] accordion_content">
            <p className="mb-2 text-white dark:text-gray-400 accordion_text">
              <p>
                Yes, we do, we work for all types of businesses all over the
                world. Many businesses from all over the world have made their
                business stand out.
              </p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-white  hover:text-black hover:bg-[#CCFD01]">
            Do you work with small businesses?
          </Accordion.Title>
          <Accordion.Content className="w-[25vw] accordion_content">
            <p className="mb-2 text-white dark:text-gray-400 accordion_text">
              <p>
                Yes, we do, we work for all types of businesses all over the
                world. Many businesses from all over the world have made their
                business stand out.
              </p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default FAQ;
