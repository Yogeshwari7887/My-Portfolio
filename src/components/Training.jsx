import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const techStack = ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git', 'GitHub'];

const keyLearnings = [
  'Full Stack Web Development',
  'Django Application Development',
  'Responsive UI Development',
  'Version Control Using Git',
  'GitHub Collaboration',
  'Modern Development Workflow',
  'Backend Integration',
  'Project Structure & Best Practices',
];

export default function Training() {
  const [ref, isVisible] = useScrollReveal(0.08);

  return (
    <section className="training" id="experience">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Experience</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Industry Training
          </h2>
          <p className="section-subtitle" style={{ fontSize: '15px' }}>
            Practical exposure to professional development workflows and real-world software engineering practices.
          </p>
        </motion.div>

        {/* Clean Training Card */}
        <motion.div
          className="tr-card"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="tr-accent" />

          {/* Top Row — Company + Duration */}
          <div className="tr-header">
            <div className="tr-icon">
              <Briefcase size={20} />
            </div>
            <div className="tr-info">
              <h3 className="tr-company">Passion Software Solutions Pvt. Ltd.</h3>
              <p className="tr-role">Full Stack Python Trainee</p>
            </div>
            <div className="tr-badge">
              <Calendar size={13} />
              <span>7 Weeks</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="tr-section">
            <span className="tr-label">Tech Stack</span>
            <div className="tr-tags">
              {techStack.map((t) => (
                <span key={t} className="tr-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div className="tr-section">
            <span className="tr-label">Key Learnings</span>
            <div className="tr-learnings">
              {keyLearnings.map((item) => (
                <div key={item} className="tr-learn-item">
                  <span className="tr-dot" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Certificate footnote */}
          <div className="tr-footer">
            <Award size={14} />
            <span>Training Certificate Awarded — Passion Software Solutions Pvt. Ltd.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
