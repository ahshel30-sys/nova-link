export const site = {
  name: "NOVALINK",
  tagline: "BUILD WHAT'S NEXT.",
  email: "hello@novalink-demo.com",
  phone: "+1 (212) 555-0147",
  location: "New York · London · Remote",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#solutions" },
    { label: "Technology", href: "#technology" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "X", href: "https://x.com/" },
  ],
};

export const credits = [
  "NORTHLINE", "AXIOM GROUP", "HELIO SYSTEMS", "MERIDIAN LABS", "ATLAS CLOUD",
  "VECTOR HEALTH", "ORBIT FINANCE", "FIELDWORK", "KINETIC CO.",
];

export const services = [
  { no: "01", title: "AI & Intelligent Systems", text: "AI-powered applications, intelligent workflows, data-driven solutions and machine learning integrations.", tags: ["Machine learning", "AI APIs", "Evals", "RAG"] },
  { no: "02", title: "Software Engineering", text: "Custom web applications, scalable platforms, modern software architecture and digital products.", tags: ["Next.js", "TypeScript", "Node.js", "APIs"] },
  { no: "03", title: "Intelligent Automation", text: "Workflow automation, process optimization and connected systems that remove manual work.", tags: ["Workflows", "Agents", "Webhooks", "Queues"] },
  { no: "04", title: "Cloud & Infrastructure", text: "Cloud architecture, deployment, infrastructure optimization and system reliability.", tags: ["Docker", "CI/CD", "Observability", "Scaling"] },
  { no: "05", title: "Digital Experience", text: "Modern websites, user experience design, interactive interfaces and digital products.", tags: ["Design systems", "Motion", "UX", "Accessibility"] },
  { no: "06", title: "Data & Analytics", text: "Data visualization, analytical systems, business intelligence and decision-support solutions.", tags: ["PostgreSQL", "Redis", "Dashboards", "ETL"] },
] as const;

export const stackGroups = [
  { no: "01", group: "Frontend", items: ["React", "Next.js", "TypeScript"], note: "Interfaces that stay fast." },
  { no: "02", group: "Backend", items: ["Node.js", "Python"], note: "Services with clear edges." },
  { no: "03", group: "Infrastructure", items: ["Cloud Infrastructure", "Docker"], note: "Built to recover." },
  { no: "04", group: "Data", items: ["PostgreSQL", "Redis"], note: "State you can trust." },
  { no: "05", group: "AI", items: ["Machine Learning", "AI APIs", "Intelligent Automation"], note: "Intelligence, in production." },
] as const;

export type Project = {
  id: string;
  title: string;
  client: string;
  kind: string;
  runtime: string;
  year: string;
  note: string;
  stack: string[];
  role: string;
  outcome: string;
  tone: "cobalt" | "cyan" | "violet";
};

export const projects: Project[] = [
  {
    id: "orbit", title: "ORBIT", client: "Northline", kind: "AI analytics platform", runtime: "01:00", year: "2026",
    note: "One operating picture from scattered business data. Forecasts, anomalies and decisions in a single interface.",
    stack: ["Next.js", "Python", "PostgreSQL", "AI APIs"], role: "Platform architecture, data modelling, interface design",
    outcome: "Reporting replaced by a living system the whole team actually opens.", tone: "cobalt",
  },
  {
    id: "synapse", title: "SYNAPSE", client: "Axiom Group", kind: "Workflow automation", runtime: "01:30", year: "2025",
    note: "A system that connects tools, teams and approvals — and quietly removes the hand-offs between them.",
    stack: ["Node.js", "Redis", "Docker", "Automation"], role: "Systems design, automation engine, monitoring",
    outcome: "Manual hand-offs replaced by traceable, observable flows.", tone: "cyan",
  },
  {
    id: "pulse", title: "PULSE", client: "Vector Health", kind: "Digital healthcare", runtime: "02:10", year: "2025",
    note: "Appointments, records and care coordination rebuilt around the people who use them every day.",
    stack: ["React", "TypeScript", "Cloud", "PostgreSQL"], role: "Product engineering, design system, accessibility",
    outcome: "A calmer, faster experience for patients and clinicians.", tone: "violet",
  },
];

export const stats = [
  { value: "25+", label: "Digital projects" },
  { value: "12+", label: "Technology partners" },
  { value: "98%", label: "Client satisfaction" },
  { value: "5+", label: "Years of innovation" },
] as const;

export const TOTAL_WEEKS = 8;

export const timeline = [
  { id: "discover", name: "Discover", tone: "cyan", clips: [{ label: "Objectives", start: 0, end: 1.6 }, { label: "Research", start: 1.6, end: 2.6 }] },
  { id: "strategy", name: "Strategy", tone: "blue", clips: [{ label: "Architecture", start: 2, end: 3.8 }, { label: "Roadmap", start: 3.8, end: 4.4 }] },
  { id: "engineer", name: "Engineer", tone: "violet", clips: [{ label: "Build & integrate", start: 3.6, end: 6.6 }] },
  { id: "deploy", name: "Deploy", tone: "mint", clips: [{ label: "Testing", start: 6, end: 7.1 }, { label: "Launch", start: 7.1, end: 7.8 }] },
  { id: "evolve", name: "Evolve", tone: "bone", clips: [{ label: "Optimise", start: 7.2, end: 8 }] },
] as const;

export const acts = [
  { no: "01", title: "Discover", weeks: "Week 1–2", text: "We understand the business objective, the real constraint and the people who will live with the result." },
  { no: "02", title: "Strategize", weeks: "Week 2–4", text: "A technical and creative strategy: architecture, sequence, risks and a number you can take to a budget meeting." },
  { no: "03", title: "Engineer", weeks: "Week 3–7", text: "We build in the open. Working software every week, visible decisions and a codebase that stays legible." },
  { no: "04", title: "Deploy & Evolve", weeks: "Week 7–8+", text: "Launch, measure, refine. The system keeps improving long after the first release." },
] as const;

export const projectTypes = ["AI & Intelligent Systems", "Software Platform", "Automation", "Digital Experience", "Cloud & Infrastructure", "Other"] as const;
export const budgetRanges = ["Under $25k", "$25k – $50k", "$50k – $100k", "$100k+", "Not sure yet"] as const;
