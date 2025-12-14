"use client";

import { motion } from "motion/react";
import { SKILLS } from "@/constants";
import { SkillCard } from "@/components/SkillCard";
import { useState } from "react";

const categories = ["All", "Frontend", "Backend", "Language", "Database", "DevOps", "Cloud", "Tools"];

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredSkills = selectedCategory === "All"
        ? SKILLS
        : SKILLS.filter(skill => skill.category === selectedCategory);

    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* Background Gradients */}
            <div className="absolute top-20 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-blue-900 dark:opacity-20"></div>
            <div className="absolute top-40 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-purple-900 dark:opacity-20"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900 dark:opacity-20"></div>

            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-sm md:text-base font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase mb-4">
                        Technical Expertise
                    </h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                        Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">Technologies</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive overview of the technologies and tools I work with to build modern, scalable applications.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? "bg-foreground text-background shadow-lg scale-105"
                                    : "bg-gray-100 dark:bg-gray-800 text-foreground/60 hover:text-foreground hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {filteredSkills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            category={skill.category}
                            icon={skill.icon}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-2">
                            {SKILLS.length}+
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground">Technologies</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mb-2">
                            5+
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 mb-2">
                            50+
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground">Projects Built</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 mb-2">
                            100%
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground">Commitment</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
