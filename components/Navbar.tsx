"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, PERSONAL_INFO, RESUME_URL } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter hover:text-foreground/80 transition-colors">
                    {PERSONAL_INFO.name.split(" ")[0]}
                    <span className="text-gray-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "relative text-sm font-medium transition-colors py-1 group",
                                pathname === link.href
                                    ? "text-foreground"
                                    : "text-foreground/60 hover:text-foreground"
                            )}
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        {SOCIAL_LINKS.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground/60 hover:text-foreground transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                            >
                                <social.icon className="w-4 h-4" />
                                <span className="sr-only">{social.name}</span>
                            </a>
                        ))}
                    </div>
                    <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
                    <ThemeToggle />
                    <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
                    <a href={RESUME_URL} download="resume.pdf">
                        <Button variant="primary" size="sm" className="gap-2">
                            <Download className="w-4 h-4" />
                            Resume
                        </Button>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />
                    <button
                        className="p-2 text-foreground/80 hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium py-2 border-b border-gray-100 dark:border-gray-900 transition-colors",
                                        pathname === link.href
                                            ? "text-foreground"
                                            : "text-foreground/60 hover:text-foreground"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 py-4">
                                {SOCIAL_LINKS.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/60 hover:text-foreground transition-colors p-2 bg-gray-100 dark:bg-gray-900 rounded-full"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                            <a href={RESUME_URL} download="resume.pdf">
                                <Button className="w-full gap-2">
                                    <Download className="w-4 h-4" />
                                    Download Resume
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
