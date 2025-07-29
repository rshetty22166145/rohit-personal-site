import React from 'react';

const education = {
  school: 'University of Toronto',
  degree: 'Honours Bachelor of Science in Computer Science',
  dates: 'Sept 2021 – May 2026',
  location: 'Toronto, Canada',
  coursework: [
    'Data Structures and Algorithms',
    'Advanced Operating Systems',
    'Deep Learning and Neural Networks',
    'Computer Security',
    'Computer Networking Systems'
  ],
  logo: '/images/companies/uoft.png',
};

const Education = () => (
  <section
    id="education"
    className="py-16 px-8 bg-black border-t border-gray-700"
  >
    <h2 className="text-4xl font-bold mb-10 text-code-white border-b border-gray-700 pb-4">
      Education 📚
    </h2>

    {/* Remove mx-auto and max-w-3xl so content stretches left */}
    <div>
      <div className="flex items-start space-x-6 bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all max-w-full">
        <img
          src={process.env.PUBLIC_URL + education.logo}
          alt="University of Toronto Logo"
          className="w-16 h-16 object-contain rounded-md mt-1"
        />
        <div>
          <h3 className="text-lg font-semibold text-green-400">{education.school}</h3>
          <p className="text-gray-300">{education.degree}</p>
          <p className="text-sm text-gray-500 italic mb-4">
            {education.dates} | {education.location}
          </p>

          <h4 className="text-xl font-semibold mb-2 text-code-white">Coursework</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            {education.coursework.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
