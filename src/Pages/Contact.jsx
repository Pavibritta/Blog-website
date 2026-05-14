import React from "react";
import github from "../assets/images/GitHub.png";
import gmail from "../assets/images/gmail.avif";
import linkedin from "../assets/images/LinkedIn_logo_initials.png";

const Contact = () => {
  return (
    <>
      <section className="min-h-screen py-20 bg-[var(--color-primary)] flex flex-col justify-between">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Title */}
          <h3 className="text-4xl font-bold mb-6 text-[var(--color-bg)]">
            Contact Me
          </h3>

          {/* Description */}
          <p className="text-[var(--color-text)] mb-10 text-lg">
            Let’s build something amazing together 🚀
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="https://github.com/Pavibritta"
              target="_blank"
              rel="noopener noreferrer"
              className="
              p-4
              bg-[var(--color-bg)]
              rounded-full
              shadow-lg
              hover:scale-110
              transition
              "
            >
              <img src={github} alt="GitHub" className="h-10 w-10" />
            </a>

            <a
              href="mailto:pavithrarajase1@gmail.com"
              className="
              p-4
              bg-[var(--color-bg)]
              rounded-full
              shadow-lg
              hover:scale-110
              transition
              "
            >
              <img src={gmail} alt="Email" className="h-10 w-10" />
            </a>

            <a
              href="https://www.linkedin.com/in/pavithra-r-2621bb232/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              p-4
              bg-[var(--color-bg)]
              rounded-full
              shadow-lg
              hover:scale-110
              transition
              "
            >
              <img src={linkedin} alt="LinkedIn" className="h-10 w-10" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center  text-[var(--color-text)] text-sm">
          © 2026 Pavithra. All rights reserved.
        </footer>
      </section>
    </>
  );
};

export default Contact;
