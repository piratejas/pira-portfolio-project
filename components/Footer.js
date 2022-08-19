import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-black dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-black dark:border-white"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>Built with Next.js, Tailwind and Vercel</p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-bold lg:pt-0">
            <a
              href="https://www.codewars.com/users/piratejas"
              className={"transition-colors hover:text-orange"}
              target="_blank"
              rel="noreferrer"
            >
              CodeWars
            </a>
            <a
              href="https://github.com/piratejas"
              className={"transition-colors hover:text-orange"}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/piratejas/"
              className={"transition-colors hover:text-orange"}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
