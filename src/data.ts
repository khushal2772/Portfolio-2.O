import { Skill, Project, AcademicMilestone, ProfessionalExperience, WritingItem } from './types';

export const developerProfile = {
  name: "Khushal Singh",
  role: "B.Tech Computer Science & Engineering",
  institution: "Arya College Of Engineering", // Classic high-performing setting
  tagline: "Bridging Algorithmic Logic with Elegant Interfaces",
  aboutShort: "A dual-minded software engineer who thrives at the intersection of high-scale backend services, neural architectures, and pixel-perfect interactive design. Transforming complex system logic into intuitive user experiences.",
  email: "khushalsingh9b14@gmail.com",
  github: "https://github.com/khushal2772",
  linkedin: "https://www.linkedin.com/in/khushal-singh-a3005b332/",
  location: "Jaipur, India",
  cgpa: "8.13 / 10.0"
};

export const skillsData: Skill[] = [
  // Languages
  { name: "Python", category: "Languages", proficiency: 95, iconName: "Python" },
  // { name: "TypeScript", category: "Languages", proficiency: 90, iconName: "TypeScript" },
  { name: "JavaScript (ES6+)", category: "Languages", proficiency: 92, iconName: "JS" },
  { name: "C", category: "Languages", proficiency: 90, iconName: "C" },
  { name: "C++", category: "Languages", proficiency: 85, iconName: "Cpp" },
  { name: "SQL", category: "Languages", proficiency: 88, iconName: "SQL" },
  { name: "HTML5/CSS3", category: "Languages", proficiency: 93, iconName: "CSS" },

  // Frontend
  { name: "React", category: "Frontend", proficiency: 92, iconName: "React" },
  // { name: "Next.js", category: "Frontend", proficiency: 88, iconName: "Next" },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 95, iconName: "Tailwind" },
  // { name: "Redux Toolkit", category: "Frontend", proficiency: 84, iconName: "Redux" },
  // { name: "Framer Motion", category: "Frontend", proficiency: 90, iconName: "Motion" },

  // Backend
  // { name: "Django / Django REST", category: "Backend", proficiency: 94, iconName: "Django" },
  // { name: "Node.js (Express)", category: "Backend", proficiency: 88, iconName: "Node" },
  // { name: "PostgreSQL", category: "Backend", proficiency: 86, iconName: "Postgres" },
  // { name: "FastAPI", category: "Backend", proficiency: 85, iconName: "FastAPI" },
  // { name: "Redis", category: "Backend", proficiency: 80, iconName: "Redis" },

  // DevOps & Cloud
  // { name: "Docker", category: "DevOps & Cloud", proficiency: 90, iconName: "Docker" },
  // { name: "Kubernetes", category: "DevOps & Cloud", proficiency: 78, iconName: "Kubernetes" },
  // { name: "AWS (S3, EC2, ECS)", category: "DevOps & Cloud", proficiency: 82, iconName: "AWS" },
  // { name: "GitHub Actions (CI/CD)", category: "DevOps & Cloud", proficiency: 88, iconName: "CI" },

  // Tools & Methods
  { name: "Git & Version Control", category: "Tools & Methods", proficiency: 94, iconName: "Git" },
  { name: "Linux System Admin", category: "Tools & Methods", proficiency: 83, iconName: "Linux" },
  // { name: "Agile Scrums", category: "Tools & Methods", proficiency: 85, iconName: "Agile" },
  { name: "Figma (UI/UX Link)", category: "Tools & Methods", proficiency: 80, iconName: "Figma" }
];

export const academicJourney: AcademicMilestone[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Arya College Of Engineering",
    duration: "2024 - 2028 (Expected)",
    cgpa: "8.13 / 10.0",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems & Systems Programming",
      "Analysis & Design of Algorithms",
      // "Machine Learning & Pattern Recognition",
      // "Compiler Design",
      "Computer Networks"
    ],
    achievements: [
      // "Recipient of Golden Youth Merit scholarship in 2023 & 2024",
      "Ranked Top 2 in college hackathon out of 52 teams",
      // "Lead Organizer of 'ByteCraft' Hackathon in 2025"
    ]
  },
  // {
  //   degree: "Senior Secondary (Class XII) - CBSE Board",
  //   institution: "St. Xavier's Senior Secondary School",
  //   duration: "2021 - 2023",
  //   cgpa: "98.2%",
  //   courses: [
  //     "Physics",
  //     "Chemistry",
  //     "Mathematics",
  //     "Computer Science (Python)"
  //   ],
  //   achievements: [
  //     "School Topper with exceptional performance in Mathematics (100/100) and CS (99/100)",
  //     "State Level Science Exhibition - First Place winner"
  //   ]
  // }
];

