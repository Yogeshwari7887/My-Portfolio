import { motion } from 'framer-motion';
import { Award, Plus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certifications() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="certifications" id="certifications">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Certifications</div>
          <h2 className="section-title">Credentials & Certificates</h2>
          <p className="section-subtitle">
            Professional certifications and achievements that validate continuous learning.
          </p>
        </motion.div>

        <motion.div
          className="cert-grid"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.div className="cert-card" variants={item}>
            <div className="cert-preview">
              <Award size={40} />
            </div>
            <div className="cert-info">
              <h4 className="cert-title">Full Stack Python Development</h4>
              <p className="cert-issuer">Passion Software Solutions Pvt. Ltd.</p>
              <p className="cert-date">2024</p>
              <a href="#" className="btn btn-secondary" style={{ fontSize: '12px', padding: '8px 16px' }}>
                View Certificate
              </a>
            </div>
          </motion.div>

          <motion.div className="cert-card cert-placeholder" variants={item}>
            <div className="cert-placeholder-icon">
              <Plus size={20} />
            </div>
            <span className="cert-placeholder-text">More certificates coming soon</span>
          </motion.div>

          <motion.div className="cert-card cert-placeholder" variants={item}>
            <div className="cert-placeholder-icon">
              <Plus size={20} />
            </div>
            <span className="cert-placeholder-text">More certificates coming soon</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
