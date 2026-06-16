import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const categories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', icon: `${DEVICON}/python/python-original.svg`, color: '#3776AB', featured: true },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg`, color: '#F7DF1E' },
      { name: 'PHP', icon: `${DEVICON}/php/php-original.svg`, color: '#777BB4' },
      { name: 'Java', icon: `${DEVICON}/java/java-original.svg`, color: '#ED8B00' },
      { name: 'C++', icon: `${DEVICON}/cplusplus/cplusplus-original.svg`, color: '#00599C' },
      { name: 'C', icon: `${DEVICON}/c/c-original.svg`, color: '#A8B9CC' },
      { name: 'SQL', icon: `${DEVICON}/azuresqldatabase/azuresqldatabase-original.svg`, color: '#e38c00' },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg`, color: '#E34F26', featured: true },
      { name: 'CSS3', icon: `${DEVICON}/css3/css3-original.svg`, color: '#1572B6', featured: true },
      { name: 'Bootstrap', icon: `${DEVICON}/bootstrap/bootstrap-original.svg`, color: '#7952B3' },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Django', icon: `${DEVICON}/django/django-plain.svg`, color: '#092E20', featured: true, invert: true },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MySQL', icon: `${DEVICON}/mysql/mysql-original.svg`, color: '#4479A1', featured: true },
      { name: 'MongoDB', icon: `${DEVICON}/mongodb/mongodb-original.svg`, color: '#47A248' },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: `${DEVICON}/git/git-original.svg`, color: '#F05032' },
      { name: 'GitHub', icon: `${DEVICON}/github/github-original.svg`, color: '#c9d1d9', invert: true },
      { name: 'VS Code', icon: `${DEVICON}/vscode/vscode-original.svg`, color: '#007ACC' },
      { name: 'Android Studio', icon: `${DEVICON}/androidstudio/androidstudio-original.svg`, color: '#3DDC84' },
    ],
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal(0.05);

  return (
    <section className="skills" id="skills">
      {/* Floating particles background */}
      <div className="skills-particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="skills-header"
        >
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Tools & Technologies
          </h2>
          <p className="section-subtitle" style={{ fontSize: '15px' }}>
            Technologies, frameworks, databases, and tools I work with.
          </p>
        </motion.div>

        <div className="skills-categories">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              className="skill-cat"
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + catIdx * 0.08 }}
            >
              <h3 className="skill-cat-label">{cat.name}</h3>
              <div className="skill-cat-grid">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className={`scard ${skill.featured ? 'scard-featured' : ''}`}
                    style={{ '--brand': skill.color }}
                    initial={{ opacity: 0, y: 18 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 + catIdx * 0.08 + i * 0.04 }}
                  >
                    <div className="scard-glow" />
                    <div className="scard-logo">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={skill.invert ? 'invert-icon' : ''}
                        loading="lazy"
                      />
                    </div>
                    <span className="scard-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
