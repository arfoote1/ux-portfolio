import { Link } from "react-router";
import { ArrowRight, Mail, Linkedin, Sparkles, Heart, Zap } from "lucide-react";
import { projects } from "../data/projects";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">Ami Foote</Link>
          <div className="flex gap-6 items-center">
            <a href="#work" className="text-gray-700 hover:text-gray-900 transition-colors">Work</a>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">About</Link>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:footea@outlook.com">Get in touch</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#E3E3FD] to-[#F0EDFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                HELLO
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                I'm Ami!
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                A Content Designer based in Charlotte, North Carolina. Currently working at Lowe's.
              </p>
              <Button size="lg" asChild>
                <a href="#work">See My Work</a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <Sparkles className="absolute -top-8 -right-8 w-12 h-12 text-purple-400 animate-pulse" />
              <Sparkles className="absolute -bottom-8 -left-8 w-8 h-8 text-purple-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
              
              <div className="relative w-[450px] h-[450px]">
                <ImageWithFallback 
                  src="https://i.imgur.com/PHfhPi6.png"
                  alt="Ami Foote"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  style={{ 
                    filter: 'drop-shadow(0 20px 40px rgba(139, 92, 246, 0.3))'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              SKILLS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Areas of Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <SkillCard
              color="bg-[#E5DEFF]"
              icon="🔄"
              title="Information Architecture & Labeling"
              description="Turning complex products into intuitive experiences through clear naming, navigation, and mental-model alignment."
              delay={0}
            />
            <SkillCard
              color="bg-[#E8F5E3]"
              icon="🔍"
              title="Accessibility & Inclusive Design"
              description="Building accessibility into content from the start—WCAG-aligned, plain-language, and tested with real users."
              delay={0.1}
            />
            <SkillCard
              color="bg-[#FFE8F0]"
              icon="💬"
              title="Conversational & AI Content Design"
              description="Defining response structure, guardrails, tone, and trust patterns for AI-powered experiences—both customer-facing and internal."
              delay={0.2}
            />
            <SkillCard
              color="bg-[#E3F2FD]"
              icon="🎯"
              title="Content Strategy & Systems"
              description="Designing scalable content frameworks, playbooks, and patterns that help teams move faster without sacrificing quality or consistency."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid gap-12">
              <ProjectCard project={projects[0]} index={0} color="bg-[#1e40af]" />
              <ProjectCard project={projects[1]} index={1} color="bg-[#67e8f9]" />
              <ProjectCard project={projects[2]} index={2} color="bg-gray-100" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together</h2>
            <p className="text-xl text-gray-600 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:footea@outlook.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/ami-f-9a140556/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 Ami Foote. Designed and built with care.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ 
  color, 
  icon, 
  title, 
  description, 
  delay 
}: { 
  color: string; 
  icon: string; 
  title: string; 
  description: string; 
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${color} p-8 rounded-3xl border-2 border-black`}
    >
      <div className="text-4xl mb-4 w-14 h-14 flex items-center justify-center bg-white rounded-full border-2 border-black">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ 
  project, 
  index, 
  color 
}: { 
  project: typeof projects[0]; 
  index: number; 
  color: string;
}) {
  return (
    <Link to={`/work/${project.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group cursor-pointer"
      >
        <div className={`${color} p-8 md:p-12 rounded-3xl border-2 border-black transition-transform group-hover:scale-[1.02]`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`${index === 1 ? 'md:order-2' : ''}`}>
              <div className={`aspect-[4/3] rounded-2xl overflow-hidden border-2 border-black ${index === 0 ? 'bg-white' : 'bg-white'}`}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className={`${index === 1 ? 'md:order-1' : ''} ${index === 0 ? 'text-white' : 'text-gray-900'}`}>
              {index === 0 && (
                <div className="text-sm uppercase tracking-wider mb-4 opacity-90">
                  Backyard Doc Site
                </div>
              )}
              <h3 className={`text-4xl md:text-5xl font-bold mb-4 ${index === 0 ? 'text-[#FFD700]' : ''}`}>
                {index === 0 ? 'Global Content Design' : project.title}
              </h3>
              <p className={`text-xl mb-6 leading-relaxed ${index === 0 ? 'text-white/90' : 'text-gray-700'}`}>
                {project.summary}
              </p>
              <div className={`inline-flex items-center gap-2 font-medium text-lg group-hover:gap-3 transition-all ${
                index === 0 ? 'text-white' : 'text-gray-900'
              }`}>
                View More
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}