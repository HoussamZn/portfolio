import { Project, Experience, Skill } from '../types';

export const PERSONAL_INFO = {
  name: "Houssam Zitan",
  title: "AI Engineer & Data Scientist",
  bio: "Master’s student in Artificial Intelligence and Data Science at the Faculty of Sciences and Technologies of Tangier, with experience in AI engineering, data-driven optimization, and full-stack development. Passionate about solving real-world and innovative challenges",
  location: "Tangier, Morocco",
  email: "HoussamZitan2003@gmail.com",
  github: "https://github.com/houssamzn",
  linkedin: "https://linkedin.com/in/houssamzitan",
  resumeUrl: "HOUSSAM_ZITAN.pdf",
  portraitUrl: "PROFILE2.png",
  degree: "Master of Science and Technology",
  objective: "Final-year internship",
  phone: "+212663529159",

};

export const EXPERIENCES: Experience[] = [
  {
    id: '0',
    role: "Artificial Intelligence Engineer Intern",
    company: "Expleo Group",
    period: "February 2026 – August 2026",
    type: "work",
    description: [
      "Designed anddeveloped a scalable AI-powered E-learning platform integrating course management, learner analytics, secure assessments, and multimodal RAG assistance.",
      "Built a multimodal RAG assistant and an AI-based open-answer evaluation pipeline, achieving 93% Recall@5 in document retrieval and 98.32% query-routing accuracy.",
      "Technologies : Django REST, FastAPI, ReactJS, PostgreSQL, Celery, Redis, Qdrant, vLLM, RAG, Docker."
    ],
    loc : "Tangier"
  },
  {
    id: '1',
    role: "Master of  Science and Technology : Artificial Intelligence and Data Science",
    company: "Faculty of Sciences and Technologies Tangier",
    period: "2024 - 2026",
    type: "education",
    description: [
    ]
  },
  {
    id: '2',
    role: "Artificial Intelligence Engineer Intern",
    company: "YAZAKI MOROCCO",
    period: "July 2025 – September 2025",
    type: "work",
    description: [
      "Improved pallet packing efficiency by 10% using optimization algorithms and AI-based decision systems.",
      "Automated detection and validation of container placement using computer vision, reducing manual checks.",
      "Technologies : Python, Computer Vision, Fine-Tuning, YOLO, Genetic Algorithm, ThreeJS, FastAPI, ReactJS"
    ],
    loc : "Tangier"
  },
  {
    id: '3',
    role: "Artificial Intelligence & Software Engineer Intern",
    company: "DIGIUP",
    period: "April 2025 – June 2025",
    type: "work",
    description: [
      "Developed a full-stack AI-powered healthcare platform integrating intelligent diagnosis and workflow automation.",
      "Achieved 98% functional test success rate and F1-score above 0.81 across 31 medical specialties.",
      "Technologies : Python, Transformers, LLM Fine-Tuning, FastAPI, ReactJS, PostgreSQL, Docker"
    ],
    loc : "Rabat"
  },
  {
    id: '4',
    role: "Bachelor of Science and Technology : Application Development Engineering",
    company: "Faculty of Sciences and Technologies Tangier",
    period: "2023 - 2024",
    type: "education",
    description: [
    ]
  },
  {
    id: '5',
    role: "Full Stack Developer Intern",
    company: "SMART AUTOMATION TECHNOLOGIES",
    period: "April 2024 – June 2024",
    type: "work",
    description: [
      "Designed and developed a full-stack web platform for centralized management of company infrastructures.",
      "Implemented modules for asset tracking, maintenance scheduling, and user access control.",
      "Technologies : MEAN Stack (MongoDB, Express.js, Angular, Node.js)"
    ],
    loc : "Tangier"
  },
  {
    id: '6',
    role: "University Diploma in Science and Technology : Mathematics, Computer Science, Physics (MIP)",
    company: "Faculty of Sciences and Technologies Tangier",
    period: "2020 - 2023",
    type: "education",
    description: [
    ]
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "Pack and Check",
    description: "An intelligent KLT pallet-packing optimizer powered by FastAPI and React/Three.js. Includes YOLO-based computer vision model for KLT detection, a genetic algorithm optimizer, and real-time animated packing verification",
    tags: ["Computer Vision", "YOLO","FastAPI", "Genetic Algorithm", "ThreeJS","Fine-Tuning"],
    github: "https://github.com/HoussamZn/Pack-and-Check",
    image: "PACKnCECK.png"
  },
  {
    id: 'p2',
    title: "Facial expression detection",
    description: "A convolutional neural network for automatic facial-emotion recognition, paired with an interactive app for real-time detection and analysis of images or videos.",
    tags: ["Deep Learning", "CNN", "OpenCV", "TensorFlow/Keras","Image Preprocessing","Streamlit"],
    github: "https://github.com/HoussamZn/Facial-Emotion-Recognition",
    image: "Facial.png"
  },
  {
    id: 'p3',
    title: "Parkinson’s Disease Prediction with Machine Learning",
    description: "A full machine-learning workflow built from scratch, including supervised models, feature-selection experiments, and performance benchmarking on standard UCI datasets",
    tags: ["Machine Learning","Features Selection","Model Evaluation","SMOTE","PCA"],
    github: "https://github.com/HoussamZn/machine-learning-parkinsons-disease-prediction",
    image: "EFSA.png"
  },
  {
    id: 'p4',
    title: "Real-Time customer review analysis",
    description: "A real-time sentiment-analysis pipeline for Amazon reviews, featuring continuous data ingestion, live processing, and an interactive dashboard for exploring results.",
    tags: ["Kafka", "Spark", "MLIB", "MongoDB","Docker","Machine Learning","NLP","React","FastAPI"],
    github: "https://github.com/HoussamZn/Reviews-Analysis/tree/last",
    image: "SPARK.png"
  },
  {
    id: 'p5',
    title: "Performance evaluation of fuzzy clustered CBR",
    description: "A fuzzy-clustered Case-Based Reasoning system that improves knowledge retrieval and decision accuracy by organizing cases into overlapping similarity-based clusters.",
    tags: ["Machine Learning","Fuzzy C-means","Case-Based Reasoning (CBR)","Computational Cost Optimization"],
    github: "https://github.com/HoussamZn/fuzzy-cbr",
    image: "FuzzyCBR.png"
  },
  {
    id: 'p6',
    title: "Future Vision",
    description: "A web-based platform for importing, managing, and processing structured data, with built-in tools for applying machine-learning models through an intuitive interface.",
    tags: ["Machine Learning","StreamLit","Scikit-learn","Pandas" ,"Numpy"],
    github: "https://github.com/HoussamZn/future-vision",
    link:"https://future1vision.streamlit.app",
    image: "FutureVision.png"
  },
  {
    id: 'p7',
    title: "Fintech Platform",
    description: "A modular financial platform built around distributed microservices, featuring secure user and account management, real-time transaction processing, blockchain integration, and live notifications.",
    tags: ["Docker", "FastAPI", "Microservices","Kubernetes","Kafka","Jenkins","CI/CD","GitHub webhooks"],
    github: "https://github.com/HoussamZn/FinTech",
    image: "Fintech.png"
  },
  {
    id: 'p8',
    title: "Moroccan card game",
    description: "A Moroccan card game developed with an interactive C++ interface, featuring full gameplay mechanics and a polished GUI.",
    tags: ["Qt Creator","C++"],
    github: "https://github.com/HoussamZn/Ronda-Game",
    image: "CARDS.png"
  },
];

