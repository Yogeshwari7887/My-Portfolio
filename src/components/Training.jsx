import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const techLearned = ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git', 'GitHub'];

export default function Training() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="training" id="experience">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Experience</div>
          <h2 className="section-title">Training & Experience</h2>
          <p className="section-subtitle">
            Professional training that bridges academic learning with industry practice.
          </p>
        </motion.div>

        <motion.div
          className="training-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="training-header">
            <div>
              <h3 className="training-company">Passion Software Solutions Pvt. Ltd.</h3>
              <p className="training-role">Full Stack Python Trainee</p>
            </div>
            <span className="training-duration">7 Weeks</span>
          </div>

          <p className="training-description">
            Completed practical training in full-stack web development with exposure to modern
            development workflows and collaborative development practices. Gained hands-on
            experience building real-world applications using industry-standard tools and frameworks.
          </p>

          <div className="project-features-title" style={{ marginBottom: '14px' }}>Technologies Learned</div>
          <div className="training-tech">
            {techLearned.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
