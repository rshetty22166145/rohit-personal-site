import React from 'react';

const projects = [
  {
    name: 'Toronto Fitness Club Website',
    description: 'Full-stack gym management site with login, subscriptions, and workout planner built with Django and React.',
    link: 'https://github.com/rshetty22166145/TFC-GYM',
  },
  {
    name: 'CovidSim',
    description: 'COVID spread simulation using real-world data with Python, NumPy, and visualization via Plotly.',
    link: 'https://github.com/rshetty22166145/Covid-Sim',
  },
  {
    name: 'Reinforcement Learning for 2048',
    description:
      'Research comparing SARSA, Deep Q-Learning, and Monte Carlo Tree Search (MCTS) applied to the 2048 game, including MCTS extensions for improved gameplay.',
    link: 'https://github.com/rshetty22166145/csc311_RLproject/tree/main',
  },
  {
    name: 'CSC413 Final Project: Sarcasm Detection',
    description:
      'Developed and evaluated neural network models (RNNs, LSTM, GRU, RoBERTa) for sarcasm detection using Sarcasm Corpus v2 and SARC datasets; implemented data preprocessing, tokenization, and hyperparameter tuning; achieved improved sarcasm classification performance and analyzed model limitations.',
    link: 'https://github.com/rshetty22166145/SarcasmDetection/tree/main',
  },
];

const Projects = () => (
  <section
    id="projects"
    className="py-16 px-8 bg-black border-t border-gray-700"
  >
    <h2 className="text-4xl font-bold mb-2 text-code-white border-b border-gray-700 pb-4">
      Projects 🛠️
    </h2>
    <p className="mb-8 text-gray-400 italic">Click the boxes to find out more!</p>

    <div className="space-y-6 max-w-full">
      {projects.map(({ name, description, link }, idx) => (
        <a
          key={idx}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all max-w-full"
        >
          <h3 className="text-lg font-semibold text-green-400 mb-2">{name}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
