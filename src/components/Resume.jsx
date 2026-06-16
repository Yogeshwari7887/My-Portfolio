import { motion } from 'framer-motion';
import { FileText, Download, Eye, MapPin, Mail, Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  { value: '9.4', label: 'Current CGPA' },
  { value: '91.49%', label: 'Diploma Score' },
  { value: '7 Weeks', label: 'Industry Training' },
  { value: '3+', label: 'AI & Web Projects' },
];

export default function Resume() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="resume-section" id="resume">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Resume</div>
          <h2 className="section-title">Professional Summary</h2>
        </motion.div>

        <motion.div
          className="resume-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="resume-left">
            <p className="resume-summary">
              A dedicated and detail-oriented engineering student with a strong academic track record
              and practical experience in full-stack web development. Skilled in building scalable
              applications using Python, Django, and modern frontend technologies, with a keen
              interest in AI-powered solutions and clean software architecture.
            </p>

            <div className="resume-highlights">
              {highlights.map((h, i) => (
                <div key={i} className="resume-highlight">
                  <div className="resume-highlight-value">{h.value}</div>
                  <div className="resume-highlight-label">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="resume-actions">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Eye size={16} /> View Resume
              </a>
              <a href="/resume.pdf" download className="btn btn-secondary">
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>

          <div className="resume-visual">
            <div className="resume-card-preview">
              <div className="resume-card-icon">
                <FileText size={28} />
              </div>
              <h4 className="resume-card-name">Yogeshwari Kalaskar</h4>
              <p className="resume-card-role">Full Stack Developer · Python Developer</p>
              <div className="resume-card-divider" />
              <div className="resume-card-details">
                <span className="resume-card-detail">
                  <MapPin size={14} /> Pune, Maharashtra, India
                </span>
                <span className="resume-card-detail">
                  <Mail size={14} /> yogeshwari7887@gmail.com
                </span>
                <span className="resume-card-detail">
                  <Briefcase size={14} /> Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
