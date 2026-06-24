import { motion } from 'framer-motion';
import { Award, Plus, Calendar, ExternalLink, Sparkles, Shield, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certificationsData = [
  {
    title: 'Full Stack Python Development',
    issuer: 'Passion Software Solutions Pvt. Ltd.',
    date: '2024',
    icon: <Award size={32} />,
    credentialId: 'PS-FSPD-2024-001',
    skills: ['Python', 'Django', 'React', 'REST APIs'],
    certificateUrl: '#',
    color: '#5fa8a8',
  },
  {
    title: 'Advanced JavaScript & React',
    issuer: 'Google Developers',
    date: '2023',
    icon: <Shield size={32} />,
    credentialId: 'GD-JS-2023-042',
    skills: ['React', 'TypeScript', 'Next.js', 'Redux'],
    certificateUrl: '#',
    color: '#8b5cf6',
  },
  {
    title: 'Cloud Architecture & DevOps',
    issuer: 'AWS Training',
    date: '2023',
    icon: <CheckCircle size={32} />,
    credentialId: 'AWS-CA-2023-189',
    skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
    certificateUrl: '#',
    color: '#f59e0b',
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
    transition: { duration: 0.3, delay: 0.1 },
  },
};

export default function Certifications() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="certifications" id="certifications">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="cert-header"
          variants={headerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <span className="section-tag">
            <Sparkles size={14} />
            Certifications
          </span>
          <h2>Credentials &amp; Certificates</h2>
          <p>
            Professional certifications and achievements that validate continuous learning.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="cert-grid"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
            >
              {/* Glow Effect */}
              <div className="cert-glow" />

              {/* Card Header with Icon */}
              <div className="cert-header-content" style={{ '--cert-color': cert.color }}>
                <motion.div
                  className="cert-icon-wrapper"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <span className="cert-ring" />
                </motion.div>
                <div className="cert-status">
                  <span className="status-badge">
                    <CheckCircle size={12} />
                    Verified
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="cert-body">
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>

                <div className="cert-meta">
                  <span className="cert-meta-item">
                    <Calendar size={14} />
                    {cert.date}
                  </span>
                  <span className="cert-meta-item">
                    <Award size={14} />
                    {cert.credentialId}
                  </span>
                </div>

                {/* Skills Tags */}
                <motion.div
                  className="cert-skills"
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
                  {cert.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="skill-tag"
                      variants={badgeVariants}
                      whileHover={{
                        y: -2,
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                {/* View Certificate Button */}
                <motion.a
                  href={cert.certificateUrl}
                  className="cert-btn"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Certificate
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}