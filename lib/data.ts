// All data sourced from portfolioData.json — edit here to update the site

export const siteConfig = {
  name: "Likhith M",
  fullName: "Malothu Likhith",
  title: "Electrical Engineer | ML & AI Enthusiast",
  tagline: "Building intelligent systems at the intersection of Machine Learning and Electrical Engineering.",
  description: "I'm a final year Electrical Engineering student with a Minor in Computer Science and a deep passion for Machine Learning and Artificial Intelligence. I enjoy bridging the gap between hardware and intelligent software — from designing control systems to building ML pipelines that solve real-world problems.",
  email: "malothulikhith@gmail.com",
  location: "India",
  availableForWork: true,
  resume: "/Likhith_Resume.pdf",
  greeting: "Hi,",
};

export const navItems = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog",     href: "/blogs" },
];

export const socials = {
  github:   "https://github.com/likhhithh",
  linkedin: "https://linkedin.com/in/likhithmalothu01",
  email:    "malothulikhith@gmail.com",
  twitter:  "",
};

// ── Hero ──────────────────────────────────────────────────────────────────────

export const heroOpenTo = ["AI/ML", "Data Science", "Software Engineering", "Gen AI & RAG"];

export const heroStats = [
  { value: 4,   suffix: "+",  label: "Projects Shipped" },
  { value: 3,   suffix: "+",  label: "Years Building" },
  { value: 7,   suffix: "+",  label: "Tech Stacks" },
];

// ── About ─────────────────────────────────────────────────────────────────────

export const aboutText = [
  "I'm a final year Electrical Engineering student with a Minor in Computer Science and a deep passion for Machine Learning and Artificial Intelligence.",
  "I enjoy bridging the gap between hardware and intelligent software — from designing control systems to building ML pipelines that solve real-world problems. I've worked on projects spanning RAG pipelines, generative AI, computer vision, and predictive modelling.",
];

export const highlights = [
  "B.Tech in Electrical & Electronics Engineering + Minor in Computer Science",
  "Passionate about AI/ML, Deep Learning & GenAI",
  "Built production RAG systems, agentic pipelines & LLM-powered apps",
];

export const metrics = [
  { value: 4,   suffix: "+",  label: "Projects Shipped" },
  { value: 3,   suffix: "+",  label: "Years Building" },
  { value: 7,   suffix: "+",  label: "Tech Stacks" },
  { value: 100, suffix: "%",  label: "Remote-Friendly" },
];

// ── Skills — with logo keys for icon rendering ────────────────────────────────

