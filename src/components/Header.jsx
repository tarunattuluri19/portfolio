import SocialLinks from "./SocialLinks";
import { useEffect } from "react";
import brandLogo from "../assets/letter-t-.png";

const Header = () => {
  useEffect(() => {
    let favicon = document.querySelector('link[rel="icon"]');

    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }

    favicon.type = "image/png";
    favicon.href = brandLogo;
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col gap-4 mb-12 animate-slideInDown">
        <h1 className="font-bold text-4xl lg:text-6xl text-gray-900 dark:text-white">
          Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Tarun Attuluri</span> 👋
        </h1>
        <p className="text-lg lg:text-xl text-sky-700 dark:text-cyan-300 animate-slideInUp">
          Open for Full Time Software Engineer | Java Full Stack Development | AWS Developer | AWS Engineer | Frontend Developer | React Developer
        </p>
      </div>

      <div className="space-y-4 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
        <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">About</h2>
        <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-semibold text-sky-800 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200">
              <span>Software Engineer</span>
              <span className="rounded-full bg-sky-600 px-2 py-0.5 text-xs text-white dark:bg-cyan-400 dark:text-gray-900">
                2
              </span>
            </span>{" "}
            with <span className="rounded-full bg-sky-600 px-2 py-0.5 text-xm text-white dark:bg-cyan-400 dark:text-gray-900">
                3.6+
              </span> years of professional experience{" "}
            in <u>Java Full Stack Development</u> and <u>AI-assisted software engineering</u>. Skilled in building scalable microservices and high-performance web applications using{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              <i>Java, Spring Boot, ReactJS, Kafka, Redis, PostgreSQL, AWS, AWS Lambda, AWS EC2, AWS S3, AWS DynamoDB, AWS Devops</i>
              
            </span>
            .
          </p>
          <p>
            Experienced in designing RESTful APIs, implementing secure authentication using JWT, OAuth2, and SSO, and optimizing application performance. Proficient in Docker, CI/CD pipelines, and event-driven architectures within Agile development environments.
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              3X AWS Certified
            </span>{" "}
            and experienced with Claude Code and GitHub Copilot to accelerate feature delivery, debugging, and unit test generation.
          </p>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Header;
