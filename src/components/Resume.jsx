import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Download,
  Eye,
  Sparkles,
  User,
  Mail,
  MapPin,
  Calendar,
  Award,
  Github,
  Linkedin,
  Code,
  Server,
  Database,
  Layers,
  Briefcase,
  BookOpen,
  Target,
  Zap
} from 'lucide-react';

const stats = [
  { value: '9.4', label: 'CGPA', icon: <Award size={20} />, color: '#5fa8a8' },
  { value: '91.49%', label: 'Diploma Score', icon: <Target size={20} />, color: '#8b5cf6' },
  { value: '4+', label: 'Projects', icon: <Layers size={20} />, color: '#f59e0b' },
  { value: '7 Weeks', label: 'Training', icon: <Briefcase size={20} />, color: '#ec4899' },
];

const journeySteps = [
  { year: '2020', title: 'Diploma Completed', desc: 'Computer Engineering with 91.49%', icon: <BookOpen size={16} /> },
  { year: '2022', title: 'B.Tech Started', desc: 'Information Technology at VIT Pune', icon: <User size={16} /> },
  { year: '2024', title: 'Industry Training', desc: '7 Weeks of professional experience', icon: <Briefcase size={16} /> },
  { year: '2026', title: 'Graduation', desc: 'B.Tech IT Degree Expected', icon: <Award size={16} /> },
];

const skills = [
  { name: 'Full Stack Development', icon: <Code size={16} />, items: ['Python', 'Django', 'React', 'Node.js'] },
  { name: 'Database & Backend', icon: <Database size={16} />, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs'] },
  { name: 'DevOps & Tools', icon: <Server size={16} />, items: ['Git', 'Docker', 'AWS', 'Linux'] },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
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

export default function Resume() {
  const [ref, isVisible] = useScrollReveal(0.06);

  return (
    <section className="resume-section" id="resume">
      <div className="container" ref={ref}>
        {/* ── Section Header ── */}
        <motion.div
          className="resume-header"
          variants={headerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <span className="section-tag">
            <Sparkles size={14} />
            About Me
          </span>
          <h2>Who I Am</h2>
          <p>
            A passionate developer on a mission to build impactful solutions
          </p>
        </motion.div>

        {/* ── Hero Bio Card ── */}
        <motion.div
          className="resume-hero"
          variants={item}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <div className="hero-badge">
            <Zap size={14} />
            <span>Available for Opportunities</span>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-quote">
                "Building the future, one line of code at a time"
              </p>
              <p className="hero-bio">
                I'm Yogeshwari Kalaskar, a B.Tech IT student at VIT Pune with a knack for
                turning complex problems into elegant solutions. My journey from scoring
                91.49% in diploma to building full-stack applications has been driven by
                curiosity and a love for learning.
              </p>
              <div className="hero-tags">
                <span>🎯 Problem Solver</span>
                <span>💡 Lifelong Learner</span>
                <span>🚀 Full-Stack Developer</span>
              </div>
            </div>
            <div className="hero-actions">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={16} /> View Resume
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Yogeshwari_Kalaskar_Resume.pdf"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} /> Download
              </motion.a>
            </div>
          </div>
          <div className="hero-avatar">
            <motion.div
              className="avatar-wrapper"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="avatar-ring">
                <div className="ring segment-1" />
                <div className="ring segment-2" />
                <div className="ring segment-3" />
              </div>
              <div className="avatar-circle">
                <User size={40} />
              </div>
            </motion.div>
            <div className="avatar-social">
              <motion.a href="#" whileHover={{ y: -3 }}><Github size={18} /></motion.a>
              <motion.a href="#" whileHover={{ y: -3 }}><Linkedin size={18} /></motion.a>
              <motion.a href="#" whileHover={{ y: -3 }}><Mail size={18} /></motion.a>
            </div>
          </div>
        </motion.div>

        {/* ── Stats Grid ── */}
        <motion.div
          className="resume-stats"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              style={{ '--stat-color': stat.color }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <div className="stat-line" />
            </motion.div>
          ))}
        </motion.div>


        {/* ── Quick Connect ── */}
        <motion.div
          className="resume-connect"
          variants={item}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <div className="connect-content">
            <div className="connect-text">
              <h4>Let's Build Something Amazing Together</h4>
              <p>I'm always open to interesting projects, collaborations, and opportunities</p>
            </div>
            <div className="connect-info">
              <div className="connect-item">
                <Mail size={18} />
                <span>yogeshwari7887@email.com</span>
              </div>
              <div className="connect-item">
                <MapPin size={18} />
                <span>Pune, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}