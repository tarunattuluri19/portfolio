import { Mail, Linkedin, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const email = "tarunattuluri19@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/tarunattuluri/";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      setCopySuccess("Failed to copy");
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-white dark:bg-black">
      <div className="max-w-2xl mx-auto animate-slideInDown">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-12">
          I'm always open to new opportunities and interesting projects
        </p>

        <div className="space-y-6">
          {/* Email Section */}
          <div
            className="group p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover-lift animate-slideInUp"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Email
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:items-center lg:justify-between bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <span className="text-gray-700 dark:text-gray-300 font-mono">
                {email}
              </span>
              <div className="flex flex-row gap-4">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                >
                  <Copy className="w-5 h-5 mr-2" />
                  {copySuccess || "Copy"}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Section */}
          <div
            className="group p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover-lift animate-slideInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center mb-4">
              <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                LinkedIn
              </h2>
            </div>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                View Profile
              </span>
              <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </a>
          </div>

          {/* Contact Message */}
          <div
            className="text-center mt-12 p-6 rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-800 animate-slideInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              Feel free to reach out! I'm excited to discuss new opportunities, collaborate on projects, or just chat about tech.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
