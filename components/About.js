import React from "react";
import Image from "next/image";
import profile from "../public/SoC_avatar.png";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col text-center lg:text-left">
        <div className="flex-shrink-0 lg:mt-10 lg:px-4 mb-10">
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
              I am a self-motivated full-stack developer proficient in
              JavaScript, HTML and CSS, seeking a role as a junior developer.
              After 10+ years in hospitality, I committed to changing my life
              and learning how to code. I am hoping now to find the opportunity
              to contribute my abilities as a creative and adaptable
              problem-solver while also continuing my personal development in a
              professional setting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
