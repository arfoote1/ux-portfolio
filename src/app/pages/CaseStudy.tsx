import { useParams, Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function CaseStudy() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate("/")}>Go back home</Button>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">Ami Foote</Link>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#E5DEFF] to-[#F0E9FF]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm uppercase tracking-wider text-gray-600 mb-4">
              {project.company} • {project.year}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-2xl text-gray-700 mb-6">{project.subtitle}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-4 py-2 bg-white/80 rounded-full text-gray-700 border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-gray-700 text-lg">
              <span className="font-semibold">Role:</span> {project.role}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      {project.heroImage && (
        <section className="px-6 mb-20 -mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100 border-2 border-black shadow-2xl">
              <ImageWithFallback
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </section>
      )}

      {/* Context */}
      <Section>
        <SectionBadge>CONTEXT</SectionBadge>
        <SectionHeader title={project.context.title} />
        <Prose content={project.context.content} />
      </Section>

      {/* Problem */}
      <Section className="bg-gradient-to-br from-[#FFE8F0] to-[#FFF0F5]">
        <SectionBadge>PROBLEM</SectionBadge>
        <SectionHeader title={project.problem.title} />
        <Prose content={project.problem.content} />
        {project.problem.painPoints && (
          <div className="mt-12 space-y-4">
            {project.problem.painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start p-6 bg-white rounded-2xl border-2 border-black"
              >
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed pt-1">{point}</p>
              </motion.div>
            ))}
          </div>
        )}
        {project.problem.image && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-white border-2 border-black shadow-xl">
              <ImageWithFallback
                src={project.problem.image}
                alt="Problem illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </Section>

      {/* Research */}
      <Section className="bg-gradient-to-br from-[#FFF9E6] to-[#FFFCF0]">
        <SectionBadge>PLANNING</SectionBadge>
        <SectionHeader title={project.research.title} />
        <Prose content={project.research.content} />
        {project.research.insights && (
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {project.research.insights.map((insight, i) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-black"
              >
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-bold text-lg mb-3">{insight.title}</h4>
                <p className="text-gray-700 leading-relaxed">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        )}
        {project.research.images && (
          <div className="space-y-12 mt-12">
            {project.research.images.map((image, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="rounded-2xl overflow-hidden bg-gray-100 border-2 border-black shadow-xl">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="text-gray-600 mt-4 text-center font-medium">
                  {image.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}
      </Section>

      {/* Process */}
      {project.process && (
        <Section className="bg-gradient-to-br from-[#E8F5E3] to-[#F0F9EC]">
          <SectionBadge>RESEARCH</SectionBadge>
          <SectionHeader title={project.process.title} />
          <Prose content={project.process.content} />
          {project.process.steps && (
            <div className="mt-12 space-y-6">
              {project.process.steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 p-8 bg-white rounded-2xl border-2 border-black"
                >
                  <div className="text-6xl font-bold text-gray-200 flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-3">{step.title}</h4>
                    <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          {project.process.images && (
            <div className="mt-12 space-y-8">
              {project.process.images.map((image, i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="aspect-video rounded-2xl overflow-hidden bg-white border-2 border-black shadow-xl">
                    <ImageWithFallback
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="text-gray-600 mt-4 font-medium">
                    {image.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          )}
        </Section>
      )}

      {/* Solution */}
      <Section className="py-12">
        <SectionBadge>SOLUTION</SectionBadge>
        <SectionHeader title={project.solution.title} />
        <Prose content={project.solution.content} />
        {project.solution.features && (
          <div className="mt-16 space-y-20">
            {project.solution.features.map((feature, i) => {
              // Check if this feature should be full-width
              const isFullWidth = 
                feature.title === "Figma Plugin" ||
                feature.title === "AI Content Boundaries" ||
                feature.title === "Entry Point Testing" ||
                feature.title === "Identify or Diagnose" ||
                feature.title === "Flexible Photo Upload" ||
                feature.title === "AI-Powered Diagnosis" ||
                feature.title === "Treatment & Product Recommendations";

              if (isFullWidth) {
                // Full-width layout for detailed images
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
                        i === 0 ? 'bg-purple-100 text-purple-700' :
                        i === 1 ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        Feature {i + 1}
                      </div>
                      <h4 className="font-bold text-3xl mb-4">{feature.title}</h4>
                      <p className="text-gray-700 text-xl leading-relaxed max-w-4xl whitespace-pre-line">{feature.description}</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-gray-100 border-2 border-black shadow-xl">
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </motion.div>
                );
              }

              // Standard alternating layout for other features
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
                      i === 0 ? 'bg-purple-100 text-purple-700' :
                      i === 1 ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      Feature {i + 1}
                    </div>
                    <h4 className="font-bold text-3xl mb-4">{feature.title}</h4>
                    <p className="text-gray-700 text-xl leading-relaxed whitespace-pre-line">{feature.description}</p>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border-2 border-black shadow-xl">
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </Section>

      {/* Next Project */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              Next Project
            </div>
            <Link to={`/work/${nextProject.id}`}>
              <h3 className="text-4xl font-bold mb-4 hover:text-purple-400 transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-xl text-gray-300 mb-6">{nextProject.subtitle}</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                View case study
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 Ami Foote. Designed and built with care.</p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-20 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full text-sm font-bold mb-6">
      <Sparkles className="w-4 h-4" />
      {children}
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold mb-8"
    >
      {title}
    </motion.h2>
  );
}

function Prose({ content }: { content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-xl text-gray-700 leading-relaxed"
    >
      {content}
    </motion.div>
  );
}