export interface Skill {
  name: string;
  logo: string; // key used to render SVG/img logo
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python",      logo: "python" },
      { name: "C++",         logo: "cpp" },
      { name: "C",           logo: "c" },
      { name: "JavaScript",  logo: "javascript" },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", logo: "scikitlearn" },
      { name: "Pandas",       logo: "pandas" },
      { name: "NumPy",        logo: "numpy" },
      { name: "OpenCV",       logo: "opencv" },
      { name: "Matplotlib",   logo: "matplotlib" },
    ],
  },
  {
    category: "Deep Learning",
    skills: [
      { name: "TensorFlow",   logo: "tensorflow" },
      { name: "Keras",        logo: "keras" },
      { name: "PyTorch",      logo: "pytorch" },
      { name: "CNNs",         logo: "cnn" },
      { name: "Transformers", logo: "transformers" },
    ],
  },
  {
    category: "NLP & GenAI",
    skills: [
      { name: "NLP",               logo: "nlp" },
      { name: "LLMs",              logo: "llm" },
      { name: "Prompt Engineering", logo: "prompt" },
      { name: "LangChain",         logo: "langchain" },
      { name: "LangGraph",         logo: "langgraph" },
      { name: "LlamaIndex",        logo: "llamaindex" },
      { name: "RAG",               logo: "rag" },
      { name: "MCP",               logo: "mcp" },
      { name: "FastMCP",           logo: "fastmcp" },
    ],
  },
  {
    category: "Fine-Tuning & LLMOps",
    skills: [
      { name: "Fine-Tuning",      logo: "finetuning" },
      { name: "QLoRA",            logo: "qlora" },
      { name: "PEFT / LoRA",      logo: "peft" },
      { name: "BitsAndBytes",     logo: "bitsandbytes" },
      { name: "Hugging Face Hub", logo: "huggingface" },
      { name: "Model Evaluation", logo: "evaluation" },
    ],
  },
  {
    category: "Vector Databases",
    skills: [
      { name: "Qdrant",   logo: "qdrant" },
      { name: "ChromaDB", logo: "chromadb" },
    ],
  },
  {
    category: "Cloud & AI Services",
    skills: [
      { name: "AWS Bedrock",    logo: "awsbedrock" },
      { name: "AWS EC2",        logo: "awsec2" },
      { name: "Amazon Titan",   logo: "amazontitan" },
      { name: "Cohere",         logo: "cohere" },
      { name: "CUDA",           logo: "cuda" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git",             logo: "git" },
      { name: "GitHub",          logo: "github" },
      { name: "VS Code",         logo: "vscode" },
      { name: "Jupyter",         logo: "jupyter" },
      { name: "Google Colab",    logo: "colab" },
      { name: "Linux",           logo: "linux" },
      { name: "Apache Spark",    logo: "spark" },
    ],
  },
  {
    category: "Web & Backend",
    skills: [
      { name: "FastAPI",    logo: "fastapi" },
      { name: "React.js",   logo: "react" },
      { name: "Node.js",    logo: "nodejs" },
      { name: "MongoDB",    logo: "mongodb" },
      { name: "Express.js", logo: "express" },
      { name: "Streamlit",  logo: "streamlit" },
      { name: "Supabase",   logo: "supabase" },
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "Vite",       logo: "vite" },
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  featured: boolean;
  wip?: boolean;
  github?: string;
  live?: string;
  image?: string;
  year: string;
  category: string;
  caseStudy: {
    problem: string;
    approach: string;
    outcome: string;
    highlights: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "rag-study-companion",
    title: "StudyGPT",
    tagline: "RAG chatbot for academic PDF Q&A",
    description:
      "Designed a Retrieval-Augmented Generation (RAG) pipeline for academic PDF Q&A, leveraging embedding models and ChromaDB for high-precision semantic vector search and document retrieval.",
    tech: ["Python", "LangChain", "ChromaDB", "Hugging Face", "FastAPI", "Streamlit"],
    featured: true,
    wip: false,
    github: "https://github.com/likhhithh",
    live: "https://studygpt-3a8q.onrender.com",
    year: "2024",
    category: "AI / RAG",
    caseStudy: {
      problem:
        "Students struggle to quickly find answers from dense academic PDFs across multiple documents.",
      approach:
        "RAG pipeline with ChromaDB vector store, semantic chunking, and HuggingFace embeddings for precise document retrieval.",
      outcome:
        "High-precision Q&A over academic documents with source citations returned alongside answers.",
      highlights: [
        "ChromaDB vector store with semantic chunking",
        "HuggingFace embedding models for retrieval",
        "FastAPI backend + Streamlit chat interface",
        "Source-cited answers with page-level provenance",
      ],
    },
  },
  {
    slug: "solar-panel-rul",
    title: "SolarSense",
    tagline: "ML pipeline to predict remaining useful life of solar panels",
    description:
      "Developed an ML pipeline to predict the remaining useful life of solar panels using time-series data and regression models. Implemented feature engineering and model evaluation techniques to improve prediction accuracy.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    featured: true,
    wip: false,
    github: "https://github.com/likhhithh",
    live: "https://solar-sense-e8x4.onrender.com",
    year: "2024",
    category: "ML / Data Science",
    caseStudy: {
      problem:
        "Solar panel degradation is unpredictable, causing unexpected failures and maintenance costs.",
      approach:
        "Time-series feature engineering + regression models trained on panel telemetry data to predict RUL.",
      outcome:
        "Improved prediction accuracy through systematic feature engineering and model evaluation.",
      highlights: [
        "Time-series feature engineering on panel telemetry",
        "Multiple regression models evaluated (Linear, RF, XGBoost)",
        "Pandas + NumPy data pipeline",
        "Matplotlib visualisations for model insights",
      ],
    },
  },
  {
    slug: "samachr-ai",
    title: "Samachr AI",
    tagline: "AI-powered news intelligence platform — live at samachr.in",
    description:
      "An AI-powered news intelligence platform that aggregates, summarises, and personalises news using large language models. Built with a full-stack architecture, it delivers real-time, context-aware news briefs.",
    tech: ["Python", "LLMs", "RAG", "FastAPI", "React.js", "Node.js"],
    featured: true,
    wip: true,
    github: undefined,
    live: "https://www.samachr.in",
    image: "/samachr-logo.png",
    year: "2025",
    category: "AI / Full-Stack",
    caseStudy: {
      problem:
        "News consumption is fragmented and overwhelming. Readers spend more time searching than reading.",
      approach:
        "Built a full-stack pipeline that ingests, summarises, and personalises news using LLMs and RAG so readers see only what matters to them.",
      outcome:
        "Live at samachr.in with real-time news ingestion and LLM-powered summaries.",
      highlights: [
        "LLM-powered abstractive news summarisation",
        "RAG pipeline for context-aware retrieval",
        "Full-stack: FastAPI backend + React.js frontend",
        "Live in active development at samachr.in",
      ],
    },
  },
  {
    slug: "snapit",
    title: "Snapit",
    tagline: "Scan documents, sign & export as PDF — right from your phone",
    description:
      "A Flutter mobile app that lets users scan physical documents using the camera, draw their own signature on-screen, and export the final signed document as a PDF — all offline.",
    tech: ["Flutter", "Dart", "PDF Generation", "Camera API", "Canvas/Signature"],
    featured: true,
    wip: false,
    image: "/snapit-logo.png",
    github: "https://github.com/likhhithh",
    year: "2025",
    category: "Mobile App",
    caseStudy: {
      problem:
        "Signing and sharing scanned documents on mobile requires multiple apps — a scanner, a signature tool, and a PDF exporter.",
      approach:
        "Built a single Flutter app that covers the full flow: camera-based document scanning, freehand signature drawing on a canvas, and PDF generation — all in one place.",
      outcome:
        "A clean, offline-capable mobile app that handles the complete scan-sign-export workflow with no external dependencies.",
      highlights: [
        "Camera-based document scanning with auto-crop",
        "Freehand signature drawing on canvas",
        "Export signed document as PDF",
        "Fully offline — no cloud dependency",
        "Built with Flutter + Dart for cross-platform (iOS & Android)",
      ],
    },
  },
  {
    slug: "bfit-fitness-tracker",
    title: "B-FIT Fitness Tracker",
    tagline: "MERN stack fitness tracking web application",
    description:
      "Developed a web application for tracking fitness activities with a MERN stack architecture enabling user workout logging and performance tracking.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    featured: false,
    wip: false,
    github: "https://github.com/likhhithh",
    year: "2024",
    category: "Full-Stack",
    caseStudy: {
      problem: "Fitness enthusiasts lack a simple, self-hosted tool for logging and tracking workouts.",
      approach: "MERN stack web app with user auth, workout logging, and performance dashboards.",
      outcome: "Fully functional fitness tracker with workout logging and performance visualisation.",
      highlights: [
        "MERN stack: MongoDB, Express.js, React.js, Node.js",
        "User authentication and session management",
        "Workout logging with performance tracking",
        "Responsive UI built with React.js",
      ],
    },
  },
];

// ── Experience ────────────────────────────────────────────────────────────────

export interface ExperienceEntry {
  role: string;
  company: string;
  type: string;
  duration: string;
  description: string;
  highlights?: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "AIML Intern",
    company: "APTRANSCO",
    type: "Internship",
    duration: "May 2026 – Present",
    description:
      "Built a production Hybrid Agentic RAG system for APTRANSCO serving 10,000+ internal PDFs — the company's entire scanned document base, including manuals, reports, orders, and rules — now actively used by staff.",
    highlights: [
      "Designed a multi-agent LangGraph pipeline (Router → Retrieval → Verification → Response) with hybrid vector + BM25 search, CrossEncoder reranking, and hallucination prevention on AWS Bedrock",
      "Achieved state-of-the-art Faithfulness 0.956 and Hallucination Rate 0.044 through 5 iterative optimization rounds on chunking strategy, reranking thresholds, and prompt engineering",
      "Improved Faithfulness by +9.9% (0.87 → 0.956) and cut Hallucination by 66% (0.13 → 0.044)",
      "Pre-built vector embeddings enable zero re-ingestion deployment with instant cold-start, Answer Relevancy 0.706, Hit Rate@5 0.492, and 99.2% uptime",
    ],
    tech: ["Python", "FastAPI", "LangGraph", "LangChain", "LlamaIndex", "AWS Bedrock", "Amazon Titan", "Qdrant", "BM25", "Cohere Rerank", "React.js", "Vite", "Supabase", "PostgreSQL", "PDF.js"],
  },
  {
    role: "Domain-Specific LLM Fine-Tuning",
    company: "APTRANSCO",
    type: "Internship Project",
    duration: "2026 – Present",
    description:
      "Second project under the same AIML internship — building a production-quality pipeline to fine-tune Qwen 3.5 4B on APTRANSCO's internal document base — scanned documents, manuals, reports, and more from across the company — using QLoRA (Quantized Low-Rank Adaptation), making the model domain-aware for company-wide document Q&A.",
    highlights: [
      "Built an end-to-end data pipeline — raw PDF/document ingestion, OCR extraction, cleaning, chunking, and instruction-dataset generation",
      "Configured 4-bit quantization (NF4) with BitsAndBytes and LoRA adapters (rank-64, RSLoRA) targeting all attention and FFN projection layers",
      "Set up training on AWS EC2 GPU instances (CUDA 12.1, A100-class) with checkpointing and callbacks",
      "Evaluated model quality using BLEU, ROUGE, BERTScore, perplexity, and latency benchmarks",
      "Built Hugging Face Hub integration to upload/download/merge LoRA adapters with the base model",
    ],
    tech: ["Python", "PyTorch", "Hugging Face Transformers", "PEFT", "QLoRA", "BitsAndBytes", "Qwen 3.5 4B", "AWS EC2", "CUDA", "Hugging Face Hub"],
  },
  {
    role: "Multi-App AI Integration with MCP",
    company: "APTRANSCO",
    type: "Internship Project",
    duration: "2026 – Present",
    description:
      "Third project under the same AIML internship — connected two independent AI applications, an AI Translator and an AI Database Assistant, over the Model Context Protocol (MCP) using FastMCP, so a single LLM client can discover and call both apps' capabilities as tools.",
    highlights: [
      "Built FastMCP servers exposing each application's features as typed, discoverable MCP tools",
      "Enabled cross-app workflows through one unified MCP client — e.g. query the database assistant, then translate the results in the same conversation",
    ],
    tech: ["Python", "FastMCP", "MCP", "LLMs"],
  },
  {
    role: "Web Development Intern",
    company: "Basil Infotech Pvt Ltd",
    type: "Internship",
    duration: "May 2025 – August 2025",
    description:
      "Built a Smart Hospital Management System (MERN stack) with real-time ambulance tracking, doctor booking, and prescription management for 200+ records.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export const education = [
  {
    degree: "B.Tech — Electrical & Electronics Engineering",
    institution: "Indian Institute of Technology (IIT) — Bhilai",
    duration: "2022 – 2027",
    gpa: "",
  },
  {
    degree: "Minor in Computer Science",
    institution: "Indian Institute of Technology (IIT) — Mandi",
    duration: "2025 – 2026",
    gpa: "",
  },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What kind of roles are you looking for?",
    answer:
      "I'm actively looking for roles in Data Science, AI/ML Engineering, and Software Engineering — internships or full-time. I'm especially interested in positions involving LLMs, RAG systems, or ML pipelines.",
  },
  {
    question: "Are you available for remote work?",
    answer:
      "Yes, fully remote-friendly. I'm based in India (IST) and can collaborate across time zones without issues.",
  },
  {
    question: "What's your strongest technical area?",
    answer:
      "Machine Learning and GenAI — specifically building RAG pipelines, fine-tuning LLMs, and productionising ML models with FastAPI. I also have a solid foundation in data engineering with Pandas, NumPy, and Scikit-learn.",
  },
  {
    question: "Do you have industry experience?",
    answer:
      "Yes — I interned at Basil Infotech Pvt Ltd where I built a Smart Hospital Management System using the MERN stack, handling real-time ambulance tracking and prescription management for 200+ records.",
  },
  {
    question: "How quickly do you respond to messages?",
    answer:
      "Usually within 24 hours on weekdays. LinkedIn DMs or email are the fastest ways to reach me.",
  },
  {
    question: "What are you currently learning?",
    answer:
      "Deepening my understanding of LLM fine-tuning, agentic AI frameworks, and scalable ML deployment. Also exploring MLOps tooling and vector database optimisation.",
  },
];

