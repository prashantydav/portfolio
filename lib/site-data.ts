export const profile = {
  name: "Prashant Yadav",
  role: "AI / ML Engineer",
  summary:
    "I design and ship intelligent systems that combine LLM workflows, computer vision inference, and production-grade backend engineering.",
  location: "Hyderabad, India",
  phone: "+91 7529085674",
  email: "yruprashant@gmail.com",
  github: "https://github.com/prashantydav",
  linkedin: "https://www.linkedin.com/in/prashant-yadav-b92b371a9",
  resumeFile: "/PRASHANT%20YADAV.pdf"
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" }
];

export const heroHighlights = [
  "LLM + RAG products in production",
  "Real-time computer vision pipelines",
  "MLOps loops for measurable accuracy gains"
];

export const stack = [
  {
    category: "Core AI",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "Transformers"]
  },
  {
    category: "LLM Engineering",
    items: ["OpenAI APIs", "LangChain", "LlamaIndex", "LangSmith", "Ollama", "RAG"]
  },
  {
    category: "Backend + Infra",
    items: [
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "WebSockets",
      "Docker",
      "AWS EC2"
    ]
  },
  {
    category: "Data + MLOps",
    items: ["Airflow", "MLflow", "DVC", "Prometheus", "Grafana", "S3", "pgvector"]
  },
  {
    category: "Programming",
    items: ["Python", "Golang", "C++", "SQL"]
  }
];

type Experience = {
  title: string;
  company: string;
  duration: string;
  projects: {
    name: string;
    stack: string[];
    highlights: string[];
  }[];
};

export const experiences: Experience[] = [
  {
    title: "Senior Associate (AI)",
    company: "Indian Political Action Committee",
    duration: "Jun 2025 - Present",
    projects: [
      {
        name: "QueryBot - Political Intelligence Assistant",
        stack: ["Agno", "MCP", "PostgreSQL", "pgvector", "RAG", "AWS EC2"],
        highlights: [
          "Delivered a conversational decision-support assistant for election analytics.",
          "Blended SQL retrieval and semantic search to answer both metric-heavy and contextual questions.",
          "Reduced dependency on manual constituency-level analysis for leadership teams."
        ]
      },
      {
        name: "Voice-Based Survey Automation Platform",
        stack: ["LiveKit", "Exotel", "Redis", "Docker", "ASR", "LLM orchestration"],
        highlights: [
          "Built a scalable voice AI system for outbound voter interaction campaigns.",
          "Implemented adaptive survey flows with dynamic branching based on responses.",
          "Designed queue-backed microservices to support high concurrent call volume."
        ]
      }
    ]
  },
  {
    title: "AI and Deep Learning Engineer",
    company: "Stackfusion Pvt. Ltd.",
    duration: "Apr 2023 - May 2025",
    projects: [
      {
        name: "Multi-Stream ANPR System",
        stack: ["DeepStream", "Jetson Nano", "RabbitMQ", "Golang", "Fastag API"],
        highlights: [
          "Built edge ANPR inference across multiple camera streams using PGIE/SGIE models.",
          "Engineered reliable metadata delivery through nvmsgbroker and RabbitMQ.",
          "Enabled near real-time toll flow automation with significantly less human intervention."
        ]
      },
      {
        name: "Detection-to-Retraining Feedback Loop",
        stack: [
          "DeepStream",
          "AWS S3",
          "MQTT",
          "Airflow",
          "PyTorch",
          "MLflow",
          "DVC",
          "Prometheus",
          "Grafana"
        ],
        highlights: [
          "Automated image capture from production detections for model improvement cycles.",
          "Built weekly retraining with experiment tracking and dataset versioning.",
          "Raised field accuracy through telemetry-driven model updates."
        ]
      }
    ]
  }
];

export const featuredProjects = [
  {
    title: "QueryBot: LLM + SQL + Vector Search",
    description:
      "A multi-source assistant that answers electoral intelligence questions with grounded responses and auditable retrieval paths.",
    tech: ["PostgreSQL", "pgvector", "RAG", "MCP", "Agno"],
    href: "/blog/querybot-political-intelligence-rag"
  },
  {
    title: "AI Voice Survey Engine",
    description:
      "A production voice automation stack for large-scale outreach with live speech handling and compliance-aware workflow logic.",
    tech: ["LiveKit", "Exotel", "Redis", "Docker", "Voice AI"],
    href: "/blog/ai-voice-survey-system-at-scale"
  },
  {
    title: "Edge ANPR for Toll Workflows",
    description:
      "DeepStream-based license plate pipeline deployed on Jetson devices with resilient event transport and downstream API integration.",
    tech: ["DeepStream", "Jetson Nano", "RabbitMQ", "Golang"],
    href: "/case-studies/anpr-system"
  },
  {
    title: "Continuous CV Retraining Loop",
    description:
      "A closed-loop MLOps architecture linking real-time detections to curated data collection and scheduled retraining.",
    tech: ["Airflow", "MLflow", "DVC", "S3", "Prometheus"],
    href: "/blog/vehicle-image-capture-retraining-loop"
  }
];

