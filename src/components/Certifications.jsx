import React from 'react';
import Chip from './Chip';

const certifications = [
    "AWS Certified Cloud Practitioner",
    "Microsoft Azure Fundamentals AZ-900"
]

function Certifications() {
  return (
    <div className="py-16 animate-slideInUp">
    <h2 className="mb-8 font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white">
      Certifications
    </h2>
    <div className="flex flex-wrap gap-3">
      {certifications.map((skill, index) => (
        <Chip key={index} classNames="px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-blue-500/50 bg-white dark:bg-gray-800 text-gray-700 dark:text-white font-medium text-sm hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">{skill}</Chip>
      ))}
    </div>
  </div>
  )
}

export default Certifications