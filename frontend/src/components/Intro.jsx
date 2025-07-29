import React from 'react';

const Intro = () => (
  <section
    id="intro"
    className="min-h-screen flex flex-col justify-center items-center p-8 text-center bg-black border-b border-gray-700"
  >
    <img
      src="/images/rohit.jpg"
      alt="Rohit Shetty"
      className="w-56 h-56 rounded-full mb-6 border-4 border-green-500 shadow-xl object-cover"
    />
    <h1 className="text-5xl font-bold mb-4 text-code-white">Rohit Shetty</h1>

    <p className="text-gray-400 space-x-4 mb-6">
      <a
        href="https://www.linkedin.com/in/rohit-shetty-0667461b4/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-400"
      >
        LinkedIn
      </a>
      <span>|</span>
      <a
        href="https://github.com/rshetty22166145"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-400"
      >
        GitHub
      </a>
      <span>|</span>
      <a
        href="/resume.pdf"
        download
        className="hover:text-green-400"
      >
        Resume
      </a>
    </p>

    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all w-full text-left">
      <p className="text-gray-300 text-lg leading-relaxed">
        👋 Hey guys! I am a 4th year CS student at UofT. This website showcases a basic summary of my work so far.  
        I am very interested in Systems and Machine Learning—always eager to build smarter and more efficient software.  
        Outside of work, I spend most of my time watching basketball and football, hitting the gym, and playing badminton.  
        I also enjoy cooking and love to travel. I’m based out of Toronto and am always excited to connect with others, so feel free to reach out!  
        <br /><br />
        Email:{' '}
        <a
          href="mailto:rohit.shetty@mail.utoronto.ca"
          className="text-green-400 hover:underline"
        >
          rohit.shetty@mail.utoronto.ca
        </a>
      </p>

      <p className="text-gray-400 text-base mt-4">
        📓 Check out my{' '}
        <a
          href="https://yourdomain.com/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          personal blog
        </a>{' '}
        —work in progress 🧰
      </p>
    </div>

    <p className="text-sm text-gray-400 italic text-left w-full mt-4">
        PS: I’m horrible with colors and design 🎨 — any tips are always appreciated!
    </p>
  </section>
);

export default Intro;
