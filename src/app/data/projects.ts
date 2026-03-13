export interface Project {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  year: string;
  role: string;
  thumbnail: string;
  heroImage: string;
  summary: string;
  tags: string[];
  
  // Story sections
  context: {
    title: string;
    content: string;
    stats?: { label: string; value: string }[];
  };
  
  problem: {
    title: string;
    content: string;
    painPoints?: string[];
    image?: string;
  };
  
  research?: {
    title: string;
    content: string;
    insights?: { title: string; description: string }[];
    images?: { src: string; caption: string }[];
  };
  
  process?: {
    title: string;
    content: string;
    steps?: { number: string; title: string; description: string }[];
    images?: { src: string; caption: string }[];
  };
  
  solution: {
    title: string;
    content: string;
    features?: { title: string; description: string; image: string }[];
  };
  
  impact: {
    title: string;
    content: string;
    metrics?: { label: string; value: string; change?: string }[];
    testimonial?: { quote: string; author: string; role: string };
  };
  
  reflection: {
    title: string;
    content: string;
    learnings?: string[];
  };
}

// Your actual projects - customize these with your real content
export const projects: Project[] = [
  {
    id: "content-playbook",
    title: "Global Content Design",
    subtitle: "Content Playbook",
    company: "Lowe's",
    year: "2025",
    role: "Content Design Lead",
    thumbnail: "https://i.imgur.com/pVLDbWz.png",
    heroImage: "https://i.imgur.com/bJGWzJh.png",
    summary: "Lowe's first Content Playbook—an evolving system that standardizes voice, tone, and accessibility across platforms.",
    tags: ["Content Strategy", "Design Systems", "Documentation", "Voice & Tone"],
    
    context: {
      title: "Setting the Stage",
      content: "Lowe's content across digital products had grown increasingly inconsistent in tone, structure, and accessibility. Teams were reinventing patterns, interpreting standards differently, or making content decisions in silos, leading to wasted time and uneven customer experiences.",
    },
    
    problem: {
      title: "The Challenge",
      content: "Quality was inconsistent, terminology varied across platforms, and content designers were repeatedly answering the same questions about basic standards. This created inefficiencies and prevented teams from focusing on strategic, high-impact work.",
      painPoints: [
        "Inconsistent terminology across platforms (e.g., 'My Account' vs 'Member ID')",
        "No centralized source of truth for content standards",
        "Content designers spending time on repetitive questions instead of strategy",
        "Teams working in silos without shared understanding of voice and tone",
      ],
    },
    
    research: {
      title: "My Role",
      content: "We audited existing content across platforms, interviewed stakeholders from UX, Marketing, Editorial, and Customer Service teams, and identified the most common pain points. The goal was to build a foundation that connected all teams and could scale as the organization evolved.",
    },
    
    process: {
      title: "How We Built It",
      content: "We took a phased approach: first establishing global guidelines, then creating detailed standards for common content types, and finally building tools to make these guidelines accessible in real-time workflows.",
      steps: [
        {
          number: "01",
          title: "Establish Foundation",
          description: "Created global content guidelines that defined our voice, tone, and core principles. This foundation would support all future content decisions.",
        },
        {
          number: "02",
          title: "Build Detailed Standards",
          description: "Developed guidelines for specific content types: status messages, notifications, AI content, title case rules, and more. Each guideline included clear examples and rationale.",
        },
        {
          number: "03",
          title: "Make It Accessible",
          description: "Built a Custom GPT and Figma plugin so teams could access guidelines directly in their workflows—no need to search through documentation.",
        },
      ],
    },
    
    solution: {
      title: "The Solution",
      content: "We created a comprehensive content playbook with detailed guidelines for voice, tone, status messages, notifications, AI content, and more. Then we made it accessible through a Custom GPT for conversational guidance. Below, you'll find few snapshots of the work we did.",
      features: [
        {
          title: "Tone Guide",
          description: "Defined Lowe's voice and tone across different contexts—from helpful and approachable to clear and action-oriented—ensuring consistency across all customer touchpoints.",
          image: "https://i.imgur.com/Mgtod8I.png",
        },
        {
          title: "Notification Guidelines",
          description: "Defined when to use Alerts, Toasts, and Modals, with specific use cases and examples to guide decision-making.",
          image: "https://i.imgur.com/BZh5gdD.png",
        },
        {
          title: "Button Guidelines",
          description: "Established clear standards for button labels, hierarchy, and usage—helping teams create intuitive, action-oriented interfaces.",
          image: "https://i.imgur.com/fSK67z2.png",
        },
        {
          title: "Custom GPT Assistant",
          description: "Built a conversational interface where anyone can ask content questions and get instant guidance based on our playbook—51+ conversations and growing.",
          image: "https://i.imgur.com/vGpnljQ.png",
        },
      ],
    },
    
    impact: {
      title: "Results & Impact",
      content: "The playbook is now used across content design, UX, product, and marketing teams. The Custom GPT has facilitated 51+ conversations, and the Figma plugin helps designers access content guidance without leaving their workflow. Most importantly, content designers can now focus on strategic work instead of answering repetitive questions about basic standards.",
    },
    
    reflection: {
      title: "What I Learned",
      content: "This project reinforced the importance of making guidelines accessible where people actually work. A well-documented playbook is only useful if teams can find and apply it in the moment. Building tools like the Custom GPT and Figma plugin ensured the guidelines would actually be used, not just admired.",
      learnings: [
        "Start with foundation before solving specific problems—global guidelines gave us a framework for everything that followed",
        "Meet teams where they work—integrating into existing workflows (Figma, ChatGPT) drove adoption",
        "Guidelines work best when they explain the 'why'—showing how teams connect helped everyone see their role in creating cohesive experiences",
      ],
    },
  },
  {
    id: "sincerely-health",
    title: "Sincerely Health Wellness Platform",
    subtitle: "Designing the content system behind a unified digital wellness ecosystem",
    company: "Albertsons × Microsoft",
    year: "2023",
    role: "Content Designer",
    thumbnail: "https://i.imgur.com/WSn3Ptj.png",
    heroImage: "https://i.imgur.com/WSn3Ptj.png",
    summary: "A unified wellness ecosystem that connects activity tracking, pharmacy, nutrition, and rewards into one cohesive digital experience.",
    tags: ["Content Design", "Health Tech", "Mobile UX", "Rewards Systems"],
    
    context: {
      title: "Setting the Stage",
      content: "Albertsons had useful health tools, but they lived in separate places and felt fragmented and hard to find. Customers were left bouncing between apps and pages, with no clear sense of how these features connected or how they supported their larger health goals.",
    },
    
    problem: {
      title: "The Challenge",
      content: "The functionality existed. The mental model did not. Activity tracking was disconnected from rewards. Pharmacy tools isolated from wellness. Nutrition insights had no context. If users couldn't see how everything connected, engagement would stall.",
    },
    
    research: {
      title: "My Role",
      content: "My role was to craft the voice, structure, and messaging that unified all of Sincerely Health's tools into a single, seamless flow. I worked closely with designers, engineers, PMs, and researchers to ensure every element of the experience aligned with both user needs and business goals. I focused on building a clear content architecture that made the platform easy to navigate, helping users discover features naturally and understand how each part of the experience supported their goals.",
    },
    
    solution: {
      title: "The Solution",
      content: "Through consistent content architecture, clear naming conventions, and motivating reward loops, Sincerely Health became a unified wellness ecosystem where every feature connected to support users' health goals.",
      features: [
        {
          title: "Defined a Clear Content Architecture",
          description: "We structured the ecosystem into five consistent pillars: Health · Nutrition · Pharmacy · Rewards · Get Care. Each area had a defined role, but shared predictable navigation, consistent labeling, reinforced reward mechanics, and a centralized Sincerely Health hub.",
          image: "https://i.imgur.com/8cNSCsH.jpeg",
        },
        {
          title: "Connected Behavior to Motivation",
          description: "We transformed passive tracking into an active reward loop: Close rings → Earn points → Redeem rewards → Reinforce healthy habits. Content emphasized progress with weekly progress summaries, and celebratory reinforcement.",
          image: "https://i.imgur.com/DiXIvRv.png",
        },
        {
          title: "Humanized Pharmacy",
          description: "Pharmacy became part of wellness—not a separate, clinical destination. Through naming and tone (My Pharmacy, Schedule a vaccine, My vaccine records, Refill prescriptions), we emphasized ownership, clarity, and approachability.",
          image: "https://i.imgur.com/95ufvgw.png",
        },
        {
          title: "Made Nutrition Actionable",
          description: "Nutrition insights translated grocery behavior into clear guidance. Content clarified timeframes, data meaning, how to interact, and how insights connect to shopping. Information became actionable—not overwhelming.",
          image: "https://i.imgur.com/gEoi0a1.png",
        },
        {
          title: "Unified Rewards System",
          description: "Every pillar contributed to a single Healthy Points system. The content made value visible through clear point totals, earn-focused CTAs, and transparent reward redemption. This connected healthy behavior directly to tangible grocery savings.",
          image: "https://i.imgur.com/aRyrE8W.png",
        },
      ],
    },
    
    impact: {
      title: "Outcome",
      content: "Sincerely Health launched as a cohesive wellness ecosystem where users could track activity, manage prescriptions, view nutrition insights, earn and redeem grocery rewards, and access care resources—all within one consistent content system.",
      metrics: [
        {
          label: "Discoverability",
          value: "Stronger cross-feature discoverability",
        },
        {
          label: "Mental Models",
          value: "Clearer user mental models",
        },
        {
          label: "Engagement",
          value: "Increased through reward reinforcement",
        },
        {
          label: "Recognition",
          value: "For unified digital health design",
        },
      ],
    },
    
    reflection: {
      title: "What This Project Reinforced",
      content: "Sincerely Health demonstrated that content isn't decoration—it's infrastructure.",
      learnings: [
        "Content architecture shapes product understanding",
        "Naming defines mental models",
        "Reward systems require emotional reinforcement",
        "Consistency builds trust in complex ecosystems",
        "Wellness must feel human—not clinical",
      ],
    },
  },
  {
    id: "planta",
    title: "Planta Plant Diagnosis",
    subtitle: "AI-powered plant identification and care guidance",
    company: "Lowe's × Planta",
    year: "2025",
    role: "Content Design & UX Strategy",
    thumbnail: "https://i.imgur.com/alw3Zk2.png",
    heroImage: "https://i.imgur.com/pBSGY3h.png",
    summary: "An AI-powered journey that transforms plant identification and diagnosis into actionable product care solutions.",
    tags: ["Content Design", "AI/ML", "Mobile UX", "E-commerce Integration"],
    
    context: {
      title: "Setting the Stage",
      content: "Lowe's wanted to help customers not just buy plants, but successfully keep them alive. We partnered with Planta—a plant identification and care platform—to bring AI-powered diagnosis directly into the Lowe's mobile experience. The goal was to connect plant care needs to product solutions, turning frustration into confidence.",
    },
    
    problem: {
      title: "The Challenge",
      content: "Customers struggle to identify plants they already own and diagnose common issues like overwatering, yellowing leaves, or pests. When plants start dying, they don't know what's wrong or how to fix it—leading to plant death, wasted money, and missed opportunities for Lowe's to provide helpful care solutions.",
      painPoints: [
        "Customers can't identify plants they've bought or inherited from others",
        "Common plant problems (overwatering, pests, nutrient deficiency) are hard to diagnose without expertise",
        "No clear path from 'my plant is dying' to 'here's what to buy to fix it'",
        "Real-time camera scanning felt intimidating or unclear to users during testing",
      ],
    },
    
    research: {
      title: "Discovery & Strategy",
      content: "We mapped out six strategic opportunities for the Planta integration: Content (educational resources), Identify (plant recognition), Remedy (diagnosis & treatment), Prevent (care tips), Replace (shopping integration), and Expand (growing plant collections). We then created our first wireframe, which would inform our designs.",
      images: [
        {
          src: "https://i.imgur.com/FpOxzXl.png",
          caption: "Six strategic opportunities: Content, Identify, Remedy, Prevent, Replace, Expand",
        },
        {
          src: "https://i.imgur.com/KdPPd1x.png",
          caption: "User flow mapping the path from photo upload to diagnosis to product recommendations",
        },
      ],
    },
    
    process: {
      title: "User Testing",
      content: "We turned our wireframe into the first iteration and began testing users in our on-site lab. We got some useful feedback to consider for our next iteration.",
      steps: [
        {
          number: "01",
          title: "Entry Point Clarity",
          description: "Users needed a clearer, more inviting entry point to understand what the Plant Finder feature could do for them. Visual hierarchy and language had to immediately communicate value.",
        },
        {
          number: "02",
          title: "Photo Upload vs. Scanning",
          description: "Testing revealed that customers preferred uploading photos over real-time scanning—it felt less pressured and gave them time to choose their best shot and think through their questions.",
        },
        {
          number: "03",
          title: "Close the Loop to Solutions",
          description: "Results couldn't just tell customers what was wrong—they needed to show exactly which products to buy and how to treat issues, closing the loop from problem to solution.",
        },
      ],
    },
    
    solution: {
      title: "The Solution",
      content: "We worked through the user feedback and created our next iteration to address the gaps. We will continue to test and iterate until the experience is seamless and launch-ready.",
      features: [
        {
          title: "Clearer Entry & Immediate Value",
          description: "User feedback:\n\"I'm not sure what this does.\"\n\"Am I scanning or taking a photo?\"\n\nWe refined the entry point to clearly communicate purpose and expectations. The updated experience uses guided framing to show what to capture, and establishes visual hierarchy that highlights the primary action.",
          image: "https://i.imgur.com/YQfS1o3.png",
        },
        {
          title: "Flexible Photo Capture (Reduced Pressure)",
          description: "User feedback:\n\"I felt rushed.\"\n\"I wanted to choose a better photo.\"\n\nIn addition to real-time scanning, we included a photo upload option. Image selection give users more control before submission.",
          image: "https://i.imgur.com/DOzDIza.png",
        },
        {
          title: "Structured Diagnostic Questions",
          description: "User feedback:\n\"It asked questions, but I didn't know why.\"\n\"I wasn't sure how to answer.\"\n\nWe introduced contextual follow-up questions to support a more accurate diagnosis. The flow clarifies watering frequency, soil type, and moisture levels with descriptive guidance.",
          image: "https://i.imgur.com/v9NS3PJ.png",
        },
        {
          title: "Transparent, Confidence-Based Diagnosis",
          description: "User feedback:\n\"I don't know how accurate this is.\"\n\"Why is it saying that?\"\n\nWe redesigned the diagnosis page to build trust. The screen now includes a visible confidence percentage and a clear explanation of how the result was determined.",
          image: "https://i.imgur.com/7TNRX0f.png",
        },
        {
          title: "Product Recommendations Connected to Diagnosis",
          description: "User feedback:\n\"If I need something, just show me.\"\n\"Don't make me search for it.\"\n\nWe connected diagnosis directly to relevant product recommendations. The updated flow curates solutions specific to the identified issue and links treatment guidance to purchasable products.",
          image: "https://i.imgur.com/LaP4z0V.png",
        },
      ],
    },
    
    impact: {
      title: "Results & Impact",
      content: "This feature is currently in development and has not yet launched.",
    },
    
    reflection: {
      title: "What I Learned",
      content: "This project reinforced the importance of meeting customers where they are—both emotionally and practically. Allowing photo upload instead of forcing real-time scanning made the experience feel less intimidating. And connecting diagnosis directly to product recommendations turned a 'nice to have' feature into a valuable shopping tool.",
      learnings: [
        "Give users control over the experience—photo upload felt more flexible and less pressured than real-time scanning",
        "Don't just identify the problem, show the solution—connecting diagnosis to products made the feature genuinely useful",
        "Test multiple concepts early—testing 8 entry point designs helped us find the clearest, most inviting approach before building",
      ],
    },
  },
  {
    id: "ai-experimentation",
    title: "AI Experimentation",
    subtitle: "Interactive tools that bring my content principles to life",
    company: "Personal Project",
    year: "2025",
    role: "Content Designer & Developer",
    thumbnail: "https://images.unsplash.com/photo-1761223956849-c6912f2179aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwcHVycGxlJTIwcGluayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNDEyMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    heroImage: "https://images.unsplash.com/photo-1761223956849-c6912f2179aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwcHVycGxlJTIwcGluayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNDEyMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    summary: "Interactive demonstrations of content strategy in action, showing how thoughtful writing transforms user experiences.",
    tags: ["Content Strategy", "Interactive Design", "AI Exploration", "UX Writing"],
    
    context: {
      title: "Why Build This?",
      content: "As a content designer, I've spent years advocating for clarity, accessibility, and user-centered language. But showing is more powerful than telling. These interactive tools let you experience the principles I use every day—transforming complex, technical content into clear, human communication.",
    },
    
    problem: {
      title: "The Challenge of Showing Invisible Work",
      content: "Content design is often invisible. When it works well, users don't notice it—they just complete their tasks smoothly. But that makes it hard to demonstrate the craft and strategic thinking behind good content. I wanted to create something tangible that reveals the 'before and after' of content work and the frameworks that guide my decisions.",
    },
    
    solution: {
      title: "Two Interactive Tools",
      content: "I built two tools that demonstrate different aspects of content strategy: one shows the transformation from technical to clear language, the other guides you through the decision-making process I use for every piece of content.",
      features: [
        {
          title: "Content Clarity Checker",
          description: "See real examples of content transformation across three common scenarios at Lowe's: error messages, onboarding instructions, and AI content guidelines. Toggle between 'before' and 'after' to see what changes and why.",
          image: "https://i.imgur.com/placeholder-clarity.png"
        },
        {
          title: "Content Decision Tree",
          description: "Answer three questions about your content scenario, and get personalized tone and language recommendations based on user context, emotional state, and stakes level—complete with examples to try and patterns to avoid.",
          image: "https://i.imgur.com/placeholder-tree.png"
        }
      ]
    },
    
    impact: {
      title: "What This Demonstrates",
      content: "These tools showcase my approach to content design: strategic, user-centered, and grounded in real scenarios. They reveal the thinking behind the work and make the invisible craft of content design tangible and interactive.",
      metrics: [
        { label: "Content Scenarios", value: "6+" },
        { label: "Before/After Examples", value: "3" },
        { label: "Decision Paths", value: "64" }
      ]
    },
    
    reflection: {
      title: "What I Learned",
      content: "Building these tools reinforced how much of content design is about systematic thinking. Good content isn't about inspiration—it's about having frameworks that help you make consistent, user-centered decisions at scale. And sometimes, the best way to explain your work is to let people experience it themselves.",
      learnings: [
        "Interactive experiences make abstract principles concrete and memorable",
        "Content frameworks scale better than one-off decisions",
        "Showing your process builds more credibility than showing just outcomes"
      ],
    },
  },
];