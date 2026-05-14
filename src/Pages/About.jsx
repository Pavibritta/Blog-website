import React from "react";
import Pavi from "../assets/images/pavi.jpeg";

const About = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-[var(--color-primary)]">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={Pavi}
              alt="Pavithra"
              className="w-80 rounded-2xl shadow-xl border-4 border-[var(--color-secondary)]"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-4xl font-bold mb-6 text-[var(--color-bg)]">
              About Me
            </h3>

            <p className="text-lg leading-relaxed text-[var(--color-text)] mb-6">
              I am a passionate <strong>Frontend Developer</strong> who enjoys
              creating clean, responsive, and user-friendly websites. I love
              transforming ideas into modern web interfaces using technologies
              like React and Tailwind CSS.
            </p>

            <p className="text-lg leading-relaxed text-[var(--color-text)] mb-6">
              I completed my{" "}
              <strong>
                B.E. in Electronics and Communication Engineering{" "}
              </strong>
              and later developed a strong interest in web development. I enjoy
              building interactive dashboards, responsive layouts, and modern UI
              experiences.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-4 py-2 rounded-full bg-[var(--color-bg)] text-[var(--color-primary)] text-sm font-medium">
                HTML
              </span>
              <span className="px-4 py-2 rounded-full bg-[var(--color-bg)] text-[var(--color-primary)] text-sm font-medium">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 rounded-full bg-[var(--color-bg)] text-[var(--color-primary)] text-sm font-medium">
                JavaScript
              </span>
              <span className="px-4 py-2 rounded-full bg-[var(--color-bg)] text-[var(--color-primary)] text-sm font-medium">
                React
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
