import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  ExternalLink,
  ChevronRight,
  Terminal,
  Cpu,
  Network,
  Zap,
  FileText
} from 'lucide-react';

const skills = [
  "Dell Boomi Integration", "API Management", "Boomi Environments", "Event-Driven Streams",
  "EDIFACT", "Splunk", "Solace Queue", "SOAP", "REST", "XML", "CSV", "JSON",
  "JavaScript", "GroovyScript", "CommerceTools", "Azure Service Blob", "Azure Service Bus"
];

const certifications = [
  "Dell Boomi Associate Developer",
  "Dell Boomi Professional Developer",
  "Dell Boomi Professional API Management",
  "Dell Boomi Architect",
  "Dell Boomi Event Streams"
];

const experiences = [
  {
    company: "Accenture",
    role: "Application Development Team Lead",
    period: "Jan 2021 - Present",
    highlights: [
      "Gathered and defined customer requirements to develop clear specifications for creating well-organized project plans.",
      "Collaborated with stakeholders to understand integration end-to-end flows between systems and ensure the design is based on industry's best practices.",
      "Designed and developed B2B integrations using Dell Boomi AtomSphere for EDI transactions including Purchase Order, Dispatch Advice, Shipment Confirmation, Material Master, Invoice, etc.",
      "Led onboarding of multiple trading partners including major retailers and logistics providers.",
      "Configured secure AS2 communication including certificate management and MDN validation.",
      "Configured and managed AS2, HTTP and SFTP communication for secure trading partner connectivity.",
      "Designed and published enterprise APIs using Boomi API Management.",
      "Developed REST-based integrations between end systems.",
      "Developed reusable Boomi process components and common error-handling framework to improve integration efficiency.",
      "Implemented automated error notification using Mail connector.",
      "Monitored integrations using Boomi Process Reporting and Splunk B2B dashboard and proactively resolved failures.",
      "Coordinated cross-functional teams during major retail go-live releases.",
      "Defined integration standards and best practices across environments.",
      "Mentored junior developers on B2B mapping and Boomi best practices."
    ]
  },
  {
    company: "Infosys Limited",
    role: "Technology Analyst",
    period: "Apr 2018 - Dec 2020",
    highlights: [
      "Led a team of 5 members.",
      "Build A2A end-to-end integrations using Salesforce, ServiceNow, DB, SFTP, HTTP, Web Services Service, REST Client connectors.",
      "Experience in XML, JSON, DB and Flat File profiles.",
      "Gathered all technical requirements by connecting to the stakeholders.",
      "Build various add-on processes to help the team with Production monitoring, e.g. building PagerDuty Alert process, Boomi Atom DLQ Alert process.",
      "Experience in Quality Assurance and in Code review processes.",
      "Prepared Technical, Functional and Migration documents."
    ]
  },
  {
    company: "Infosys Limited",
    role: "SAP PI Developer",
    period: "May 2016 - Mar 2018",
    highlights: [
      "Studied business functions and evaluated requirements to establish operational objectives. Provided technical and functional recommendations based on project requirements.",
      "Created integrations between different ERP systems and Salesforce systems using Salesforce, HTTP client, Web Server SOAP client, Oracle DB, Oracle E-Business, FTP, Mail, Boomi Atom Queue, and Web Services Server connectors.",
      "Exposed the Boomi processes with the help of Boomi API management.",
      "Used Web Services Server connector to GET and POST requests from the source and send the response back to the source using Return Document shape, after checking the HTTP Status Code from the target."
    ]
  },
  {
    company: "Infosys Limited",
    role: "System Engineer Trainee",
    period: "Nov 2015 - Apr 2016",
    highlights: [
      "Collaborated on stages of systems development lifecycle from requirement gathering to production releases. Translated customer requirements into written use cases.",
      "Configured the interfaces between SAP GTS to a third-party system through JMQ.",
      "Developed ESR objects (e.g., Namespaces, Data Types Message Mappings, Operation Mappings, etc.) and ID objects (Communication Channels and Integrated Configurations)",
      "Imported Software Components and Business Systems. Worked on Outbound Proxy generation and the JMS adapter. Configured the Message Queue path.",
      "Developed interfaces (hire, terminate, update) between SAP and an HR system using SOAP and Proxy adapters.",
      "Developed interfaces (ship, track, label and provide the rate) between SAP and a delivery system using SOAP and HTTP adapters."
    ]
  }
];

