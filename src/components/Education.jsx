import { useState } from "react";
import Card from "./Card";
const edu = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ77atGdoT1m07zq21unug5T5h7WRYneJi3w&s",
    company: "Madanapalle Institute of Technology and Science",
    role: "B.Tech / B.E",
    duration: "2019 - 2023",
    description: "B.Tech / B.E in Electronic and Communication Engg",
  },
];
const Education = () => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div className="py-16 animate-slideInUp">
      <h2 className="mb-8 font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white">
        Education
      </h2>
      <div>
        {edu.map((e, index) => {
          return (
            <Card
              index={index + 1}
              key={e.company}
              data={e}
              isOpen={isOpen}
              onClick={(num) => setIsOpen((curr) => (!curr ? num + 1 : null))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Education;
