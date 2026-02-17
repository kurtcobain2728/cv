import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      subtitle: t('projects.project1.subtitle'),
      description: t('projects.project1.description'),
      technologies: ['React.js', 'TypeScript', 'PostgreSQL'],
      images: [
        '/img_proyectos/unerg-ais/1.PNG',
        '/img_proyectos/unerg-ais/2.PNG',
        '/img_proyectos/unerg-ais/3.PNG',
        '/img_proyectos/unerg-ais/5.PNG',
        '/img_proyectos/unerg-ais/6.png',
        '/img_proyectos/unerg-ais/7.png',
      ]
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      subtitle: t('projects.project2.subtitle'),
      description: t('projects.project2.description'),
      technologies: ['React Native', 'TypeScript', 'API REST'],
      images: [
        '/img_proyectos/frito-cambio/1.jpg',
        '/img_proyectos/frito-cambio/2.jpg',
        '/img_proyectos/frito-cambio/3.jpg',
      ]
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      subtitle: t('projects.project3.subtitle'),
      description: t('projects.project3.description'),
      technologies: ['React Native', 'TypeScript', 'SQLite'],
      images: [
        '/img_proyectos/frito-music/1.jpg',
        '/img_proyectos/frito-music/2.jpg',
        '/img_proyectos/frito-music/3.jpg',
        '/img_proyectos/frito-music/4.jpg',
        '/img_proyectos/frito-music/5.jpg',
        '/img_proyectos/frito-music/6.jpg',
      ]
    }
  ];

  return (
    <section id="projects" className="scroll-mt-8">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 border-b-2 border-accent pb-2">
          {t('projects.title')}
        </h2>
      </ScrollReveal>
      <div className="space-y-8 sm:space-y-12">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
