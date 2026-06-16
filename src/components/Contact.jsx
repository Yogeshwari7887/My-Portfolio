import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const openTo = ['Internships', 'Learning Opportunities', 'Collaborations', 'Software Development Projects'];

export default function Contact() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open to opportunities, collaborations, and meaningful conversations.
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="contact-left">
            <div className="contact-info-block">
              <div className="contact-info-title">Get In Touch</div>
              <a href="mailto:yogeshwari7887@gmail.com" className="contact-link">
                <span className="contact-link-icon"><Mail size={16} /></span>
                <span className="contact-link-text">yogeshwari7887@gmail.com</span>
              </a>
              <a href="https://github.com/Yogeshwari7887" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link-icon"><Github size={16} /></span>
                <span className="contact-link-text">github.com/Yogeshwari7887</span>
              </a>
            </div>

            <div className="open-to-section">
              <div className="contact-info-title">Currently Open To</div>
              <div className="open-to-tags">
                {openTo.map((item) => (
                  <span key={item} className="open-to-tag">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input className="form-input" type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" type="email" id="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input className="form-input" type="text" id="subject" name="subject" placeholder="What's this about?" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-textarea" id="message" name="message" placeholder="Tell me more..." value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              <Send size={16} />
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
