import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, Sparkles, Mail, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import avatarImage from "figma:asset/amiphoto.png

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">Ami Foote</Link>
          <div className="flex gap-6 items-center">
            <Link to="/#work" className="text-gray-700 hover:text-gray-900 transition-colors">Work</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-semibold">About</Link>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:footea@outlook.com">Get in touch</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#E5DEFF] to-[#F0E9FF]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-purple-600" />
              <Heart className="w-6 h-6 text-purple-400 mt-2" />
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              ABOUT
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8 max-w-3xl mx-auto">
              I'm endlessly curious and deeply empathetic.
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-700 space-y-6 text-center max-w-3xl">
              <p className="text-xl">
                I love learning how people see the world. Whether through travel, reading, or simply 
                listening, I'm always drawn to new perspectives.
              </p>
              <p className="text-xl">
                That curiosity is what led me to content design. I start by understanding people 
                first, then use those insights to create experiences that feel clear, intuitive, and 
                genuinely helpful.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-8">
              <Sparkles className="w-10 h-10 text-purple-600" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My process is rooted in understanding,<br />collaboration, and iteration.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <ProcessCard
              number="01"
              color="bg-[#E8F5E3]"
              icon="🤝"
              title="Discovery & Context"
              description="I start by understanding the full problem space. This includes audits, research review, and stakeholder conversations to identify where clarity breaks down and where content can create momentum."
              delay={0}
            />
            <ProcessCard
              number="02"
              color="bg-[#FFE8F0]"
              icon="🎨"
              title="Strategy & Structure"
              description="With context in place, I shape the content strategy: defining information architecture, naming, hierarchy, and key moments that require guidance or reassurance. I collaborate early with design and product to align on direction."
              delay={0.1}
            />
            <ProcessCard
              number="03"
              color="bg-[#F5E6D3]"
              icon="🌍"
              title="Collaboration & Creation"
              description="I partner closely with designers, working in Figma to shape flows, microcopy, and system patterns. Content and design evolve together, balancing ideal experiences with real-world constraints."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#E5DEFF] to-[#F0E9FF]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">What guides my work</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <ValueCard
              title="Start with empathy"
              description="The best content design comes from truly understanding people—their goals, anxieties, and the language they naturally use."
              delay={0}
            />
            <ValueCard
              title="Collaborate early and often"
              description="Content isn't just words—it shapes the entire experience. Working alongside design and product from the start leads to stronger outcomes."
              delay={0.1}
            />
            <ValueCard
              title="Design for everyone"
              description="Accessibility isn't a nice-to-have. It's core to how I approach every project, from language choices to content structure."
              delay={0.2}
            />
            <ValueCard
              title="Keep iterating"
              description="The first draft is never the final draft. Great content emerges through feedback, testing, and refinement."
              delay={0.3}
            />
          </div>
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

function ProcessCard({ 
  number, 
  color, 
  icon, 
  title, 
  description, 
  delay 
}: { 
  number: string; 
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
      className={`${color} p-8 rounded-3xl border-2 border-black relative`}
    >
      <div className="absolute top-6 right-6 text-5xl font-bold text-gray-300">
        {number}
      </div>
      <div className="text-4xl mb-4 w-14 h-14 flex items-center justify-center bg-white rounded-full border-2 border-black">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ValueCard({ 
  title, 
  description, 
  delay 
}: { 
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
      className="bg-white p-8 rounded-3xl border-2 border-black"
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
    </motion.div>
  );
}
