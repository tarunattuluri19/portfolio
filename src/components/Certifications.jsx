import React from 'react';
import Chip from './Chip';

const certifications = [
    "AWS Certified Cloud Practitioner",
    "Microsoft Azure Fundamentals AZ-900"
]

function Certifications() {
  return (
    <div className="py-8">
    <h2 className="mb-6 font-semibold text-2xl text-white">
      Certifications
    </h2>
    <div className="flex flex-wrap -ml-1">
      {certifications.map((skill, index) => (
        <Chip key={index}>{skill}</Chip>
      ))}
    </div>
  </div>
  )
}

export default Certifications