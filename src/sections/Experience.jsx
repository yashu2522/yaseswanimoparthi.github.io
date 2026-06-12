const experiences = [
  {
    period: "Oct 2025 — May 2026",
    role: "Student Tutor",
    company: "Texas A&M University-Kingsville (TAMUK)",
    description:
      "Provided technical mentorship to 20+ students in data structures, algorithms, software development, and mathematical problem-solving, resolving 50+ technical issues per semester and strengthening analytical and communication skills.",
    technologies: ["Data Structures", "Algorithms", "Problem Solving", "Mathematics (Discrete Math, Applied Problem Solving)", "Debugging", "Technical Mentoring", "Code Review"],
    current: true,
  },
  {
    period: "June 2025 — May 2026",
    role: "Thesis Researcher ",
    company: "Texas A&M University-Kingsville (TAMUK)",
    description:
      "Designed a scalable 2D-to-3D virtual try-on system using deep learning and computer vision techniques to generate realistic garment visualization from a single RGB image.",
    technologies: ["Python", "PyTorch", "OpenPose", "SCHP" , "U²-Net" , "OpenCV" , "Flow Matching Transformer"],
  },
  {
    period: "Jan 2025 — May 2025",
    role: "Graduate Research Assistant",
    company: "Texas A&M University-Kingsville (TAMUK)",
    description:
      "Mentored 30+ students in Java, C++, and MySQL, strengthening communication skills and reinforcing strong software engineering fundamentals.",
    technologies: ["Java", "C++", "MySQL", "Object-Oriented Programming (OOP)", "Teaching & Mentoring", "Technical Communication", "Code Review", "Problem Solving"],
    current: true,
  },
  {
    period: "Aug 2024 — Dec 2024  ",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 5+ websites and applications, handling everything from design to deployment.",
     technologies: ["Java", "SpringBoot", "RESTful APIs", "React.js", "Angular", "Git & GitHub", "JavaScript","MySQL"],
    current: false,
  },
  {
    period: "Aug 2023 — Jul 2024",
    role: "Full Stack Developer",
    company: " Numetry Technologies Pvt. Ltd.",
    description:
      "Designed and developed scalable enterprise-grade applications using Java, Spring Boot, React.js, and Microservices architecture, building secure REST APIs and optimizing system performance and reliability through production monitoring, code reviews, and Agile best practices.",
    technologies: ["Java", "SpringBoot", "RESTful APIs", "React.js", "Angular", "Git & GitHub", "Agile Development", "CI/CD", "Postman", "REST API Integration", "SDLC", "JavaScript", "PHP", "MySQL"],
    current: false,
  },
  {
    period: "Jan 2023 — Jul 2023",
    role: "Full Stack Developer Intern",
    company: " Numetry Technologies Pvt. Ltd.",
    description:
      "Worked as a Full Stack Java Developer Intern at Numetry Technologies Pvt. Ltd., contributing to 5+ Spring Boot and React/Angular applications by building scalable features, integrating RESTful APIs, and improving code quality, resulting in a 30% reduction in bugs and enhanced system reliability.",
    technologies: ["Java", "SpringBoot", "RESTful APIs", "React.js", "Angular", "Git & GitHub", "JavaScript","MySQL"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            My professional journey from an eager beginner 
            to a software engineer focused on building scalable applications 
            and real-world solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
