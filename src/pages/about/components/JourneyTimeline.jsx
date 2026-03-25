import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const JourneyTimeline = () => {
  const [expandedId, setExpandedId] = useState(null);

  const milestones = [
    {
      id: 1,
      year: "2024",
      title: "Senior Software Engineer",
      company: "Pareekshn Online Assessments",
      type: "career",
      icon: "Briefcase",
      color: "var(--color-primary)",
      summary: "Designing scalable systems and delivering production-grade government and assessment platforms",
      details: "Designing and delivering scalable systems using Spring Boot and Node.js, building secure REST APIs, optimizing MySQL queries, and handling concurrency for high-load workflows. Delivered the BIADA government survey platform and the Pareekshn assessment admin panel — both production systems with real-world impact.",
      achievements: [
        "Delivered production-grade government survey platform for BIADA",
        "Engineered real-time scoring engine for concurrent multi-role assessments",
        "Automated PDF/Excel result generation cutting multi-hour manual effort per cycle",
        "Implemented AES-256 encryption, geo-fencing, and RBAC for government data security"
      ]
    },
    {
      id: 2,
      year: "2024",
      title: "RAG Chatbot Side Project",
      company: "Self-Initiated",
      type: "achievement",
      icon: "Brain",
      color: "var(--color-accent)",
      summary: "Built a citation-enforced RAG pipeline for legal document Q&A",
      details: "Designed a RAG pipeline for structured legal document Q&A using FastAPI + PostgreSQL + pgvector. Built structure-aware chunking with legal section detection, BAAI/bge-large-en embeddings, and a retrieval confidence gate to prevent hallucinations. Containerized with Docker Compose, supporting GPT-4, Gemini, Claude, and local Llama 3.",
      achievements: [
        "Retrieval confidence gate — LLM never called on low-similarity results",
        "Structure-aware chunking preserving legal document hierarchy",
        "Pluggable LLM providers: GPT-4, Gemini, Claude, Llama 3",
        "Fully containerized with Docker Compose + NGINX"
      ]
    },
    {
      id: 3,
      year: "2023",
      title: "LeetCode Milestone",
      company: "Problem Solving Journey",
      type: "achievement",
      icon: "Trophy",
      color: "var(--color-primary)",
      summary: "Crossed 350+ problems on LeetCode and 300+ on GeeksforGeeks",
      details: "Dedicated consistent effort to mastering data structures, algorithms, and system-level problem solving. Achieved strong proficiency in array manipulation, trees, graphs, dynamic programming, and concurrency patterns — directly applicable to real-world backend development.",
      achievements: [
        "350+ problems solved on LeetCode",
        "300+ solutions on GeeksforGeeks",
        "Mastered 15+ algorithm and DSA patterns",
        "Applied DSA knowledge to production query optimization"
      ]
    },
    {
      id: 4,
      year: "2022",
      title: "B.Tech — Computer Science & Engineering",
      company: "IMS Engineering College, Ghaziabad",
      type: "education",
      icon: "BookOpen",
      color: "var(--color-accent)",
      summary: "Graduated in CSE with 7.3/10 GPA",
      details: "Completed comprehensive coursework in software engineering, algorithms, databases, operating systems, and computer networks at IMS Engineering College, Ghaziabad (2018–2022). Built a strong foundation in CS fundamentals that underpins all professional engineering work.",
      achievements: [
        "Graduated with 7.3/10 GPA",
        "Coursework: DSA, OOPs, DBMS, OS, Computer Networks",
        "B.Tech in Computer Science & Engineering (2018–2022)"
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getTypeStyles = (type) => {
    switch (type) {
      case 'career':
        return 'bg-primary/10 border-primary/30';
      case 'learning':
        return 'bg-secondary/10 border-secondary/30';
      case 'achievement':
        return 'bg-accent/10 border-accent/30';
      case 'education':
        return 'bg-primary/10 border-primary/30';
      default:
        return 'bg-muted/10 border-border';
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon name="Clock" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary">My Journey</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            The Path to Excellence
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Every challenge overcome, every skill mastered, and every milestone achieved has shaped me into the developer I am today.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-6 md:space-y-8">
            {milestones?.map((milestone, index) => (
              <div key={milestone?.id} className="relative pl-12 md:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-2.5 md:left-6 top-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-card border-2 border-primary shadow-lg shadow-primary/50"></div>

                {/* Content Card */}
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${getTypeStyles(milestone?.type)} ${expandedId === milestone?.id ? 'shadow-purple-lg' : 'hover:shadow-purple'
                    }`}
                >
                  <button
                    onClick={() => toggleExpand(milestone?.id)}
                    className="w-full p-4 md:p-6 text-left"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-card flex items-center justify-center">
                        <Icon name={milestone?.icon} size={20} color={milestone?.color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xs md:text-sm font-bold text-primary">{milestone?.year}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs md:text-sm text-muted-foreground capitalize">{milestone?.type}</span>
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                          {milestone?.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground mb-2">{milestone?.company}</p>
                        <p className="text-xs md:text-sm text-foreground">{milestone?.summary}</p>
                      </div>
                      <Icon
                        name={expandedId === milestone?.id ? "ChevronUp" : "ChevronDown"}
                        size={20}
                        className="flex-shrink-0 text-muted-foreground"
                      />
                    </div>
                  </button>

                  {expandedId === milestone?.id && (
                    <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 animate-fade-in">
                      <div className="pl-0 md:pl-16 space-y-4">
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {milestone?.details}
                        </p>
                        <div>
                          <h4 className="text-xs md:text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {milestone?.achievements?.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Icon name="CheckCircle2" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                                <span className="text-xs md:text-sm text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;