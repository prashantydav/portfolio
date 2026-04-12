export const profile = {
  name: "Prashant Yadav",
  role: "Machine Learning and AI Engineer",
  summary:
    "Machine Learning and AI Engineer with a focus on production-grade intelligent systems, conversational AI, and computer vision pipelines.",
  location: "Hyderabad, India",
  phone: "+91 7529085674",
  email: "yruprashant@gmail.com",
  github: "https://github.com/prashantydav",
  linkedin: "https://www.linkedin.com/in/prashant-yadav-b92b371a9",
  resumeFile: "/PRASHANT%20YADAV.pdf"
};

export const stack = [
  {
    category: "Data Science / Machine Learning",
    items: ["Machine Learning", "Deep Learning", "Computer Vision"]
  },
  {
    category: "ML Frameworks",
    items: ["Keras", "NumPy", "Pandas", "OpenCV", "Transformers"]
  },
  {
    category: "LLM Tools",
    items: [
      "LangChain",
      "OpenAI APIs",
      "Open-source LLMs",
      "LlamaIndex",
      "LangSmith",
      "Ollama"
    ]
  },
  {
    category: "Backend Engineering",
    items: [
      "Flask",
      "FastAPI",
      "RabbitMQ",
      "ZeroMQ",
      "PostgreSQL",
      "WebSockets",
      "Redis",
      "Multithreading"
    ]
  },
  {
    category: "Programming",
    items: ["Python", "C++", "Golang", "PostgreSQL", "Vector Databases"]
  }
];

