import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    name: 'Programming Languages',
    icon: <Code2 size={18} />,
    iconClass: 'lang',
    skills: ['Python', 'PHP', 'SQL', 'C', 'C++', 'Java', 'JavaScript'],
  },
  {
    name: 'Frontend',
    icon: <Layout size={18} />,
    iconClass: 'frontend',
    skills: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    name: 'Backend & Databases',
    icon: <Server size={18} />,
    iconClass: 'backend',
    skills: ['Django', 'MySQL', 'MongoDB'],
  },
  {
    name: 'Tools & Platforms',
    icon: <Wrench size={18} />,
    iconClass: 'tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Android Studio'],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Skills() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="skills" id="skills">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-subtitle">
            A versatile skill set spanning multiple programming languages, frameworks, and development tools.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {skillCategories.map((cat, i) => (
            <motion.div key={i} className="skill-category" variants={item}>
              <div className="skill-category-header">
                <div className={`skill-category-icon ${cat.iconClass}`}>{cat.icon}</div>
                <h3 className="skill-category-name">{cat.name}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