export const SKILLS: Skill[] = [
{ name: "Python", category: "Programming Languages", iconClass: "devicon-python-plain", color: "#3776AB" },
  { name: "C++", category: "Programming Languages", iconClass: "devicon-cplusplus-plain", color: "#00599C" },
  { name: "Java", category: "Programming Languages", iconClass: "devicon-java-plain", color: "#007396" },
  { name: "SQL", category: "Programming Languages", iconClass: "devicon-azuresqldatabase-plain", color: "#0078D4" },

  { name: "PyTorch", category: "Machine Learning / Deep Learning", iconClass: "devicon-pytorch-original", color: "#EE4C2C" },
  { name: "TensorFlow", category: "Machine Learning / Deep Learning", iconClass: "devicon-tensorflow-original", color: "#FF6F00" },
  { name: "Scikit-Learn", category: "Machine Learning / Deep Learning", iconClass: "devicon-scikitlearn-plain", color: "#F7931E" },
  { name: "OpenCV", category: "Machine Learning / Deep Learning", iconClass: "devicon-opencv-plain", color: "#5C3EE8" },

  { name: "Numpy", category: "Data Processing / Visualization", iconClass: "devicon-numpy-plain", color: "#013243" },
  { name: "Pandas", category: "Data Processing / Visualization", iconClass: "devicon-pandas-plain", color: "#150458" },
  { name: "Matplotlib", category: "Data Processing / Visualization", iconClass: "devicon-matplotlib-plain", color: "#11557C" },
  { name: "PowerBi", category: "Data Processing / Visualization", iconClass: "arcticons--microsoft-power-bi", color: "#F2C811" },

  { name: "Spark", category: "Big Data", iconClass: "devicon-apachespark-plain", color: "#E25A1C" },
  { name: "Kafka", category: "Big Data", iconClass: "devicon-apachekafka-plain", color: "#231F20" },
  { name: "Hadoop", category: "Big Data", iconClass: "devicon-hadoop-plain", color: "#FF652F" },
  { name: "Cassandra", category: "Big Data", iconClass: "devicon-cassandra-plain", color: "#1287B1" },

  { name: "Docker", category: "DevOps", iconClass: "devicon-docker-plain", color: "#2496ED" },
  { name: "Jenkins", category: "DevOps", iconClass: "devicon-jenkins-line", color: "#D24939" },
  { name: "Terraform", category: "DevOps", iconClass: "devicon-terraform-plain", color: "#7B42BC" },
  { name: "Git", category: "DevOps", iconClass: "devicon-git-plain", color: "#F05032" },

  { name: "React", category: "Web Development", iconClass: "devicon-react-plain", color: "#61DAFB" },
  { name: "FastAPI", category: "Web Development", iconClass: "devicon-fastapi-plain", color: "#009688" },
  { name: "Django", category: "Web Development", iconClass: "devicon-django-plain", color: "#092E20" },
  { name: "Flask", category: "Web Development", iconClass: "devicon-flask-original", color: "#000000" },
  
  // { name: "Laravel", category: "Web Development", iconClass: "devicon-laravel-original", color: "#F37626" },
  // { name: "Spring Boot", category: "Web Development", iconClass: "devicon-spring-original", color: "#F37626" },

  // { name: "PostgreSQL", category: "Databases", iconClass: "devicon-postgresql-plain", color: "#F37626" },
  // { name: "MySQL", category: "Databases", iconClass: "devicon-mysql-plain", color: "#F37626" },
  // { name: "MongoDB", category: "Databases", iconClass: "devicon-mongodb-plain", color: "#F37626" },
  // { name: "SQL Server", category: "Databases", iconClass: "devicon-microsoftsqlserver-plain", color: "#F37626" },
];