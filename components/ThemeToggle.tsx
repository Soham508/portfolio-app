"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-16 h-8 bg-gray-200 dark:bg-gray-800 rounded-full" />
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`relative w-16 h-8 ${isDark ? "bg-gray-700" : "bg-gray-200"} rounded-full p-1 transition-colors hover:cursor-pointer duration-300 ${isDark ? "hover:bg-gray-600" : "hover:bg-gray-300/80"}`}
            aria-label="Toggle theme"
        >
            <motion.div
                className={`absolute top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center ${isDark ? "bg-gray-900" : "bg-white"}`}
                animate={{
                    left: isDark ? "calc(100% - 28px)" : "4px",
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                }}
            >
                {isDark ? (
                    <Moon className="w-3.5 h-3.5 text-purple-400" />
                ) : (
                    <Sun className="w-3.5 h-3.5 text-yellow-500" />
                )}
            </motion.div>
        </button>
    );
}
