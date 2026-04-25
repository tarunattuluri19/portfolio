import { Mail, Linkedin, Github } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:tarunattuluri19@gmail.com",
      label: "Email",
    },
    {
      icon: Github,
      href: "https://github.com/tarunattuluri19",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tarunattuluri/",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex items-center space-x-6 py-6 animate-slideInUp" style={{ animationDelay: "0.4s" }}>
      {socialLinks.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover-lift"
          aria-label={link.label}
          style={{ animationDelay: `${0.5 + index * 0.1}s` }}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