export const experiences = [
  {
    title: "Senior Associate (AI)",
    company: "Indian Political Action Committee",
    duration: "Jun 2025 - Present",
    projects: [
      {
        name: "QueryBot - Conversational chatbot",
        stack: ["PostgreSQL", "pgvector", "Agno", "MCP", "RAG", "AWS EC2"],
        highlights: [
          "Built a ChatGPT-style political intelligence assistant on MCP + Agno for election analytics.",
          "Integrated SQL + semantic retrieval over election, survey, social, and manifesto datasets.",
          "Enabled leadership to extract constituency-level trends with much lower manual analysis effort."
        ]
      },
      {
        name: "AI Voice Survey System",
        stack: ["LiveKit", "Exotel", "Redis", "Docker", "AWS EC2"],
        highlights: [
          "Automated large-scale outbound voter surveys with a live Voice AI agent.",
          "Implemented adaptive survey logic with ASR + LLM + rule-based branching.",
          "Designed microservices and queuing to support thousands of concurrent calls."
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
        name: "Multi-Stream License Plate Recognition",
        stack: ["DeepStream", "RabbitMQ", "Golang", "Jetson Nano", "Fastag API"],
        highlights: [
          "Built a multi-stream ANPR pipeline with PGIE/SGIE models on edge devices.",
          "Transmitted detection metadata reliably via RabbitMQ + nvmsgbroker.",
          "Reduced manual intervention by 80% with real-time toll automation."
        ]
      },
      {
        name: "Vehicle Detection + Image Capture + Retraining Loop",
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
          "Captured vehicle frames in real time and shipped images to S3 for retraining.",
          "Built weekly retraining automation with experiment + data version tracking.",
          "Improved model accuracy to 95% with monitoring-driven retraining."
        ]
      }
    ]
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
    score: "86%"
  },
  {
    program: "Class 10 (CBSE)",
    school: "New St. Stephen's Public School, Agra",
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
      "How I combined MCP architecture, Agno, PostgreSQL, and vector search to create a leadership-grade analytics assistant.",
    date: "2025-11-10",
    tags: ["RAG", "PostgreSQL", "pgvector", "MCP", "Agno"],
    sections: [
      {
        heading: "Problem",
        body: [
          "Election analytics data was spread across structured tables, unstructured reports, and documents. Leadership needed a faster way to ask high-value questions without manual data pulls."
        ]
      },
      {
        heading: "System design",
        body: [
          "I designed a conversational platform on MCP architecture with Agno orchestration.",
          "The retrieval layer combined SQL queries for hard metrics and pgvector semantic search for contextual political narratives.",
          "The final response merged both retrieval channels to keep answers grounded and explainable."
        ]
      },
      {
        heading: "Impact",
        body: [
          "The system enabled directors to pull constituency and historical trend insights in minutes.",
          "Manual analysis workload dropped significantly and strategic iteration speed improved."
        ]
      }
    ]
  },
  {
    slug: "ai-voice-survey-system-at-scale",
    title: "Designing an AI Voice Survey System for Election Polling",
    excerpt:
      "A production voice pipeline using LiveKit, Exotel, Redis, and containerized microservices to run compliant outbound surveys.",
    date: "2025-12-02",
    tags: ["Voice AI", "ASR", "LiveKit", "Redis", "Microservices"],
    sections: [
      {
        heading: "Why voice",
        body: [
          "Large voter surveys need speed, consistency, and multilingual flexibility. Human-call workflows were too expensive and hard to scale." 
        ]
      },
      {
        heading: "Pipeline",
        body: [
          "Exotel and LiveKit handled telephony and real-time audio streaming.",
          "The Voice Agent integrated ASR, adaptive survey logic (LLM + rule trees), and neural TTS for two-way interactions.",
          "We stored metadata, transcripts, sentiment, call duration, and drop-off patterns for downstream analytics."
        ]
      },
      {
        heading: "Reliability and compliance",
        body: [
          "Redis queues and Dockerized microservices made concurrency predictable.",
          "We enforced disclosure messages and call recording policies to keep operations regulation-aligned."
        ]
      }
    ]
  },
  {
    slug: "deepstream-anpr-multistream",
    title: "Multi-Stream ANPR on Jetson Nano with DeepStream",
    excerpt:
      "How I deployed a high-throughput license plate recognition pipeline with RabbitMQ, Golang post-processing, and Fastag integration.",
    date: "2024-09-18",
    tags: ["DeepStream", "ANPR", "Jetson Nano", "RabbitMQ", "Computer Vision"],
    sections: [
      {
        heading: "Core architecture",
        body: [
          "The pipeline used PGIE for plate detection and SGIE for plate recognition, running across multiple streams on Jetson Nano.",
          "Detection outputs were sent via `nvmsgbroker` into RabbitMQ for reliable downstream handling."
        ]
      },
      {
        heading: "Post-processing",
        body: [
          "I built a Golang post-processing service to normalize plate strings, extract state codes, and compute confidence metrics.",
          "This made downstream analytics and business decisions stable even when upstream frames were noisy."
        ]
      },
      {
        heading: "Business outcome",
        body: [
          "Fastag API integration enabled real-time toll workflow automation.",
          "The final system reduced manual intervention by roughly 80% while maintaining high throughput."
        ]
      }
    ]
  },
  {
    slug: "vehicle-image-capture-retraining-loop",
    title: "From Real-Time Detection to Continuous Retraining",
    excerpt:
      "An end-to-end feedback loop with DeepStream capture, S3 storage, Airflow orchestration, and monitored model retraining.",
    date: "2024-12-07",
    tags: ["MLOps", "Airflow", "MLflow", "DVC", "S3"],
    sections: [
      {
        heading: "Data capture",
        body: [
          "Vehicle detections triggered image capture events in real time.",
          "The images were streamed to AWS S3 with MQTT-based messaging for low-latency coordination."
        ]
      },
      {
        heading: "Automation",
        body: [
          "Airflow orchestrated data movement and retraining schedules.",
          "MLflow tracked experiments while DVC controlled dataset versions for reproducibility."
        ]
      },
      {
        heading: "Monitoring and gains",
        body: [
          "Prometheus + Grafana monitored drift and model behavior continuously.",
          "The closed-loop retraining strategy helped lift model accuracy to 95%."
        ]
      }
    ]
  }
];
