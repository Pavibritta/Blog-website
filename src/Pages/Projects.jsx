import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Git Clone",
      desc: "Git homepage clone using HTML & Tailwind CSS.",
      link: "https://pavibritta.github.io/gitclonelandingpage/",
    },
    {
      title: "LinkedIn UI",
      desc: "Responsive LinkedIn UI clone with Tailwind.",
      link: "https://pavibritta.github.io/linkedinclone/",
    },
    {
      title: "Learning Website",
      desc: "Learning website with animations and modern UI.",
      link: "https://pavibritta.github.io/Internship-project-learning-website/",
    },
  ];

  return (
    <>
      <section className="min-h-screen px-6 py-20 bg-[var(--color-primary)]">
        {/* Title */}
        <h3 className="text-4xl font-bold text-center mb-16 text-[var(--color-bg)]">
          My Projects
        </h3>

        {/* Project Grid */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              bg-[var(--color-bg)]
              rounded-2xl
              p-6
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              flex
              flex-col
              justify-between
              "
            >
              <div>
                <h4 className="text-xl font-bold mb-3 text-[var(--color-text)]">
                  {project.title}
                </h4>

                <p className="text-[var(--color-text)]/80 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                mt-6
                self-start
                px-5 py-2
                rounded-full
                text-sm
                font-medium
                bg-[var(--color-secondary)]
                text-[var(--color-text)]
                hover:opacity-90
                transition
                "
              >
                View Project
              </a>
            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default Projects;