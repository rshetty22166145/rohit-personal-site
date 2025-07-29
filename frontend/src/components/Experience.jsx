import React from 'react';

const experiences = [
  {
    company: 'Amazon',
    role: 'Software Engineer Intern',
    dates: 'May 2025 – Jul 2025',
    logo: '/images/companies/amazon.png',
    summary: [
      'Built an onboarding app with AWS Lambda and API Gateway to alert users on compliance violations.',
      'Implemented OWASP security hardening to enhance reliability.',
    ],
  },
  {
    company: 'PlayStation',
    role: 'Software Development Intern',
    dates: 'May 2024 – May 2025',
    logo: '/images/companies/playstation.png',
    summary: [
      'Revamped Payment Instruments API to improve fraud detection and reduce service calls.',
      'Built CI pipeline with Jenkins and Playwright test framework, cutting manual QA time by 30%.',
    ],
  },
  {
    company: 'Bell',
    role: 'Full Stack Developer Intern',
    dates: 'May 2023 – Aug 2023',
    logo: '/images/companies/bell.png',
    summary: [
      'Optimized backend OracleDB queries, boosting performance 4x.',
      'Developed unit tests for connectivity and speed indicators in the dashboard.',
    ],
  },
];

const Experience = () => (
  <section
    id="experience"
    className="py-16 px-8 bg-black border-t border-gray-700"
  >
    <h2 className="text-4xl font-bold mb-10 text-code-white border-b border-gray-700 pb-4">
      Experience 💼 
    </h2>

    <ul className="space-y-8">
      {experiences.map(({ company, role, dates, logo, summary }, idx) => (
        <li
          key={idx}
          className="flex space-x-6 bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all"
        >
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-14 h-14 object-contain rounded-md"
          />
          <div>
            <h3 className="text-lg font-semibold text-green-400">{role}</h3>
            <p className="text-gray-300">{company}</p>
            <p className="text-sm text-gray-500 italic mb-2">{dates}</p>
            {summary.map((line, i) => (
              <p key={i} className="text-gray-400 text-sm leading-snug">
                {line}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;
