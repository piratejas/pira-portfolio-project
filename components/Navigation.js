import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-orange md:py-6 md:mb-6 dark:bg-orange">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-semibold tracking-wider transition-colors text-black hover:text-white dark:text-white dark:hover:text-grey"
            }
          >
            about
          </a>
        </Link>
        <Link href="/">
          <a
            className={
              "font-semibold tracking-wider transition-colors text-black hover:text-white dark:text-white dark:hover:text-grey"
            }
          >
            work
          </a>
        </Link>
        <Link href="/">
          <a
            className={
              "font-semibold tracking-wider transition-colors text-black hover:text-white dark:text-white dark:hover:text-grey"
            }
          >
            stack
          </a>
        </Link>
        <Link href="/">
          <a
            className={
              "font-semibold tracking-wider transition-colors text-black hover:text-white dark:text-white dark:hover:text-grey"
            }
          >
            contact
          </a>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navigation;