export const services = [
  {
    title: "LLM Product Engineering",
    detail:
      "End-to-end assistants with retrieval, tool-use workflows, evaluation hooks, and production deployment patterns."
  },
  {
    title: "Computer Vision Systems",
    detail:
      "Real-time pipelines for detection and recognition workloads on edge and cloud environments."
  },
  {
    title: "MLOps + Model Lifecycle",
    detail:
      "Data versioning, experiment tracking, retraining orchestration, and observability for stable model performance."
  },
  {
    title: "AI Backend Architecture",
    detail:
      "API-first microservices with resilient messaging and scalable data infrastructure for ML applications."
  }
];

export const education = [
  {
    program: "B.Tech in Computer Science and Engineering",
    school: "ADGITM (GGSIPU), New Delhi",
    duration: "Aug 2019 - Jul 2023",
    score: "CGPA: 8.8"
  },
  {
    program: "Class 12 (CBSE)",
    school: "Army Public School, Bathinda",
    duration: "",
    score: "86%"
  },
  {
    program: "Class 10 (CBSE)",
    school: "New St. Stephen's Public School, Agra",
    duration: "",
    score: "87.6%"
  }
];

export const certifications = [
  "Intro to Machine Learning in Production",
  "Convolutional Neural Networks",
  "Data Analysis with Python"
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "querybot-political-intelligence-rag",
    title: "Building QueryBot: Political Intelligence with RAG + pgvector",
    excerpt:
      "How I fused MCP-style orchestration, SQL retrieval, and vector search to deliver a practical analytics assistant.",
    date: "2025-11-10",
    tags: ["RAG", "PostgreSQL", "pgvector", "MCP", "Agno"],
    sections: [
      {
        heading: "Challenge",
        body: [
          "Political datasets were fragmented across structured databases and unstructured reports, which slowed insight generation."
        ]
      },
      {
        heading: "Architecture",
        body: [
          "I designed a retrieval strategy that combines exact SQL querying and semantic recall using vector embeddings.",
          "The assistant composes answers from both channels so outputs stay factual while preserving narrative context."
        ]
      },
      {
        heading: "Result",
        body: [
          "Decision-makers could run constituency-level exploration in minutes, reducing manual analysis loops."
        ]
      }
    ]
  },
  {
    slug: "ai-voice-survey-system-at-scale",
    title: "Designing an AI Voice Survey System for Election Polling",
    excerpt:
      "A resilient voice AI stack for high-volume outreach using live audio handling, adaptive prompts, and queue-backed services.",
    date: "2025-12-02",
    tags: ["Voice AI", "ASR", "LiveKit", "Redis", "Microservices"],
    sections: [
      {
        heading: "Why this system",
        body: [
          "Manual calling workflows are costly and inconsistent at the scale required for time-bound campaign analytics."
        ]
      },
      {
        heading: "Implementation",
        body: [
          "LiveKit and Exotel managed telephony and streaming while application services orchestrated speech and survey logic.",
          "Redis queues coordinated workloads to preserve responsiveness during traffic spikes."
        ]
      },
      {
        heading: "Operational impact",
        body: [
          "The platform handled large call volumes with better repeatability and richer interaction-level analytics."
        ]
      }
    ]
  },
  {
    slug: "deepstream-anpr-multistream",
    title: "Multi-Stream ANPR on Jetson Nano with DeepStream",
    excerpt:
      "Deploying high-throughput license plate recognition at the edge with robust event delivery and post-processing.",
    date: "2024-09-18",
    tags: ["DeepStream", "ANPR", "Jetson Nano", "RabbitMQ", "Computer Vision"],
    sections: [
      {
        heading: "Pipeline",
        body: [
          "PGIE and SGIE stages were tuned for plate detection and recognition across multiple concurrent streams."
        ]
      },
      {
        heading: "Reliability design",
        body: [
          "Metadata events were passed through nvmsgbroker into RabbitMQ and normalized by Golang services."
        ]
      },
      {
        heading: "Outcome",
        body: [
          "The deployed workflow supported toll automation with faster processing and lower manual intervention."
        ]
      }
    ]
  },
  {
    slug: "vehicle-image-capture-retraining-loop",
    title: "From Real-Time Detection to Continuous Retraining",
    excerpt:
      "Creating a feedback architecture where production detections continuously improve model quality.",
    date: "2024-12-07",
    tags: ["MLOps", "Airflow", "MLflow", "DVC", "S3"],
    sections: [
      {
        heading: "Data flow",
        body: [
          "The system captures inference frames in production and stores them in S3 for curated retraining batches."
        ]
      },
      {
        heading: "Lifecycle control",
        body: [
          "Airflow orchestrates scheduling while MLflow and DVC preserve experiment and dataset traceability."
        ]
      },
      {
        heading: "Monitoring",
        body: [
          "Prometheus and Grafana dashboards expose drift indicators that trigger targeted retraining decisions."
        ]
      }
    ]
  }
];
