import React from "react";
import { blockquote, Avatar } from "flowbite-react";
import jasim from "../../assets/jasim-1.jpg";
import quote from "../../assets/icons8-quote-48.png";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="lg:flex gap-11 justify-center items-center review-section">
      <figure className="mx-auto  mt-24">
        <img src={quote} alt="" />
        <blockquote>
          <p className="lg:text-4xl font-medium italic text-white dark:text-white">
            <p>
              Coupstudio is just awesome. <br /> Perfect choice for your
              marketing.<span className="text-[#CCFD01]">"</span>
            </p>
          </p>
        </blockquote>
        <figcaption className="mt-6 flex items-center space-x-3">
          <Avatar
            className="avatar-img lg:block hidden"
            alt="profile picture"
            img={jasim}
            rounded
            size="lg"
          />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 lg:text-xl font-medium text-white dark:text-white">
              Jasimul Haque
            </cite>
            <cite className="pl-3 lgtext-xl text-gray-500 dark:text-gray-400">
              CEO at Eternce
            </cite>
          </div>
        </figcaption>
      </figure>
      <div className="lg:w-1 lg:h-screen bg-[#CCFD01]"></div>
      <div className="lg:hidden w-40 mt-10 h-1 bg-[#CCFD01]"></div>
      <figure className="mx-auto  mt-24">
        <img src={quote} alt="" />
        <blockquote>
          <p className="lg:text-4xl font-medium italic text-white dark:text-white">
            <p>
              Coupstudio is just awesome. <br /> Perfect choice for your
              marketing.<span className="text-[#CCFD01]">"</span>
            </p>
          </p>
        </blockquote>
        <figcaption className="mt-6 flex items-center space-x-3">
          <Avatar
            className="avatar-img lg:block hidden"
            alt="profile picture"
            img={jasim}
            rounded
            size="lg"
          />
          <div className="lg:flex lg:items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 lg:text-xl font-medium text-white dark:text-white">
              Jasimul Haque
            </cite>
            <cite className="pl-3 lgtext-xl text-gray-500 dark:text-gray-400">
              CEO at Eternce
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Reviews;
