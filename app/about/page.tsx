"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, Code2, Network, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";

const EXPERTISE_AREAS = [
    {
        title: "Full Stack Development",
        description:
            "Building end-to-end web applications with modern frameworks like Next.js, React, and Django. I focus on creating intuitive, responsive, and accessible user experiences backed by robust APIs.",
        icon: Code2,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        title: "Agentic AI Systems",
        description:
            "Designing and implementing autonomous AI agents that can reason, plan, and execute complex tasks. Leveraging LLMs to build intelligent systems that solve real-world problems.",
        icon: Brain,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        title: "Microservices Architecture",
        description:
            "Architecting scalable and resilient distributed systems. I specialize in breaking down monolithic applications into loosely coupled microservices using Docker, Kubernetes, and event-driven patterns.",
        icon: Network,
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
];

export default function About() {
    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* Background Gradients */}
            <div className="absolute top-20 -left-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-teal-900 dark:opacity-20"></div>
            <div className="absolute top-40 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-indigo-900 dark:opacity-20"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-rose-900 dark:opacity-20"></div>

            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 space-y-6"
                    >
                        <h2 className="text-sm md:text-base font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase">
                            About Me
                        </h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Passionate about <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                                innovation
                            </span>{" "}
                            and code.
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I am a Full Stack Developer with a deep interest in building intelligent systems. My journey involves not just writing code, but architecting solutions that bridge the gap between complex backend logic and beautiful frontend interfaces.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Currently, I'm focused on exploring the frontiers of Agentic AI and Microservices, aiming to build scalable applications that leverage the power of modern artificial intelligence.
                        </p>
                        <div className="pt-4">
                            <Link href="/contact">
                                <Button size="lg" className="group">
                                    Let's Connect
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-2xl rotate-6 opacity-20 blur-lg"></div>
                            <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
                                <Image
                                    src="/assets/developer.png"
                                    alt="Developer Profile"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Expertise Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-12"
                >
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
                        <p className="text-muted-foreground">
                            Combining technical depth with creative problem-solving to deliver exceptional digital solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {EXPERTISE_AREAS.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-12 h-12 ${area.bg} ${area.color} rounded-xl flex items-center justify-center mb-6`}>
                                    <area.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {area.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Terminal/Code Snippet Section (Decorative) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-24 max-w-4xl mx-auto"
                >
                    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-800">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="ml-2 text-xs text-gray-400 font-mono">developer@portfolio:~/about</div>
                        </div>
                        <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
                            <div className="space-y-2">
                                <div className="flex">
                                    <span className="text-green-400 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-gray-300">whoami</span>
                                </div>
                                <div className="text-gray-400 pb-4">
                                    "A builder who loves to turn complex problems into elegant solutions."
                                </div>

                                <div className="flex">
                                    <span className="text-green-400 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-gray-300">cat current_focus.json</span>
                                </div>
                                <div className="text-yellow-300">
                                    {`{
  "primary": "Full Stack Development",
  "passion": "Agentic AI",
  "architecture": "Microservices",
  "goal": "Building the future of web"
}`}
                                </div>

                                <div className="flex pt-4">
                                    <span className="text-green-400 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-gray-300 animate-pulse">_</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
