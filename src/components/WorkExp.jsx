import { useState } from "react";
import Card from "./Card";

const exp = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsa_q5ZQjUEN7pcn7aQ6mOev0DYcJWfWIZA&s",
    company: "Cognizant",
    role: "Software Engineer",
    duration: "September 2023 - Present",
    description: `Project: Societe Generale / Oxford University Press
Technologies: Java 17, ReactJS, Spring Boot, Microservices, REST APIs, PostgreSQL, JUnit5, Kafka, Docker, AWS

• Developed an authentication microservice using ReactJS and Spring Boot with role-based hierarchy for services and dependent platforms, utilizing Redux as primary state management
• Full-Stack developer for Societe Generale client project: implemented modals, bootstrap components, popups, hovers, tables, pagination and advanced UI features on frontend; RESTful APIs and optimized CRUD operations on backend
• Completed user-stories and tickets, increasing development velocity by 30% throughout sprints
• Optimized frontend page loading by 40% through code optimization and debugging, achieving 70% client satisfaction rate
• Developed and implemented role-based access control (RBAC) for applications using Single-Sign-On (SSO)
• Implemented JWT and Auth0 authentication systems with best security practices for secure login redirections
• Gained hands-on experience with CI/CD pipelines and Git version control for collaborative development`,
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsa_q5ZQjUEN7pcn7aQ6mOev0DYcJWfWIZA&s",
    company: "Cognizant",
    role: "Intern - Full Stack Developer",
    duration: "January 2023 - August 2023",
    description: `• Trained on MERN (MongoDB, Express, React, Node.js) and Java tech stack fundamentals
• Developed software solutions for clients in healthcare and finance sectors
• Collaborated with senior developers to create an online banking system enabling users to manage accounts, transfer funds, and pay bills
• Gained expertise in database design, REST API development, and frontend component architecture
• Awarded Best Techie Award among 200 interns for outstanding performance and technical excellence
• Worked on agile development practices and participated in daily standup meetings and sprint planning`,
  },
];

const WorkExp = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="py-16 animate-slideInUp">
      <h2 className="mb-8 font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white">
        Work Experience
      </h2>
      <div className="space-y-4">
        {exp.map((e, index) => (
          <Card
            key={e.company}
            index={index}
            data={e}
            isOpen={isOpen}
            onClick={(num) =>
              setIsOpen((curr) => (curr === num + 1 ? null : num + 1))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
