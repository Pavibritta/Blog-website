import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center text-center px-6 bg-[var(--color-primary)] text-[var(--color-bg)]">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold">
            Hi, I'm <span className="text-[var(--color-text)]">Pavithra</span>
          </h2>

          <p className="mt-5 text-lg text-[var(--color-text)]">
            Frontend Developer | HTML • Tailwind CSS • JavaScript • React
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            
            {/* Projects Button */}
            <NavLink
              to="projects"
              className="px-6 py-3 rounded-full bg-[var(--color-bg)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-secondary)] hover:text-[var(--color-bg)] transition"
            >
              View Projects
            </NavLink>

            {/* Contact Button */}
            <NavLink
              to="contact"
              className="px-6 py-3 rounded-full border border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-bg)] transition"
            >
              Contact Me
            </NavLink>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;