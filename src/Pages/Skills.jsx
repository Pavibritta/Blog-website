import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS / Tailwind", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "80%" },
    { name: "Bootstrap", level: "85%" },
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-[var(--color-primary)]">
      <h2 className="text-4xl font-bold text-center mb-16 text-[var(--color-bg)]">
        My Skills
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-[var(--color-bg)] font-semibold">
                {skill.name}
              </span>
              <span className="text-[var(--color-text)]">{skill.level}</span>
            </div>

            <div className="w-full h-3 rounded-full bg-gray-300 dark:bg-gray-700">
              <div
                className="h-3 rounded-full bg-[var(--color-bg)] transition-all duration-700"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;