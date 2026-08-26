import { Award, Cloud } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Best Techie Award",
    description: "Awarded for excellence among 200 students during Cognizant Internship",
    color: "from-purple-600 to-blue-600",
  },
  {
    icon: Cloud,
    title: "3X AWS Certified",
    description: "AWS Certified Developer - Associate, AI Practitioner, and Cloud Practitioner",
    color: "from-orange-500 to-yellow-500",
  },
];

function Achievements() {
  return (
    <div className="py-16 animate-slideInUp">
      <h2 className="mb-8 font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white">
        Achievements & Recognitions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div
              key={index}
              className="group p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover-lift animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${achievement.color} mb-4`}>
                <Icon size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                {achievement.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Achievements;
