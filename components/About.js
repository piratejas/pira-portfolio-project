import React from "react";
import Image from "next/image";
import profile from "../public/SoC_avatar.png";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col text-center lg:text-left">
        <div className="flex-shrink-0 lg:mt-10 lg:px-4 mb-10 drop-shadow">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full dark:bg-orange"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
        <div className="lg:px-4 lg:mt-12">
          <h1 className="text-2xl font-bold text-orange lg:text-5xl dark:text-white">
            Pira Tejasakulsin
          </h1>
          <h2 className="text-2xl font-bold text-black lg:text-4xl dark:text-orange">
            Software Developer
          </h2>
          <div className="mt-6 text-black dark:text-white">
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
