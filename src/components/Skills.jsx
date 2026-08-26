import Chip from "./Chip";

const skillsData = {
  "Languages & Runtime": ["Java 17", "JavaScript"],
  "Backend & Architecture": [
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "Event-Driven Architecture",
    "Kafka",
    "gRPC (Conceptual)",
    "Redis",
    "Caching",
    "Load Balancing",
    "Observability",
    "Distributed Systems",
    "Design Patterns",
  ],
  "Frontend": [
    "ReactJS",
    "Redux",
    "Redux Async Thunk",
    "React Router",
    "HTML",
    "CSS",
  ],
  "Database & Cloud": [
    "PostgreSQL",
    "MySQL",
    "AWS Cloud",
    "AWS Lambda",
    "API Gateway",
    "SQS",
    "SNS",
    "CodePipeline",
    "IAM",
    "CloudWatch",
    "Indexing",
    "Transactions",
  ],
  "DevOps": [
    "Docker",
    "Jenkins",
    "CI/CD Pipelines",
  ],
  "Messaging": ["Apache Kafka"],
  "Security": ["JWT", "OAuth2", "SSO"],
  "Testing & Tools": [
    "JUnit 5",
    "Git",
    "GitHub Copilot",
    "Claude Code",
    "Postman",
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
