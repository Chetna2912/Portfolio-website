export const profile = {
  name: "Chetna Nagar",
  role: "Data Science Undergrad",
  tagline: "Building at the intersection of data, models, and full-stack software.",
  location: "Baran, Rajasthan, India",
  // phone: "+91 77409 27688",
  email: "chetnanagar2912@gmail.com",
  linkedin: "https://www.linkedin.com/in/chetna-nagar-011b73324/",
  github: "https://github.com/Chetna2912",
  leetcode: "https://leetcode.com/u/Chetna_Nagar/",
  resumeNote: "Resume available on request",
  education: {
    degree: "Bachelor of Science in Data Science",
    institute: "Indian Institute of Technology, Madras",
    duration: "2024 — 2028 (Expected)",
    detail: "Machine Learning · Deep Learning · Statistics · Data Structures & Algorithms · Database Management Systems · Software Engineering",
  },
};

export const about = {
  summary: [
    "I'm a third-year Data Science undergraduate, focused on building a strong foundation in software engineering, machine learning, and data-driven problem solving.",
    "I enjoy working across the stack — from building full-stack applications with Python, Laravel, React, Vue, and JavaScript to developing machine learning and generative AI solutions with Python and modern ML frameworks.",
    "Outside of coursework, I spend my time solving DSA problems, experimenting with AI/ML projects, participating in Kaggle competitions, and turning ideas into practical products that I can learn from and showcase.",
  ],
  highlights: [
    { label: "Technologies", value: "15+", note: "Across the stack" },
    { label: "DSA Problems Solved", value: "350+", note: "LeetCode" },
    { label: "Projects", value: "6+", note: "Full stack + ML" },
    { label: "Graduating", value: "2028", note: "Open to internships" },
  ],
};

export const skillGroups = [
  {
    title: "Languages & Databases",
    color: "var(--teal)",
    items: ["Python", "JavaScript", "Java", "SQL", "MySQL", "PostgreSQL"],
  },
  {
    title: "Frameworks & Libraries",
    color: "var(--violet)",
    items: ["React", "Vue.js", "Angular", "Laravel", "Flask", "FastAPI", "Django", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "AI / ML & Data",
    color: "var(--blue)",
    items: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "RAG", "LLMs", "Hugging Face"],
  },
  {
    title: "Tools & Platforms",
    color: "var(--red)",
    items: ["Git", "GitHub", "Linux", "Docker", "Vercel",  "REST APIs", "API Integration", "Render", "Weights & Biases"],
  },
  {
    title: "Concepts & Practices",
    color: "var(--amber)",
    items: [
      "Full Stack Development",
      "Data Structures & Algorithms",
      "Database Management",
      "Machine Leaning",
      "Software Engineering",
      "Software Testing",
      "Agile",
      "Jira",
      "Problem-Solving",
      "Teamwork",
      "Leadership",
      "Communication",
    ],
  },
];

// Dummy placeholder data — replace with real projects later
export const projects = [
  {
    id: "proj-01",
    title: "HealthReport AI",
    // period: "2025",
    description:
    "A full-stack healthcare report explainer that uses OCR, RAG, and LLMs to turn complex medical reports into grounded, patient-friendly explanations with source citations and safety checks.",
    stack: ["Django", "React", "RAG", "LLMs", "Celery", "PostgreSQL"],
    tags: ["AI / RAG"],
    github: "https://github.com/Chetna2912/Healthcare-AI",
    // demo: "#",
    // metric: { label: "Forecast accuracy", value: "91%" },
  },
  {
    id: "proj-02",
    title: "Military Readiness Intelligence Dashboard",
    // period: "2024",
    description:
      "A full-stack analytics dashboard for exploring synthetic operational data through KPIs, interactive charts, alerts, data validation, and drill-down views.",
    stack: ["FastAPI", "React", "TypeScript", "SQLite" , "Recharts"],
    tags: ["Analytics Dashboard"],
    github: "https://github.com/Chetna2912/-Military-Readiness-Intelligence-Dashboard",
    demo: "https://military-readiness-intelligence.onrender.com/",
    // metric: { label: "Active users", value: "1,200+" },
  },
  {
    id: "proj-03",
    title: "Shree Studio",
    // period: "2024",
    description:
      "A modern web experience built for Shree Studio, focused on clean visual presentation, responsive design, and a polished user experience.",
    stack: ["React", "JavaScript", "CSS", "Vercel"],
    tags: ["Web Development"],
    github: "https://github.com/Chetna2912",
    demo: "https://shree-studio.vercel.app/",
    // metric: { label: "ROC-AUC", value: "0.94" },
  },
  {
    id: "proj-04",
    title: "Student Study Portal",
    //period: "2023",
    description:
      "A student-focused platform designed to organize study resources, learning materials, and academic content through an accessible web interface.",
    stack: ["Full Stack", "JavaScript", "Django", "Database"],
    tags: ["Full Stack"],
    github: "https://github.com/Chetna2912/student_study_portal",
    //demo: "#",
    //metric: { label: "Teams onboarded", value: "15" },
  },
];

export const experience = [
  {
    id: "exp-01",
    role: "Full-Stack Development Intern",
    org: "WurkBook Technologies",
    period: "Jan 2026 — March 2026",
    points: [
      "Developed and enhanced full-stack web application features using Angular and Laravel.",
      "Implemented REST API integrations and backend communication workflows.",
      "Integrated email services into backend systems.",
      "Collaborated using Jira in an Agile environment.",
      "Participated in testing, debugging, deployment, and SDLC activities."
    ]
  },
  // {
  //   id: "exp-02",
  //   role: "Data Science Volunteer",
  //   org: "Campus Analytics Club, IIT Madras (Dummy)",
  //   period: "Aug 2024 — Present",
  //   points: [
  //     "Ran weekend workshops on pandas, SQL, and exploratory data analysis for 60+ first-year students.",
  //     "Co-authored a beginner-friendly guide to machine learning model evaluation, published on the club blog.",
  //   ],
  // },
  // {
  //   id: "exp-03",
  //   role: "Freelance Full Stack Developer",
  //   org: "Self-employed (Dummy)",
  //   period: "2023 — 2024",
  //   points: [
  //     "Delivered 3 client websites using React and Django, including a booking system with integrated email notifications.",
  //     "Managed the entire SDLC — requirements gathering, development, testing, and deployment.",
  //   ],
  // },
];

// export const writing = [
//   {
//     title: "What I Learned Building My First ML Pipeline End-to-End",
//     date: "Mar 2025",
//     excerpt: "Notes on the gap between a Jupyter notebook and a model that actually serves predictions in production.",
//   },
//   {
//     title: "SQL Joins, Explained the Way I Wish Someone Had Explained Them to Me",
//     date: "Nov 2024",
//     excerpt: "A visual, example-driven walkthrough of inner, outer, and self joins for beginners.",
//   },
//   {
//     title: "Django vs FastAPI: Picking the Right Tool for a Student Project",
//     date: "Jul 2024",
//     excerpt: "A practical comparison based on three real projects, not just benchmark numbers.",
//   },
// ];
