import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Interests from './components/Interests';

function App() {
  return (
    <div className="flex">
      <Navbar />
      <main className="ml-20 flex-1">
        <Intro />
        <Education />
        <Experience />
        <Projects />
        <Interests />
      </main>
    </div>
  );
}

export default App;
