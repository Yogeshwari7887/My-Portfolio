import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const educationData = [
  {
    icon: <GraduationCap size={22} />,
    institution: 'Vishwakarma Institute of Technology, Pune',
    degree: 'B.Tech Information Technology',
    score: '9.4',
    scoreLabel: 'CGPA',
    duration: 'Expected 2028',
    description: 'Focused on software engineering, full-stack development, modern web technologies, and practical project-based learning.',
  },
  {
    icon: <Award size={22} />,
    institution: 'Government Polytechnic Jalgaon',
    degree: 'Diploma in Computer Engineering',
    score: '91.49%',
    scoreLabel: 'Score',
    duration: '3 Years',
    description: 'Built strong foundations in programming, databases, software development, and computer engineering fundamentals.',
  },
  {
    icon: <Award size={22} />,
    institution: 'Maharashtra State Board of Secondary Education',
    degree: 'SSC — Class 10th',
    score: '94.2%',
    scoreLabel: 'Score',
    duration: '2019 – 2020',
    description: 'Achieved academic excellence with a strong foundation in core subjects, laying the groundwork for a career in technology.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Education() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="education" id="education">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic Foundation</h2>
          <p className="section-subtitle">
            A strong academic journey building the foundations for professional excellence.
          </p>
        </motion.div>

        <motion.div
          className="education-grid"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {educationData.map((edu, i) => (
            <motion.div key={i} className="edu-card" variants={item}>
              <div className="edu-icon">{edu.icon}</div>
              <h3 className="edu-institution">{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>
              <div className="edu-meta">
                <span className="edu-meta-item">
                  {edu.scoreLabel}: <span className="value">{edu.score}</span>
                </span>
                <span className="edu-meta-item">{edu.duration}</span>
              </div>
              <p className="edu-description">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
