import React from "react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <div className="sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-black dark:text-white">
        <div className="pb-0 mb-2 border-t-2 border-black dark:border-white"></div>
        <div className="flex flex-col-reverse justify-between lg:flex-row items-center">
          <p>Built with Next.js, Tailwind and Vercel</p>
          {theme === "dark" || resolvedTheme === "dark" ? (
            <div className="flex flex-wrap pt-0 pb-2 sm:space-x-4 space-x-2 font-bold">
              <a
                href="https://www.codewars.com/users/piratejas"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:text-orange"
              >
                codeWars
              </a>
              <a
                href="https://github.com/piratejas"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:text-orange"
              >
                gitHub
              </a>
              <a
                href="https://www.linkedin.com/in/piratejas/"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:text-orange"
              >
                linkedIn
              </a>
            </div>
          ) : (
            <div className="flex flex-wrap pt-0 pb-2 sm:space-x-4 space-x-2 font-bold">
              <a
                href="https://www.codewars.com/users/piratejas"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/codewars.png"
                  alt="codeWars logo"
                  className="rounded-full h-10 w-10 p-px object-scale-down transition-transform ease-in-out hover:scale-110 bg-white"
                />
              </a>
              <a
                href="https://github.com/piratejas"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/gitHub.png"
                  alt="gitHub logo"
                  className="rounded-full h-10 w-10 p-1 object-scale-down transition-transform ease-in-out hover:scale-110 bg-white"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/piratejas/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/linkedIn.png"
                  alt="linkedIn logo"
                  className="rounded-full h-10 w-10 p-px object-scale-down transition-transform ease-in-out hover:scale-110 bg-white"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
