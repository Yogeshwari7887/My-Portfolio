import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Star, Trophy, BookOpen, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const educationData = [
  {
    icon: <GraduationCap size={24} />,
    institution: 'Vishwakarma Institute of Technology, Pune',
    degree: 'B.Tech Information Technology',
    score: '9.4',
    scoreLabel: 'CGPA',
    duration: 'Expected 2028',
    description: 'Focused on software engineering, full-stack development, modern web technologies, and practical project-based learning.',
    badges: ['🌟 Scholar', '💻 Full-Stack', '🚀 Project Lead'],
  },
  {
    icon: <Award size={24} />,
    institution: 'Government Polytechnic Jalgaon',
    degree: 'Diploma in Computer Engineering',
    score: '91.49%',
    scoreLabel: 'Score',
    duration: '3 Years',
    description: 'Built strong foundations in programming, databases, software development, and computer engineering fundamentals.',
    badges: ['🏅 Top Performer', '⚡ Programming', '📊 DBMS'],
  },
  {
    icon: <BookOpen size={24} />,
    institution: 'Maharashtra State Board of Secondary Education',
    degree: 'SSC — Class 10th',
    score: '94.2%',
    scoreLabel: 'Score',
    duration: '2019 – 2020',
    description: 'Achieved academic excellence with a strong foundation in core subjects, laying the groundwork for a career in technology.',
    badges: ['📚 Academic Excellence', '🎯 Top 1%', '⭐ Merit'],
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.2 },
  },
};

export default function Education() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="education" id="education">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="education-header"
          variants={headerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <span className="section-tag">
            <Sparkles size={14} />
            Education
          </span>
          <h2>Academic Foundation</h2>
          <p>
            A strong academic journey building the foundations for professional excellence.
          </p>
        </motion.div>

        {/* Education Grid */}
        <motion.div
          className="education-grid"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`edu-card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.01,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
            >
              {/* Glow Effect */}
              <div className="glow" />

              {/* Animated Icon */}
              <motion.div
                className="edu-icon-wrapper"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="ring" />
                <span className="ring ring-2" />
                <div className="edu-icon">
                  {edu.icon}
                </div>
              </motion.div>

              {/* Institution & Degree */}
              <motion.h3
                className="edu-institution"
                initial={{ backgroundPosition: '0% 50%' }}
                whileHover={{ backgroundPosition: '100% 50%' }}
                transition={{ duration: 0.5 }}
              >
                {edu.institution}
              </motion.h3>
              <p className="edu-degree">{edu.degree}</p>

              {/* Meta Information */}
              <div className="edu-meta">
                <motion.span
                  className="edu-meta-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Trophy size={14} className="meta-icon" />
                  <span className="label">{edu.scoreLabel}:</span>
                  <span className="value">{edu.score}</span>
                </motion.span>
                <motion.span
                  className="edu-meta-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Calendar size={14} className="meta-icon" />
                  <span className="label">{edu.duration}</span>
                </motion.span>
              </div>

              {/* Description */}
              <motion.p
                className="edu-description"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {edu.description}
              </motion.p>

              {/* Achievement Badges */}
              <motion.div
                className="edu-badges"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {edu.badges.map((badge, i) => (
                  <motion.span
                    key={i}
                    className="edu-badge"
                    variants={badgeVariants}
                    whileHover={{
                      y: -2,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>

              {/* Timeline Dot */}
              <span className="timeline-dot" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}