// All data sourced from portfolioData.json — edit here to update the site

export const siteConfig = {
  name: "Likhith M",
  fullName: "Malothu Likhith",
  title: "Electrical Engineer | ML & AI Enthusiast",
  tagline: "Building intelligent systems at the intersection of Machine Learning and Electrical Engineering.",
  description: "I'm a pre-final year Electrical Engineering student with a Minor in Computer Science and a deep passion for Machine Learning and Artificial Intelligence. I enjoy bridging the gap between hardware and intelligent software — from designing control systems to building ML pipelines that solve real-world problems.",
  email: "malothulikhith@email.com",
  location: "India",
  availableForWork: true,
  resume: "/likhith_ai.pdf",
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
  email:    "malothulikhith@email.com",
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
  "I'm a pre-final year Electrical Engineering student with a Minor in Computer Science and a deep passion for Machine Learning and Artificial Intelligence.",
  "I enjoy bridging the gap between hardware and intelligent software — from designing control systems to building ML pipelines that solve real-world problems. I've worked on projects spanning computer vision, signal processing, and predictive modelling.",
];

export const highlights = [
  "B.Tech in Electrical & Electronics Engineering + Minor in Computer Science",
  "Passionate about AI/ML, Deep Learning & GenAI",
  "Currently exploring RAG, GenAI & LLMs",
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
      { name: "Amazon Titan",   logo: "amazontitan" },
      { name: "Cohere",         logo: "cohere" },
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
    slug: "aptransco-rag-chatbot",
    title: "APTRANSCO Hybrid RAG Chatbot",
    tagline: "Enterprise AI document intelligence platform for a power utility",
    description:
      "A production-grade Hybrid RAG Chatbot built for Andhra Pradesh Transmission Corporation (APTRANSCO) that lets employees query 10,000+ internal documents — technical manuals, CEA guidelines, safety regulations, HR policies — in plain English. Features a 6-node LangGraph agentic pipeline, Qdrant + BM25 hybrid retrieval with Cohere reranking, cross-session memory layer, Supabase auth, and a PDF.js viewer that highlights exact retrieved passages on the source document.",
    tech: ["Python", "FastAPI", "LangGraph", "LangChain", "LlamaIndex", "AWS Bedrock", "Amazon Titan", "Qdrant", "BM25", "Cohere Rerank", "React.js", "Vite", "Supabase", "PostgreSQL", "PDF.js"],
    featured: true,
    wip: false,
    year: "2026",
    category: "AI / Enterprise",
    caseStudy: {
      problem:
        "APTRANSCO engineers and HR staff waste hours manually searching across hundreds of siloed PDFs — technical manuals, CEA standards, safety rules, office orders — to find answers. Keyword search is too shallow; important passages get missed or require knowing the exact document.",
      approach:
        "Built a 6-node LangGraph agentic pipeline: a router LLM selects the right collections from 19 Qdrant collections, a retrieval agent fuses dense vector search (Amazon Titan 1024-dim embeddings) with BM25 keyword retrieval via Reciprocal Rank Fusion, Cohere Rerank v3 surfaces the best chunks, a verification agent guards against hallucinations, and a response agent generates structured answers with inline citations. A cross-session Qdrant-backed memory layer persists verified Q&A pairs per user for context-aware multi-session dialogue. The frontend is React 19 + Vite with Supabase auth and a PDF.js viewer that fuzzy-matches and highlights exact retrieved passages.",
      outcome:
        "Full-stack enterprise AI assistant capable of answering complex multi-document queries with source citations, page-level PDF highlighting, cross-session memory, and sub-5-second response times. Deployed internally at APTRANSCO for pilot use.",
      highlights: [
        "6-node LangGraph agentic workflow (Route → Retrieve → Verify → Respond + Memory R/W)",
        "Hybrid retrieval: Qdrant vector search + BM25 merged via Reciprocal Rank Fusion",
        "Cohere Rerank v3 cross-encoder reranking across 19 document collections",
        "Cross-session memory layer: per-user Qdrant store, similarity threshold 0.72, ~0.3s latency",
        "PDF.js viewer highlights exact retrieved passage on source document canvas",
        "Supabase auth (email, magic link, Google OAuth) + PostgreSQL with RLS",
        "Anti-hallucination verification agent before every response",
        "React 19 + Vite frontend with typewriter animation and lazy-loaded chat history",
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
    slug: "rag-study-companion",
    title: "AI Study Companion",
    tagline: "RAG chatbot for academic PDF Q&A",
    description:
      "Designed a Retrieval-Augmented Generation (RAG) pipeline for academic PDF Q&A, leveraging embedding models and ChromaDB for high-precision semantic vector search and document retrieval.",
    tech: ["Python", "LangChain", "ChromaDB", "Hugging Face", "FastAPI", "Streamlit"],
    featured: true,
    wip: false,
    github: "https://github.com/likhhithh",
    year: "2024",
    category: "NLP / GenAI",
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
];

// ── Experience ────────────────────────────────────────────────────────────────

export interface ExperienceEntry {
  role: string;
  company: string;
  type: string;
  duration: string;
  description: string;
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "AIML Intern",
    company: "APTRANSCO",
    type: "Internship",
    duration: "May 2026 – Present",
    description:
      "Building an enterprise-grade Hybrid RAG Chatbot for Andhra Pradesh Transmission Corporation (APTRANSCO) that lets employees query 10,000+ internal documents — technical manuals, CEA guidelines, HR policies, safety regulations, office orders — in plain English. Designed and implemented a 6-node LangGraph agentic pipeline: a router agent selects relevant Qdrant collections, a retrieval agent fuses dense vector search (Amazon Titan Text V2 embeddings, 1024-dim) with BM25 keyword retrieval via Reciprocal Rank Fusion, a Cohere Rerank v3 cross-encoder reranks the merged results, a verification agent checks answer groundedness (hallucination guard), and a response agent generates structured answers with inline citations. Built a cross-session memory layer backed by a dedicated Qdrant collection — verified Q&A pairs are embedded and stored per user, retrieved at query time (similarity ≥ 0.72, top-4) and injected as supplementary context, enabling context-aware multi-session dialogue with only ~0.3s added latency. The full-stack product features a React 19 + Vite frontend with a 3-panel layout (document navigator, chat, sources), typewriter-animated AI responses, Supabase-backed auth (email/password, magic link, Google OAuth), lazy-loaded conversation history stored in PostgreSQL (RLS-enforced), and a PDF.js viewer that highlights the exact retrieved passage on the source document canvas using fuzzy text matching.",
    tech: ["Python", "FastAPI", "LangGraph", "LangChain", "LlamaIndex", "AWS Bedrock", "Amazon Titan", "Qdrant", "BM25", "Cohere Rerank", "React.js", "Vite", "Supabase", "PostgreSQL", "PDF.js"],
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
