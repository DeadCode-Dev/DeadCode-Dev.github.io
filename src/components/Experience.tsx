"use client";
import Experiences from "@/config/Experiences";
import Image from "next/image";
import { useState } from "react";

const WorkExperience = () => {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handlePageChange = (nextPage: number) => {
    setAnimating(true);
    setTimeout(() => {
      setPage(nextPage);
      setAnimating(false);
    }, 200);
  };

  // Swipe handling
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;

    if (Math.abs(swipeDistance) > 50) {
      // swipe left = next, swipe right = previous
      if (swipeDistance > 0) {
        handlePageChange(page < Experiences.length - 1 ? page + 1 : 0);
      } else {
        handlePageChange(page > 0 ? page - 1 : Experiences.length - 1);
      }
    }
  };

  return (
    <section
      id="experience"
      className="bg-[url('/skills.png')] bg-cover bg-center bg-no-repeat bg-secondary h-screen w-full flex flex-col items-center overflow-hidden px-4 sm:px-8"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl text-primary font-bold mt-8 mb-4 text-center font-decorative">
        Work Experience
      </h1>

      <div className="flex items-center justify-center w-full max-w-7xl flex-grow">
        {/* Left Button - Hidden on mobile */}
        <button
          className="p-2 sm:p-4 hidden sm:block"
          onClick={() =>
            handlePageChange(page > 0 ? page - 1 : Experiences.length - 1)
          }
        >
          <Image src="/arrow_left.png" alt="Previous" width={32} height={32} />
        </button>

        {/* Skill Card with Swipe */}
        <div
          className={`mx-2 sm:mx-6 flex-grow max-w-3xl w-full p-6 sm:p-9 transition-all duration-300 transform font-readable ${
            animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
              {Experiences[page].duration}
            </h2>
          <h2 className="text-lg sm:text-xl font-bold text-font-secondary text-center mb-4">
            {Experiences[page].company}
          </h2>
          <h2 className="text-lg sm:text-xl font-bold text-font-secondary text-center mb-4">
            {Experiences[page].role}
          </h2>
          <div className="flex flex-wrap text-white justify-center gap-3 max-h-96 overflow-y-auto">
            {Experiences[page].description}
          </div>
        </div>

        {/* Right Button - Hidden on mobile */}
        <button
          className="p-2 sm:p-4 hidden sm:block"
          onClick={() =>
            handlePageChange(page < Experiences.length - 1 ? page + 1 : 0)
          }
        >
          <Image src="/arrow_right.png" alt="Next" width={32} height={32} />
        </button>
      </div>
    </section>
  );
};

export default WorkExperience;
