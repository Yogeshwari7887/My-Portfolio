import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    number: 'Project 01',
    title: 'AI Powered Smart Traffic Management System For Emergency Vehicles',
    overview: 'Built an intelligent traffic control system using YOLOv8 computer vision capable of detecting emergency vehicles from CCTV footage with 92% accuracy.',
    problem: 'Emergency vehicles often lose valuable time due to conventional traffic systems that cannot dynamically adapt to urgent situations.',
    solution: 'Implemented emergency vehicle detection and dynamic signal synchronization to automatically create green corridors for faster emergency response.',
    features: ['Emergency Vehicle Detection', 'YOLOv8 Integration', 'Real-Time Monitoring', 'Signal Synchronization', 'Green Corridor Generation', 'Dashboard Visualization'],
    tech: ['YOLOv8', 'Python', 'Flask', 'React', 'Computer Vision'],
    impact: [
      { value: '92%', label: 'Detection Accuracy' },
      { value: '40%', label: 'Faster Emergency Response' },
    ],
    github: 'https://github.com/Yogeshwari7887',
  },
  {
    number: 'Project 02',
    title: 'GrowPure — Organic E-Commerce Platform',
    overview: 'Developed a full-stack organic e-commerce platform focused on user experience, scalability, and real-world business workflows.',
    features: ['Authentication', 'Shopping Cart', 'Coupons & Discounts', 'Wishlist', 'User Dashboard', 'Admin Dashboard', 'Order Tracking', 'Responsive Design'],
    tech: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
    highlight: 'This project demonstrates full-stack development skills, database integration, user management, and business workflow implementation.',
    github: 'https://github.com/Yogeshwari7887',
  },
  {
    number: 'Project 03',
    title: 'YourHearingEar — Personal Counseling Website',
    overview: 'Designed and developed a platform focused on empathetic communication and supportive user interaction.',
    features: ['Structured Guidance', 'Ethical Interaction Design', 'User-Centric Experience', 'Conversational Support'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
    highlight: 'Creating meaningful and responsible digital interactions focused on empathy and user well-being.',
    github: 'https://github.com/Yogeshwari7887',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      className="project-card"
      variants={cardVariant}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <div className="project-header">
        <div className="project-number">{project.number}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-overview">{project.overview}</p>
      </div>

      <div className="project-body">
        {project.problem && project.solution && (
          <div className="project-details">
            <div className="project-detail-block">
              <div className="project-detail-label">The Problem</div>
              <p className="project-detail-text">{project.problem}</p>
            </div>
            <div className="project-detail-block">
              <div className="project-detail-label">The Solution</div>
              <p className="project-detail-text">{project.solution}</p>
            </div>
          </div>
        )}

        <div className="project-features-section">
          <div className="project-features-title">Key Features</div>
          <div className="project-features">
            {project.features.map((f) => (
              <span key={f} className="project-feature">{f}</span>
            ))}
          </div>
        </div>

        <div className="project-tech-section">
          <div className="project-features-title">Technologies</div>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>

        {project.impact && (
          <div className="project-impact">
            {project.impact.map((imp, i) => (
              <div key={i} className="impact-card">
                <div className="impact-value">{imp.value}</div>
                <div className="impact-label">{imp.label}</div>
              </div>
            ))}
          </div>
        )}

        {project.highlight && (
          <div className="project-highlight">
            <p>{project.highlight}</p>
          </div>
        )}

        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Github size={16} /> View on GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, isVisible] = useScrollReveal(0.05);

  return (
    <section className="projects" id="projects">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Featured Projects</div>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            Projects that showcase problem-solving ability, technical depth, and real-world impact.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
