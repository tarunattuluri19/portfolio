import { ExternalLink } from "lucide-react";
import Chip from "./Chip";

const certifications = [
  {
    name: "AWS Developer Associate DVA-02",
    issuer: "Amazon Web Services",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    link: "https://www.credly.com/badges/ca3c251a-9ba6-4bb5-ae0d-a2c2280e4792/public_url",
  },
  {
    name: "AWS AI Practitioner AIP",
    issuer: "Amazon Web Services",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    link: "https://www.credly.com/badges/98caac0f-df60-4438-85a1-e514dff7c49b/public_url",
  },
  {
    name: "AWS Certified Cloud Practitioner CCP",
    issuer: "Amazon Web Services",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    link: "https://www.credly.com/badges/805c9165-1f2d-41c6-a5a2-8e2509017df6/public_url",
  },
  {
    name: "AZ-900 Azure Fundamentals",
    issuer: "Microsoft",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    link: "https://learn.microsoft.com/en-us/users/tarunattuluri19/credentials/41eefb1a4d0adb2c",
  },
  {
    name: "Claude Certified Architect - Foundations",
    issuer: "Anthropic",
    issuerLogo: "https://cdn.simpleicons.org/anthropic",
    link: "https://www.credly.com/badges/89fd52c0-04ac-4341-9aeb-4ee9e044065b/public_url",
  },
];

function Certifications() {
  return (
    <div className="py-16 animate-slideInUp">
      <h2 className="mb-8 font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white">
        Certifications
      </h2>
      <div className="flex flex-wrap gap-3">
        {certifications.map((certification) => (
          <a
            key={certification.name}
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${certification.name}`}
          >
            <Chip
              classNames="px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-blue-500/50 bg-white dark:bg-gray-800 text-gray-700 dark:text-white font-medium text-sm hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              <span className="inline-flex flex-col gap-1">
                <span className="inline-flex items-center gap-2">
                  {certification.name}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-normal text-gray-500 dark:text-gray-400">
                  <img
                    src={certification.issuerLogo}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 object-contain"
                  />
                  Issued by {certification.issuer}
                </span>
              </span>
            </Chip>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
