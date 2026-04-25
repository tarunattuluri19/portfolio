import Chip from "./Chip";

const skillsData = {
  "Core Java & Backend": [
    "Java 17",
    "J2EE",
    "Spring Framework",
    "Spring Boot",
    "Spring Data JPA",
    "Multithreading",
    "Microservices",
    "REST APIs",
  ],
  "Frontend": [
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
  ],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB"],
  "DevOps & Cloud": [
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "CI/CD Pipelines",
    "Git",
  ],
  "Architecture & Design": [
    "Design Patterns",
    "SOLID Principles",
    "System Design",
    "Data Structures & Algorithms",
  ],
  "Testing & Tools": [
    "JUnit5",
    "Maven",
    "Postman",
    "IntelliJ IDEA",
    "Eclipse",
    "Agile Methodology",
  ],
  "Additional Technologies": [
    "Kafka",
    "JWT/Auth0",
    "Single-Sign-On (SSO)",
    "Redis",
    "Puppeteer",
  ],
};

function Skills() {
  return (
    <div className="py-16 animate-slideInUp">
      <h2 className="mb-12 font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white">
        Technical Skills
      </h2>
      
      <div className="space-y-8">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <div
            key={category}
            className="animate-slideInUp"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <h3 className="mb-4 font-semibold text-lg text-gray-800 dark:text-purple-300 flex items-center gap-2">
              <span className="text-2xl">›</span>
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  classNames={`px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-purple-500/50 bg-white dark:bg-gray-800 text-gray-700 dark:text-white font-medium text-sm hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover-lift animate-fadeIn`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
