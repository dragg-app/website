import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineHome, HiOutlineWrenchScrewdriver, HiOutlineChatBubbleLeftRight, HiOutlineEnvelope } from "react-icons/hi2";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
    { label: 'Home', icon: HiOutlineHome, link: '/' },
    { label: 'Tools', icon: HiOutlineWrenchScrewdriver, link: '/tools' },
    { label: 'Testimonials', icon: HiOutlineChatBubbleLeftRight, link: '/testimonials' },
    { label: 'Contact', icon: HiOutlineEnvelope, link: '/contact' },
] as const;

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = drawerOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [drawerOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex items-center justify-center transition-all duration-300 ${scrolled
                    ? 'bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/5'
                    : 'bg-transparent'
                    }`}
            >
                <div className="flex items-center justify-between max-w-6xl w-full">
                    {/* Desktop left nav */}
                    <div className="hidden md:flex gap-8 flex-1">
                        {navItems.slice(0, 2).map(({ label, icon: Icon, link }) => (
                            <motion.a
                                key={label}
                                href={link}
                                whileHover={{ color: '#e8733a' }}
                                className="text-[#a0a0a0] text-sm font-medium cursor-pointer no-underline flex items-center gap-1.5"
                            >
                                <Icon className="text-base" />
                                {label}
                            </motion.a>
                        ))}
                    </div>

                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-10 h-10 bg-linear-to-br from-[#e8733a] to-[#c45e2a] rounded-xl flex items-center justify-center cursor-pointer relative"
                    >
                        <span className="text-white font-extrabold text-sm">D</span>
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3/5 h-0.75 bg-linear-to-r from-transparent via-[#e8733a] to-transparent rounded-full" />
                    </motion.div>

                    {/* Desktop right nav */}
                    <div className="hidden md:flex gap-8 flex-1 justify-end">
                        {navItems.slice(2).map(({ label, icon: Icon, link }) => (
                            <motion.a
                                key={label}
                                href={link}
                                whileHover={{ color: '#e8733a' }}
                                className="text-[#a0a0a0] text-sm font-medium cursor-pointer no-underline flex items-center gap-1.5"
                            >
                                <Icon className="text-base" />
                                {label}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setDrawerOpen(true)}
                        className="md:hidden text-white text-2xl p-1 cursor-pointer bg-transparent border-none"
                        aria-label="Open menu"
                    >
                        <HiMenuAlt3 />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setDrawerOpen(false)}
                            className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm md:hidden"
                        />

                        {/* Drawer panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 z-70 w-72 bg-[#0e0e0e] border-l border-white/5 flex flex-col md:hidden"
                        >
                            {/* Drawer header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                                <div className="w-9 h-9 bg-linear-to-br from-[#e8733a] to-[#c45e2a] rounded-lg flex items-center justify-center">
                                    <span className="text-white font-extrabold text-xs">D</span>
                                </div>
                                <button
                                    onClick={() => setDrawerOpen(false)}
                                    className="text-white/60 hover:text-white text-2xl p-1 cursor-pointer bg-transparent border-none transition-colors"
                                    aria-label="Close menu"
                                >
                                    <HiX />
                                </button>
                            </div>

                            {/* Nav links */}
                            <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                                {navItems.map(({ label, icon: Icon, link }, i) => (
                                    <motion.a
                                        key={label}
                                        href={link}
                                        onClick={() => setDrawerOpen(false)}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#a0a0a0] hover:text-white hover:bg-white/5 text-sm font-medium cursor-pointer no-underline transition-colors"
                                    >
                                        <Icon className="text-xl text-[#e8733a]" />
                                        {label}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Drawer footer accent */}
                            <div className="px-6 py-5 border-t border-white/5">
                                <div className="h-0.5 w-full bg-linear-to-r from-[#e8733a]/40 via-[#e8733a] to-[#e8733a]/40 rounded-full" />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
