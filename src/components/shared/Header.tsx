import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Features', 'Workflow', 'Testimonials', 'Pricing'];

    return (
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
                <div className="hidden md:flex gap-8 flex-1">
                    {navItems.slice(0, 2).map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s|\?/g, '')}`}
                            whileHover={{ color: '#e8733a' }}
                            className="text-[#a0a0a0] text-sm font-medium cursor-pointer no-underline"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-10 h-10 bg-linear-to-br from-[#e8733a] to-[#c45e2a] rounded-xl flex items-center justify-center cursor-pointer relative"
                >
                    <span className="text-white font-extrabold text-sm">D</span>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3/5 h-0.75 bg-linear-to-r from-transparent via-[#e8733a] to-transparent rounded-full" />
                </motion.div>

                <div className="hidden md:flex gap-8 flex-1 justify-end">
                    {navItems.slice(2).map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s|\?/g, '')}`}
                            whileHover={{ color: '#e8733a' }}
                            className="text-[#a0a0a0] text-sm font-medium cursor-pointer no-underline"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Header;