export const professionalExperiences: ProfessionalExperience[] = [
  // {
  //   id: "exp1",
  //   role: "Full-Stack Software Engineering Intern",
  //   company: "Aether Systems",
  //   location: "Bangalore, India (Remote)",
  //   duration: "May 2025 - July 2025",
  //   description: "Led the expansion of a microservice dashboard facilitating container configurations and system diagnostics.",
  //   bullets: [
  //     "Developed interactive administrative dashboards in React, driving configuration overhead down by 40%.",
  //     "Built resilient REST APIs using Python & FastAPI, achieving a response-time threshold below 120ms for high-frequency queries.",
  //     "Established automated testing protocols using Jest and PyTest, which raised overall code coverage to 92%."
  //   ],
  //   skillsUsed: ["React", "FastAPI", "Docker", "PyTest", "TypeScript"]
  // },
  {
  id: "exp2",
  role: "Data Science Intern",
  company: "Grras",
  location: "Jaipur",
  duration: "May 2026 - July 2026",
  description: "Worked on end-to-end data analysis and machine learning workflows, transforming raw datasets into actionable insights through preprocessing, visualization, and predictive modeling.",
  bullets: [
    "Performed data cleaning, preprocessing, and exploratory data analysis (EDA) on structured datasets using Python, Pandas, and NumPy.",
    "Wrote SQL queries to extract, filter, and analyze large datasets for generating meaningful business insights and reports.",
    "Built interactive dashboards and visualizations using Power BI, Excel, and Matplotlib to identify trends, patterns, and performance metrics.",
    "Implemented machine learning models using Scikit-learn for prediction and classification tasks, evaluating performance with standard metrics.",
    "Collaborated on real-world case studies and data-driven projects while following version control practices using Git."
  ],
  skillsUsed: [
    "Python",
    "Pandas",
    "NumPy",
    "SQL",
    "Power BI",
    "Excel",
    "Scikit-learn",
    "Git"
  ]
}
];

export const projectsData: Project[] = [
  {
    id: "proj-featured",
    title: "Predictive Crop Analytics & Yield Forecaster",
    subtitle: "Enterprise Agritech Machine Learning Suite",
    description: "An end-to-end data analysis and machine learning platform to preprocess soil sensors and forecast crop yield metrics with high R² accuracy scores.",
    longDescription: "Developed to translate raw dataset queries into actionable agricultural metrics, this predictive model automates exploratory data analysis (EDA), fits Ensemble Regression trees, and hosts an interactive dashboard. Built using industrial Python analytics pipelines coupled with React visualization sheets.",
    tags: ["Python", "Scikit-learn", "Pandas", "SQL", "React", "Recharts"],
    category: "Machine Learning",
    featured: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBw6DJ-5hbqdFREorYJ4CCoAJ4qLaRfitNGgEi5G4DQ&s=10",
    keyFeatures: [
      "Exploratory Data Analysis (EDA) dashboard validating sensor patterns dynamically",
      "Machine learning models using Ensemble regression to minimize training variance",
      "Interactive SQL-backed query reporter generating custom CSV/Excel sheets",
      "Responsive Power BI styled graphics mapping yields against historic coordinates"
    ],
    githubUrl: "https://github.com/khushal2772/crop-yield-predictor",
    demoUrl: "#",
    architectureFlow: [
      { step: 1, title: "Telemetry Gathering", desc: "Retrieves soil acidity, nitrogen indices, and humidity readings using clean Pandas dataframes." },
      { step: 2, title: "Imputation & Transform", desc: "Filters outliers under IQR standard-deviations, encoding features and scaling arrays via Scikit-learn." },
      { step: 3, title: "Model Fitting Engine", desc: "Trains Random Forest predictors validating hyper-parameter bounds in cross-validation matrices." },
      { step: 4, title: "Canvas UI Projection", desc: "Renders predicted values instantly in beautiful responsive Recharts dashboards." }
    ]
  },
  {
    id: "proj-sql-optimizer",
    title: "SQL Analyzer & Execution Pathfinder",
    subtitle: "Automated Relational Query Diagnosis Utility",
    description: "An innovative diagnostic tool that performs lexical scans of raw database queries and generates visual execution cost projections.",
    tags: ["Python", "SQL", "Flask", "PostgreSQL", "Tailwind CSS"],
    category: "Python/Django",
    featured: false,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=400&h=300",
    keyFeatures: [
      "Parses complex database scripts to recommend optimized non-clustered index paths",
      "Visualizes relational dependency structures as interactive ERD node graphs",
      "Evaluates query cost matrices to highlight execution bottlenecks safely"
    ],
    githubUrl: "https://github.com/khushal2772/sql-query-pathfinder",
    demoUrl: "#"
  },
  {
    id: "proj-theme-portfolio",
    title: "Reactive Portfolio Framework",
    subtitle: "High-Performance TypeScript Theme Engine",
    description: "A fast, modular developer portfolio architecture centering interactive grid panels, motion animations, and local theme persistent modules.",
    tags: ["React", "TypeScript", "Tailwind CSS", "motion", "Lucide React"],
    category: "Frontend Architecture",
    featured: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400&h=300",
    keyFeatures: [
      "Persistent dark/light theme state machine reading system preferences",
      "Fluid page layout transition sheets powered by motion transitions",
      "Fully responsive touch targets styled for both mobile and widescreen grids"
    ],
    githubUrl: "https://github.com/khushal2772/portfolio-theme-engine",
    demoUrl: "#"
  }
];

