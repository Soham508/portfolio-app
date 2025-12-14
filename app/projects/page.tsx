"use client";

import { motion } from "motion/react";
import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* Background Gradients */}
            <div className="absolute top-20 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-green-900 dark:opacity-20"></div>
            <div className="absolute top-40 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-blue-900 dark:opacity-20"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-purple-900 dark:opacity-20"></div>

            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm md:text-base font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase mb-4">
                        My Work
                    </h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Projects</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        A collection of projects that demonstrate my passion for building robust and scalable applications.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            index={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