const education = [
  {
    school: "Poornima College of Engineering",
    degree: "B. Tech • Electronics And Communication Engineering",
    period: "Jul 2011 - Jul 2015"
  },
  {
    school: "St. Micheal's High School",
    degree: "High School • Physics, Chemistry, Maths",
    period: ""
  }
];

export default function App() {
  return (
    <div className="min-h-screen grid-background selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tighter">
            NG<span className="text-emerald-500">.</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/nidhi-gupta-a43652167/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a 
              href="/Nidhi_Gupta_Resume.pdf" 
              download="Nidhi_Gupta_Resume.pdf"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all"
            >
              <FileText size={16} /> Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Zap size={14} /> Available for new opportunities
              </div>
              <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                Nidhi <br />
                <span className="text-neutral-500">Gupta</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed mb-8">
                Senior Integration Developer with <span className="text-white font-medium">10+ years</span> of IT experience including <span className="text-white font-medium">8+ years</span> specializing in Dell Boomi integrations with strong focus on B2B/EDI implementations for Retail and eCommerce domains. Expertise in trading partner onboarding, EDI transaction processing, AS2 communications, API Management, complex A2A integrations and Boomi Event-Driven Streams.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-neutral-400">
                  <MapPin size={18} className="text-emerald-500" />
                  <span>Gurgaon, India</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <Mail size={18} className="text-emerald-500" />
                  <span>guptanidhi1102@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/nidhi-gupta-a43652167/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a 
                  href="https://drive.google.com/uc?export=download&id=1o7IwXjC2FAJb5A3VlpEQnSe049JNOCgk" 
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
                >
                  <FileText size={20} /> Resume
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square glass-card p-8 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Network size={200} />
                </div>
                <div className="relative z-10">
                  <div className="text-5xl font-display font-bold text-emerald-500 mb-2">8+ Years</div>
                  <div className="text-xl font-medium text-neutral-300 mb-6">Specializing in Dell Boomi</div>
                  <div className="space-y-4">
                    {certifications.slice(0, 3).map((cert, i) => (
                      <div key={i} className="flex items-center gap-3 text-neutral-400">
                        <Award size={18} className="text-emerald-500 shrink-0" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Stats / Summary */}
        <section className="mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Experience", value: "10+ Yrs" },
              { label: "Boomi Focus", value: "8+ Yrs" },
              { label: "Team Size Led", value: "5+ Members" },
              { label: "Certifications", value: "5+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="font-display text-4xl font-bold">Experience</h2>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-emerald-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="text-sm font-mono text-neutral-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((item, j) => (
                    <li key={j} className="text-neutral-400 text-sm leading-relaxed flex gap-3">
                      <ChevronRight size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="font-display text-4xl font-bold">Education</h2>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap size={80} />
                </div>
                <div className="relative z-10">
                  <div className="text-emerald-500 font-mono text-sm mb-2">{edu.period}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
                  <p className="text-neutral-400">{edu.degree}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills & Certs */}
        <section id="skills" className="mb-32 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-3xl font-bold">Expertise</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-neutral-300 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-3xl font-bold">Certifications</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-4 flex items-center gap-4 group hover:border-emerald-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                    <Award size={20} />
                  </div>
                  <span className="text-neutral-300 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
            <h2 className="font-display text-4xl font-bold mb-6">Let's build something scalable.</h2>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
              Looking for a seasoned Integration Architect or Team Lead to streamline your enterprise ecosystem? Let's connect.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:guptanidhi1102@gmail.com?subject=Job Opportunity - Integration Developer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-neutral-950 font-bold hover:bg-neutral-200 transition-all w-full md:w-auto justify-center"
              >
                <Mail size={20} /> guptanidhi1102@gmail.com
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+918102174007"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all w-full md:w-auto justify-center"
              >
                <Phone size={20} /> +91-8102174007
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-neutral-500 text-sm">
            © 2026 Nidhi Gupta. All rights reserved.
          </div>
          <div className="flex gap-6 text-neutral-500">
            <a href="https://www.linkedin.com/in/nidhi-gupta-a43652167/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://drive.google.com/uc?export=download&id=1o7IwXjC2FAJb5A3VlpEQnSe049JNOCgk" className="hover:text-white transition-colors">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