// ── Blog Posts (placeholder — real posts coming) ──────────────────────────────

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "aptransco-hybrid-rag-chatbot",
    title: "Building an Enterprise Hybrid RAG Chatbot for APTRANSCO",
    excerpt:
      "How I designed and built a production-grade document intelligence platform for a state power utility — a 6-node LangGraph agentic pipeline, Qdrant + BM25 hybrid retrieval with Cohere reranking, a cross-session memory layer, and a PDF.js viewer that highlights exact retrieved passages. A deep-dive into every architectural decision.",
    date: "2026-06-02",
    readTime: "12 min",
    tags: ["RAG", "LangGraph", "AWS Bedrock", "Enterprise AI", "Qdrant"],
  },
  {
    slug: "building-rag-pipeline",
    title: "Building a RAG Pipeline from Scratch",
    excerpt:
      "A step-by-step walkthrough of building a Retrieval-Augmented Generation pipeline for academic Q&A using LangChain and ChromaDB.",
    date: "2025-04-10",
    readTime: "7 min",
    tags: ["RAG", "LangChain", "GenAI"],
  },
  {
    slug: "solar-panel-ml",
    title: "Predicting Solar Panel Degradation with ML",
    excerpt:
      "How I built a time-series ML pipeline to predict remaining useful life of solar panels — feature engineering, model selection, and lessons learned.",
    date: "2025-03-22",
    readTime: "5 min",
    tags: ["ML", "Python", "Data Science"],
  },
];
