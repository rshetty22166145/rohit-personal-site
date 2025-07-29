import React from 'react';
import { Link } from 'react-scroll';

const sections = ['intro', 'education','experience', 'projects', 'interests'];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-20 bg-black border-r border-gray-700 flex flex-col items-center py-8 space-y-8">
      {sections.map(section => (
        <Link
          key={section}
          to={section}
          smooth={true}
          duration={500}
          className="w-8 h-8 rounded-full bg-gray-700 hover:bg-green-500 cursor-pointer"
          activeClass="bg-green-500"
          spy={true}
        >
          <span className="sr-only">{section}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
