import { useState } from "react";
import Card from "./Card";

const exp = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsa_q5ZQjUEN7pcn7aQ6mOev0DYcJWfWIZA&s",
    company: "Cognizant",
    role: "Software Engineer",
    duration: "September 2023 - Present",
    description: `Project: Societe Generale / Oxford University Press
  Technologies: Java 17, ReactJS, Redux, Spring Boot, Microservices, REST APIs, PostgreSQL, JUnit5, Kafka, Docker, AWS

  • Developed authentication microservices using Spring Boot, ReactJS, Redux, JWT, and SSO for secure role-based enterprise access
  • Built and enhanced scalable full-stack applications with RESTful APIs, optimized CRUD operations, pagination, tables, modals, and responsive UI components
  • Integrated Auth0 and JWT-based authentication mechanisms for secure login flows and authorization management
  • Leveraged Claude Code and GitHub Copilot to accelerate debugging, feature implementation, and unit test generation
  • Improved sprint delivery velocity by 30% through timely completion of user stories and Agile collaboration
  • Worked with Docker and CI/CD pipelines using Git and Jenkins for streamlined deployment and release processes
  • Engineered a unified ReactJS/Redux portal by consolidating three enterprise applications into one interface for Société Générale identity and access management
  • Developed Spring Boot microservices and REST APIs for production access requests across Unix, Windows, Sybase, Azure, and AWS environments
  • Built secure role-based workflows for request creation, approvals, and access provisioning across cross-functional teams
  • Integrated enterprise APIs to automate request routing, approval workflows, and access provisioning across distributed systems
  • Optimized ReactJS application performance using Redux and React Router, reducing page load time by 40%
  • Implemented Kafka-based asynchronous communication between services for scalable event-driven workflows`,
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsa_q5ZQjUEN7pcn7aQ6mOev0DYcJWfWIZA&s",
    company: "Cognizant",
    role: "Full Stack Intern",
    duration: "January 2023 - August 2023",
    description: `• Developed a proof of concept for Cognizant's internal business group using external APIs, Java, Spring Boot, AWS, REST APIs, authentication, and authorization
  • Implemented a reliable and scalable Employee Management System during the internship at Cognizant`,
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
            key={`${e.company}-${e.role}`}
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
