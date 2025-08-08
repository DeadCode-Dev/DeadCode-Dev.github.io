"use client";
import Projects from "@/config/Projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MyProjects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handlePageChange = (nextPage: number) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentProjectIndex(nextPage);
      setAnimating(false);
    }, 200);
  };

  const handleScroll = (direction: "left" | "right") => {
    const totalProjects = Projects.length;
    if (direction === "left") {
      handlePageChange(
        (currentProjectIndex - 1 + totalProjects) % totalProjects
      );
    } else {
      handlePageChange((currentProjectIndex + 1) % totalProjects);
    }
  };

  // Swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        handleScroll("right");
      } else {
        handleScroll("left");
      }
    }
  };

  return (
    <section
      id="myprojects"
      className="bg-[url('/myprojects.png')] bg-cover bg-center bg-primary min-h-screen w-full flex flex-col items-center justify-start px-2 sm:px-4 py-8 overflow-x-hidden"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl text-secondary font-bold mb-16 text-center font-decorative">
        My Projects
      </h1>

      <div className="flex flex-col items-center justify-center w-full max-w-5xl px-2 sm:px-6 mx-auto">
        {/* Title Icon */}
        <div>
          <Image
            src="/Tempel.png"
            alt="My Projects"
            width={150}
            height={150}
            priority
          />
        </div>

        {/* Swipeable Project Viewer */}
        <div
          className="flex items-center gap-4 max-w-full overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow (hidden on mobile) */}
          <button
            className="p-2 sm:p-4 hidden sm:block"
            onClick={() => handleScroll("left")}
          >
            <Image
              src="/arrow_left.png"
              alt="Previous"
              width={32}
              height={32}
            />
          </button>

          {/* Project Card */}
          <div
            className={`flex-grow w-full max-w-7xl border-4 border-double border-font-secondary bg-black/10 transition-all duration-300 transform ${
              animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div className="flex flex-col">
              {/* Title */}
              <div className="flex items-center justify-center gap-4 p-4 text-font-secondary">
                <Image
                  src="/SkyRight.png"
                  alt="Scroll Right"
                  width={40}
                  height={40}
                />
                <span className="text-font-secondary truncate font-readable">
                  {Projects[currentProjectIndex].title}
                </span>
                <Image
                  src="/SkyLeft.png"
                  alt="Scroll Left"
                  width={40}
                  height={40}
                />
              </div>

              {/* Image & Description */}
              <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
                {/* Image */}
                <div className="relative flex-grow basis-1/2 flex items-center justify-center group">
                  <Link href={Projects[currentProjectIndex].link} className="absolute z-50 mix-blend-difference text-white text-xl font-semibold inset-0 flex items-center justify-center transition-all duration-300 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 font-readable">
                    Preview
                  </Link>
                  <Image
                    src={Projects[currentProjectIndex].image || "/projects/404.png"}
                    alt={Projects[currentProjectIndex].title}
                    width={300}
                    height={200}
                    className="rounded-md object-contain border-4 border-double border-font-secondary w-full h-auto max-w-full group-hover:blur-md group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col justify-between flex-grow basis-1/2 font-readable">
                  <p className="text-sm text-font mb-4 overflow-y-auto max-h-40">
                    {Projects[currentProjectIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {Projects[currentProjectIndex].tags.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-secondary text-font-secondary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow (hidden on mobile) */}
          <button
            className="p-2 sm:p-4 hidden sm:block"
            onClick={() => handleScroll("right")}
          >
            <Image src="/arrow_right.png" alt="Next" width={32} height={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
