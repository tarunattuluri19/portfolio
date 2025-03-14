import { useState } from "react";
import Card from "./Card";

const exp = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsa_q5ZQjUEN7pcn7aQ6mOev0DYcJWfWIZA&s",
    company: "Cognizant",
    role: "Software Developer",
    duration: "Sept 2023 - Present",
    description: `• Worked with various teams to develop and implement new software applications.
•  Developed a comprehensive management system for a painting company to streamline operations and enhance customer experience. The system included:
Admin Panel: Built an admin interface to manage clients, staff assignments, schedules, and project statuses effectively.
Real-time Updates: Integrated real-time notifications for booking confirmations, order status updates, and reminders.`,
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsa_q5ZQjUEN7pcn7aQ6mOev0DYcJWfWIZA&s",
    company: "Cognizant",
    role: "Intern",
    duration: "Jan 2023 - July 2023",
    description: `• Trained on MERN tech stack
•  Developed software solutions for clients in the healthcare and finance sectors.
•  Worked with a team of developers to create an online banking system that allows users to manage their accounts, transfer funds, and pay bills.`,
  },
];

const WorkExp = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="py-8">
      <h2 className="mb-6 font-semibold text-2xl text-white">
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
