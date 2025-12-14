"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SkillCardProps {
    name: string;
    category: string;
    icon: string;
    index: number;
}

export function SkillCard({ name, category, icon, index }: SkillCardProps) {
    const isImage = icon.startsWith("/");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative"
        >
            <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    {/* Icon container */}
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300 overflow-hidden p-2">
                        {isImage ? (
                            <div className="relative w-full h-full">
                                <Image
                                    src={icon}
                                    alt={name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ) : (
                            <div className="w-12 h-12 flex items-center justify-center text-3xl">
                                {icon}
                            </div>
                        )}
                    </div>

                    {/* Skill name */}
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 transition-all duration-300">
                        {name}
                    </h3>

                    {/* Category badge */}
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                        {category}
                    </span>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </motion.div>
    );
}
