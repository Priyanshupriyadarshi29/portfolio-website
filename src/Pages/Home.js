import React from "react";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  return (
    <main className="h-[85vh] w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading">
          Hi, 👋<br />My Name is
        </h1>
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-2">
          {name}
        </h2>
        <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-dark-heading dark:text-light-heading mt-2">
          {tagline}
        </h3>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          className="w-64 md:w-80 lg:w-96 rounded-full object-cover"
          src={img}
          alt={`Profile of ${name}`}
        />
      </div>
    </main>
  );
}

export default Home;