export const philosophyData = [
  {
    title: "Algorithmic Precision",
    desc: "Complexity curves aren't just academic lectures. Every O(N log N) decision must perform smoothly on client devices under real throttling.",
    percent: 95
  },
  {
    title: "Aesthetic Rigor",
    desc: "A developer who doesn't understand typography or spatial hierarchy creates tools that frustrate. Design is code made visible.",
    percent: 90
  },
  {
    title: "DevOps Authenticity",
    desc: "If it doesn't build automatically under extreme configurations, it is broken. Automation is our source of professional security.",
    percent: 88
  }
];

export const blogArticles: WritingItem[] = [
  {
    id: "art-1",
    title: "Python Metaclasses: Demystifying Runtime Class Customization",
    platform: "Medium / TechCore",
    date: "April 2025",
    readTime: "8 min read",
    url: "#",
    excerpt: "Exploring the depth of `type` structures, dynamic object creation, and validating nested requirements before the compiler starts. Includes examples of custom database model wrappers."
  },
  {
    id: "art-2",
    title: "Vite Bundle Architectures: Transitioning from CommonJS to ESM",
    platform: "Hashnode",
    date: "January 2025",
    readTime: "6 min read",
    url: "#",
    excerpt: "How Tree-shaking and dynamic ESM hooks accelerate cold-starts. Detailed benchmarks comparing classic Webpack configurations to contemporary Vite setups."
  },
  {
    id: "art-3",
    title: "Containerizing PyTorch: Reducing CUDA Image Weights by 60%",
    platform: "Dev.to",
    date: "November 2024",
    readTime: "11 min read",
    url: "#",
    excerpt: "Multi-stage Docker builds, omitting dev compilers, and caching dependencies to ensure machine learning services spin up with minimal overhead in serverless nodes."
  }
];

export const openSourceProject = {
  name: "Pyschema-Validator",
  description: "A fast, lightweight Python dictionary validation library relying on functional decorators. Clean schema declarations, type-safe output, and zero external dependencies.",
  version: "v1.2.4",
  stats: {
    stars: "1.4k",
    forks: "182",
    downloads: "28k/month"
  },
  pipCode: "pip install pyschema-validator",
  pythonSnippet: `from pyschema import Schema, fields

# Define schema structure
user_schema = Schema({
    "id": fields.Integer(required=True),
    "username": fields.String(min_len=4, max_len=20),
    "email": fields.Email(),
    "settings": fields.Dict(default={})
})

# Fast runtime check
data = {"id": 102, "username": "ishaan", "email": "ishaan@example.com"}
is_valid, errors = user_schema.validate(data)

print(is_valid)  # Output: True`
};
