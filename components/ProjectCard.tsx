"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Tilt from "react-parallax-tilt";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    codeUrl: string;
    index: number;
}

export function ProjectCard({
    title,
    description,
    image,
    tags,
    demoUrl,
    codeUrl,
    index,
}: ProjectCardProps) {
    return (
        <Tilt
            className="parallax-effect-glare-scale"
            perspective={700}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
            gyroscope={true}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
                {/* Image Container */}
                <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-2xl">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <Button size="sm" className="bg-white text-black hover:bg-white/90">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                            </Button>
                        </a>
                        <a
                            href={codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                        >
                            <Button size="sm" variant="secondary">
                                <Github className="w-4 h-4 mr-2" />
                                Source Code
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow rounded-2xl">
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Tilt>
    );
}
