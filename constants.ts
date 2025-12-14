import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export const RESUME_URL = "https://drive.google.com/uc?export=download&id=1-jps9ddAO4FLXY-_gMAQL-UT5U0EqOav";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/Soham508",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/soham-ghige-869455252/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:g_sravindra@hs.iitr.ac.in",
    icon: Mail,
  },
];

export const PERSONAL_INFO = {
  name: "Soham Ghige",
  title: "Full Stack Developer",
  description:
    "I build accessible, pixel-perfect, performant, and web experiences.",
  resumeUrl: "/assets/resume.pdf",
};

export const SKILLS = [
  {
    name: "React",
    category: "Frontend",
    icon: "/assets/react.png",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "/assets/nextjs.png",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: "/assets/typescript.png",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: "/assets/javascript.png",
  },
  {
    name: "Python",
    category: "Language",
    icon: "/assets/python.jpg",
  },
  {
    name: "Django",
    category: "Backend",
    icon: "/assets/django.jpg",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "/assets/node.png",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "/assets/mongo.png",
  },
  {
    name: "Redis",
    category: "Database",
    icon: "/assets/redis.png",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "/assets/tailwind.png",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: "/assets/aws.avif",
  },
  {
    name: "Git",
    category: "Tools",
    icon: "/assets/github.png",
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: "/assets/firebase.png",
  },
  {
    name: "Linux",
    category: "Tools",
    icon: "/assets/linux.jpeg",
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Store",
    description:
      "A full-featured online store with product filtering, cart functionality, and secure checkout integration. Built with modern e-commerce best practices in mind.",
    image: "/assets/Estore.jpg",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Real-time Chat App",
    description:
      "A seamless real-time messaging application supporting private and group chats, file sharing, and instant notifications.",
    image: "/assets/chatApp.jpg",
    tags: ["Next.js", "Socket.io", "Redis", "TypeScript"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Tech Blog Platform",
    description:
      "A content management system for tech enthusiasts to share articles, featuring markdown support, comments, and user profiles.",
    image: "/assets/blog.png",
    tags: ["Django", "Python", "PostgreSQL", "Docker"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Sylva Investments",
    description:
      "This is an Equity Portfolio Advisor app, where users can sign up/sign in using google accounts, create their risk porfiles and get an efficient portfolio based on their risk preferences and recent Indian equity markets data.",
    image: "/assets/sylva_logo_black.jpg",
    tags: ["Django", "React", "Firebase", "MongoDB"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Storm - A 2D graphic rendering app",
    description:
      "This is an Digital pad project for 2D designing, drawing, illustrations. User can share the live screen, collaborate in real-time with multiple users, also save the designs.",
    image: "/assets/storm.png",
    tags: ["Django", "Python", "PostgreSQL", "Docker"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  }
];
