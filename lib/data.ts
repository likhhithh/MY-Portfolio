// All data sourced from portfolioData.json — edit here to update the site

export const siteConfig = {
  name: "Likhith M",
  fullName: "Malothu Likhith",
  title: "AI/ML Engineer · B.Tech @ IIT Bhilai",
  tagline: "I build AI systems people actually use — agentic RAG, multi-agent LLM orchestration, and ML pipelines.",
  description: "B.Tech student at IIT Bhilai who builds AI systems people actually use. At APTRANSCO, I shipped an agentic RAG assistant over 10,000+ documents that staff rely on daily, measured with RAGAS. I also built OrchestrAI, a multi-agent LLM orchestration platform with cost-aware model routing.",
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
  instagram: "https://www.instagram.com/likkhithhh/",
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
  "I'm a B.Tech Electrical Engineering student at IIT Bhilai with a Minor in Computer Science from IIT Mandi, and I build AI systems people actually use.",
  "At APTRANSCO I shipped a Hybrid Agentic RAG assistant over 10,000+ internal documents that staff rely on daily — measured with RAGAS and improved through data-driven iteration. I also built OrchestrAI, a 10-agent LLM orchestration platform with cost-aware routing across 11 models, plus ML projects in forecasting and anomaly detection.",
];

export const highlights = [
  "B.Tech in Electrical Engineering (IIT Bhilai) + Minor in Computer Science (IIT Mandi)",
  "Shipped an agentic RAG assistant used daily by APTRANSCO staff (Faithfulness 0.956)",
  "Built multi-agent LLM systems, data pipelines (Spark, NiFi) & ML forecasting models",
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
      { name: "SQL",         logo: "sql" },
      { name: "C++",         logo: "cpp" },
      { name: "C",           logo: "c" },
      { name: "JavaScript",  logo: "javascript" },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", logo: "scikitlearn" },
      { name: "XGBoost",      logo: "xgboost" },
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
      { name: "Agentic RAG",       logo: "rag" },
      { name: "Multi-Agent Systems", logo: "multiagent" },
      { name: "LangSmith",         logo: "langsmith" },
      { name: "RAGAS",             logo: "ragas" },
      { name: "Claude API",        logo: "claude" },
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
    category: "Data Engineering",
    skills: [
      { name: "Apache Spark", logo: "spark" },
      { name: "Apache NiFi",  logo: "nifi" },
      { name: "AWS S3",       logo: "awss3" },
      { name: "ETL Pipelines", logo: "etl" },
      { name: "Watchdog",     logo: "watchdog" },
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
      { name: "AWS S3",         logo: "awss3" },
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
      { name: "Docker",          logo: "docker" },
      { name: "Postman",         logo: "postman" },
    ],
  },
  {
    category: "Web & Backend",
    skills: [
      { name: "FastAPI",    logo: "fastapi" },
      { name: "asyncio",    logo: "asyncio" },
      { name: "Next.js",    logo: "nextjs" },
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
    slug: "orchestrai",
    title: "OrchestrAI",
    tagline: "Multi-agent LLM orchestration & RAG with cost-aware model routing",
    description:
      "A multi-agent LLM system of 10 agents on a custom async DAG engine, with hybrid RAG, SELECT-only text-to-SQL, and a cost-aware router that picks the cheapest capable model out of 11 LLMs.",
    tech: ["Python", "FastAPI", "Claude API", "AWS Bedrock", "asyncio", "BM25", "SSE"],
    featured: true,
    wip: false,
    year: "2026",
    category: "AI / Multi-Agent",
    caseStudy: {
      problem:
        "Teams want to use many LLMs, but routing every task to the biggest model is slow and expensive — and confidential data must never leave self-hosted infrastructure.",
      approach:
        "Built a custom async DAG engine running 10 agents in parallel with retries, timeouts and partial results, plus hybrid RAG (BM25 + dense embeddings merged via Reciprocal Rank Fusion) and a SELECT-only text-to-SQL agent. A cost-aware router chooses among 11 LLMs (Claude, Bedrock, local) by task complexity, accuracy needs and privacy rules.",
      outcome:
        "A production-style orchestration platform with LLM safety checks, source-grounded citations, per-run token/cost/latency tracing over SSE streaming, and 25 automated tests.",
      highlights: [
        "10 agents on a custom async DAG engine — parallel execution, retries, timeouts, partial results",
        "Cost-aware router across 11 LLMs; confidential data goes only to self-hosted models",
        "Hybrid RAG: BM25 + dense embeddings merged via Reciprocal Rank Fusion",
        "LLM safety checks for prompt injection, PII and secrets",
        "Per-run token / cost / latency tracing with SSE streaming; 25 automated tests",
      ],
    },
  },
  {
    slug: "rag-study-companion",
    title: "StudyGPT",
    tagline: "RAG-based student Q&A chatbot over 680+ college documents",
    description:
      "A RAG chatbot over 680+ college documents with semantic chunking, memory and caching — ~85% answer accuracy, ~30% lower latency and ~25% better retrieval precision, refactored into a modular, provider-agnostic architecture.",
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
        "~85% answer accuracy over 680+ documents, with ~30% lower latency and ~25% better retrieval precision.",
      highlights: [
        "RAG over 680+ college documents with semantic chunking",
        "Conversation memory and response caching (~30% lower latency)",
        "~25% better retrieval precision; ~85% answer accuracy",
        "Modular, provider-agnostic architecture (FastAPI + LangChain + ChromaDB)",
      ],
    },
  },
  {
    slug: "solar-panel-rul",
    title: "SolarSense",
    tagline: "Solar panel efficiency detection, degradation forecasting & remaining-life estimation",
    description:
      "Analysed 2–3 years of IV-curve data from 7 panels to forecast 10-year degradation and remaining useful life. An XGBoost Pmax model reached R² ≈ 0.87, and an Isolation Forest + rule-based detector flags anomalous readings.",
    tech: ["Python", "Pandas", "XGBoost", "Scikit-learn", "FastAPI", "Next.js", "Docker"],
    featured: true,
    wip: false,
    github: "https://github.com/likhhithh",
    live: "https://solar-sense-e8x4.onrender.com",
    year: "2024",
    category: "ML / Data Science",
    caseStudy: {
      problem:
        "Solar panel degradation is unpredictable, causing unexpected failures and maintenance costs — and raw IV-curve data means little to non-technical owners.",
      approach:
        "Engineered 16 features from 2–3 years of IV-curve data across 7 panels, trained an XGBoost Pmax model (tuned with GridSearchCV), and defined a remaining-life metric (80% of rated capacity as end-of-life) with colour-coded health zones.",
      outcome:
        "R² ≈ 0.87 with ~18% lower RMSE, 10-year degradation forecasts, and anomaly flags on ~5% of readings — shipped with a batch CSV/Excel upload pipeline.",
      highlights: [
        "16 engineered features; XGBoost Pmax model R² ≈ 0.87, RMSE cut ~18% via GridSearchCV",
        "10-year degradation forecast + remaining-useful-life metric with colour-coded zones",
        "Isolation Forest + rule-based anomaly detector flagging ~5% of readings",
        "Batch CSV/Excel upload pipeline, deployed with Docker on Render",
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
    role: "AI/ML Intern",
    company: "APTRANSCO (Andhra Pradesh Transmission Corporation)",
    type: "Internship",
    duration: "May 2026 – Nov 2026",
    description:
      "Built a Hybrid Agentic RAG system over 10,000+ internal PDFs — manuals, reports, orders and rules — used daily by APTRANSCO staff to get answers from large-scale document data.",
    highlights: [
      "Multi-agent LangGraph + LangChain pipeline with hybrid vector + BM25 search, CrossEncoder reranking and AWS Bedrock",
      "Defined and tracked quality metrics with a RAGAS evaluation suite and traced runs with LangSmith; 5 data-driven iteration rounds lifted Faithfulness +9.9% (0.87 → 0.956) and cut Hallucination Rate by 66% (0.13 → 0.044)",
      "Built scalable ingestion pipelines with Apache Spark; used Apache NiFi to integrate AWS S3 data flows and automated Gmail/Google Drive ingestion (100% OAuth refresh success)",
      "Added a Watchdog file-watcher that auto-ingests new files; pre-built embeddings enabled zero re-ingestion and 99.2% uptime",
      "Turned staff feedback and usage patterns into prioritised, metric-backed improvements (Answer Relevancy 0.706, Hit Rate@5 0.492 monitored throughout)",
    ],
    tech: ["Python", "FastAPI", "LangGraph", "LangChain", "LangSmith", "RAGAS", "AWS Bedrock", "Qdrant", "BM25", "CrossEncoder", "Apache Spark", "Apache NiFi", "AWS S3", "Watchdog"],
  },
  {
    role: "Domain-Specific LLM Fine-Tuning",
    company: "APTRANSCO",
    type: "Internship Project",
    duration: "2026",
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
    duration: "2026",
    description:
      "Third project under the same AIML internship — connected two independent AI applications, an AI Translator and an AI Database Assistant, over the Model Context Protocol (MCP) using FastMCP, so a single LLM client can discover and call both apps' capabilities as tools.",
    highlights: [
      "Built FastMCP servers exposing each application's features as typed, discoverable MCP tools",
      "Enabled cross-app workflows through one unified MCP client — e.g. query the database assistant, then translate the results in the same conversation",
    ],
    tech: ["Python", "FastMCP", "MCP", "LLMs"],
  },
  {
    role: "Web Developer Intern",
    company: "Basil Infotech Pvt Ltd",
    type: "Internship",
    duration: "May 2025 – Aug 2025",
    description:
      "Built a MERN hospital management platform (200+ records) with analytics dashboards powered by MongoDB aggregation pipelines, RESTful APIs, optimised queries, and reusable React.js components for real-time ambulance tracking and appointment visibility.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export const education = [
  {
    degree: "B.Tech — Electrical Engineering",
    institution: "Indian Institute of Technology (IIT) — Bhilai",
    duration: "2023 – 2027",
    gpa: "",
  },
  {
    degree: "Minor in Computer Science",
    institution: "Indian Institute of Technology (IIT) — Mandi",
    duration: "2025 – 2026",
    gpa: "",
  },
];

export const coursework = ["Data Structures & Algorithms", "DBMS", "System Design", "Operating Systems", "Computer Networks"];

export const achievements = [
  { title: "Adobe Hackathon", detail: "Round 1" },
  { title: "Flipkart GRiD 6.0", detail: "Level 1" },
  { title: "Convener", detail: "Prayatna 8.0 Sports Fest" },
  { title: "Team Member", detail: "MERAZ Cultural Fest" },
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
      "Applied AI — agentic RAG, multi-agent LLM orchestration and evaluation (RAGAS, LangSmith), and productionising models with FastAPI. I also do data engineering (Apache Spark, NiFi, AWS S3) and classic ML (XGBoost, Scikit-learn) for forecasting and anomaly detection.",
  },
  {
    question: "Do you have industry experience?",
    answer:
      "Yes — as an AI/ML Intern at APTRANSCO (May–Nov 2026) I shipped a Hybrid Agentic RAG assistant over 10,000+ internal documents that staff use daily. Before that, at Basil Infotech, I built a MERN hospital management platform with analytics dashboards and real-time ambulance tracking.",
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
