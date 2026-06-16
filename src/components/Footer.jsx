import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3 className="footer-name">
            Yogeshwari <span>Kalaskar</span>
          </h3>
          <p className="footer-role">Full Stack Developer · Python Developer</p>

          <div className="footer-socials">
            <a href="https://github.com/Yogeshwari7887" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:yogeshwari7887@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>

          <div className="footer-divider" />

          <p className="footer-copyright">
            © {new Date().getFullYear()} Yogeshwari Kalaskar. Built with <Heart size={12} style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--accent)' }} /> and dedication.
          </p>
        </div>
      </div>
    </footer>
  );
}
