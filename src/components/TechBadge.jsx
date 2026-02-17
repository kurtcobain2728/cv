import React from 'react';

const techIcons = {
  'React.js': '⚛️',
  'React Native': '⚛️',
  'TypeScript': '📘',
  'PostgreSQL': '🐘',
  'API REST': '🔌',
  'SQLite': '💾',
  'Node.js': '🟢',
};

const techColors = {
  'React.js': 'bg-blue-100 text-blue-700 border-blue-300',
  'React Native': 'bg-cyan-100 text-cyan-700 border-cyan-300',
  'TypeScript': 'bg-blue-100 text-blue-800 border-blue-300',
  'PostgreSQL': 'bg-indigo-100 text-indigo-700 border-indigo-300',
  'API REST': 'bg-green-100 text-green-700 border-green-300',
  'SQLite': 'bg-gray-100 text-gray-700 border-gray-300',
  'Node.js': 'bg-green-100 text-green-800 border-green-300',
};

const TechBadge = ({ tech }) => {
  const icon = techIcons[tech] || '🔧';
  const colorClass = techColors[tech] || 'bg-muted/20 text-neutral border-muted';

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${colorClass}`}>
      <span className="text-base">{icon}</span>
      {tech}
    </span>
  );
};

export default TechBadge;
