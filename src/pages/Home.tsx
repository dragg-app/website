import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import interface_mockup from "@/assets/images/craft.webp";
import "@/css/App.css";

// ==================== HERO ====================
const HeroSection: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center pt-32 pb-10 overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-200 h-150 bg-[radial-gradient(ellipse_at_center,rgba(232,115,58,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(232,115,58,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,115,58,0.03) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#e8733a]/30 bg-[#e8733a]/10 mb-6 z-10"
            >
                <span className="w-2 h-2 rounded-full bg-[#e8733a] animate-pulse"></span>
                <span className="text-[#e8733a] text-sm font-medium">Beta Version</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[clamp(48px,10vw,120px)] font-black bg-linear-to-b from-[#e8733a] via-[#f4a261] to-[#e8733a] bg-clip-text text-transparent tracking-tighter mb-5 z-10 leading-none text-center"
            >
                Dragg
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base text-[#a0a0a0] text-center max-w-md leading-relaxed z-10 px-4"
            >
                Build Telegram Mini-Apps Without Coding. Component-driven, JSON-powered drag-and-drop builder for the TON ecosystem.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex gap-4 mt-8 z-10"
            >
                <motion.a
                    href={import.meta.env.VITE_CONTROL_PANEL_URL || "/"}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(232,115,58,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3.5 bg-linear-to-r from-[#e8733a] to-[#c45e2a] rounded-full text-white font-semibold text-sm cursor-pointer border-none no-underline"
                >
                    Start Building →
                </motion.a>
                <motion.button
                    whileHover={{ scale: 1.05, borderColor: '#e8733a' }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3.5 bg-transparent rounded-full text-white font-semibold text-sm cursor-pointer border border-white/10 hover:border-[#e8733a] transition-colors"
                >
                    Watch Demo
                </motion.button>
            </motion.div>
        </section>
    );
};

// ==================== DASHBOARD PREVIEW ====================
const DashboardPreview: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="relative flex flex-col items-center px-4 py-10">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-5 left-[8%] px-4 py-2 bg-[#141414]/90 border border-[#e8733a]/30 rounded-full text-xs text-[#e8733a] items-center gap-1.5 z-10 hidden lg:flex"
            >
                <span className="text-[10px]">◎</span> Drag & Drop Builder
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-[60%] right-[6%] px-4 py-2 bg-[#141414]/90 border border-[#e8733a]/30 rounded-full text-xs text-[#e8733a] items-center gap-1.5 z-10 hidden lg:flex"
            >
                ✦ TON Integration
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-[30%] left-[3%] px-4 py-2 bg-[#141414]/90 border border-[#e8733a]/30 rounded-full text-xs text-[#e8733a] items-center gap-1.5 z-10 hidden lg:flex"
            >
                🔗 Instant Deploy
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-4xl rounded-2xl border relative border-[#1f1f1f] overflow-hidden shadow-[0_40px_100px_rgba(232,115,58,0.1)]"
            >
                <img
                    alt="Dragg interface preview"
                    className="w-full h-full object-cover"
                    src={interface_mockup}
                />
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-10 text-sm text-[#e8733a] font-medium"
            >
                Trusted by 2,400+ builders
            </motion.p>
        </section>
    );
};

// ==================== LOGO STRIP ====================
const LogoStrip: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const logos = ['Telegram', 'TON', 'Web3', 'DeFi', 'NFT', 'dApps'];

    return (
        <section
            ref={ref}
            className="py-10 px-4 flex justify-center gap-8 md:gap-14 flex-wrap border-t border-b border-[#141414]"
        >
            {logos.map((logo, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 0.35, y: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ opacity: 0.8 }}
                    className="text-xl md:text-2xl font-extrabold text-white cursor-default tracking-wide"
                >
                    {logo}
                </motion.span>
            ))}
        </section>
    );
};

// ==================== STATS ====================
const StatsSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const stats = [
        { value: '2,400+', label: 'Active builders' },
        { value: '10K+', label: 'Mini-Apps deployed' },
        { value: '4.9', label: 'Average rating' },
        { value: '50+', label: 'Components available' },
    ];

    return (
        <section ref={ref} className="py-16 px-4 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.12, duration: 0.6 }}
                        className="text-center"
                    >
                        <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-b from-[#e8733a] to-[#f4a261] bg-clip-text text-transparent">
                            {stat.value}
                        </h3>
                        <p className="text-xs text-[#666] mt-2">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// ==================== SAVE TIME ====================
const SaveTimeSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="pt-16 pb-8 px-4 text-center max-w-xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-extrabold mb-4"
            >
                Save time and ship faster
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm text-[#a0a0a0] leading-relaxed"
            >
                Elevate your productivity. Build mini-apps effortlessly by assembling components
                and deploying to the Telegram ecosystem in seconds.
            </motion.p>
        </section>
    );
};

// ==================== BENTO GRID ====================
const BentoGrid: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.6 },
        }),
    };

    return (
        <section ref={ref} className="px-4 pb-20 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                {/* Card 1 – The Obsidian Canvas (3 cols) */}
                <motion.div
                    custom={0}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    whileHover={{ scale: 1.01 }}
                    className="md:col-span-3 bg-[#111] rounded-2xl border border-[#1a1a1a] p-7 flex flex-col hover:border-[#e8733a]/30 transition-colors"
                >
                    <h3 className="text-lg font-bold mb-2">The Obsidian Canvas</h3>
                    <p className="text-xs text-[#666] leading-relaxed max-w-xs">
                        Assemble complex app structures with pixel-perfect accuracy. Our drag-and-drop logic maps directly to clean, production-ready code.
                    </p>
                    <div className="mt-6 flex-1 flex items-center justify-center relative min-h-[200px]">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                            className="w-44 h-44 rounded-full relative"
                            style={{
                                background: 'radial-gradient(circle at 30% 30%, #1a2a1a, #0a1a0a 50%, #0a0f0a)',
                                border: '1px solid rgba(34,197,94,0.2)',
                                boxShadow: '0 0 60px rgba(34,197,94,0.1)',
                            }}
                        >
                            <div className="absolute inset-0 rounded-full overflow-hidden opacity-15">
                                {[...Array(5)].map((_, i) => (
                                    <React.Fragment key={i}>
                                        <div className="absolute top-0 bottom-0 w-px bg-[#22c55e]" style={{ left: `${(i + 1) * 20}%` }} />
                                        <div className="absolute left-0 right-0 h-px bg-[#22c55e]" style={{ top: `${(i + 1) * 20}%` }} />
                                    </React.Fragment>
                                ))}
                            </div>
                        </motion.div>
                        {[
                            { pos: 'top-[15%] left-[10%]', label: 'Builder', color: '#22c55e' },
                            { pos: 'bottom-[10%] right-[15%]', label: 'Deploy', color: '#e8733a' },
                        ].map((a, i) => (
                            <motion.div
                                key={i}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                className={`absolute ${a.pos} flex items-center gap-1.5 px-2.5 py-1 bg-[#141414]/90 rounded-full border`}
                                style={{ borderColor: `${a.color}40` }}
                            >
                                <div className="w-6 h-6 rounded-full" style={{ background: `linear-gradient(135deg, ${a.color}, ${a.color}88)` }} />
                                <span className="text-[11px] text-[#ccc]">{a.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right column (2 cols) */}
                <div className="md:col-span-2 flex flex-col gap-5">
                    {/* Card 2 – TON Components */}
                    <motion.div
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        whileHover={{ scale: 1.01 }}
                        className="bg-[#111] rounded-2xl border border-[#1a1a1a] p-6 flex items-start gap-4 hover:border-[#e8733a]/30 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl bg-[#e8733a]/10 flex items-center justify-center flex-shrink-0">
                            <div className="w-5 h-5 rounded bg-gradient-to-br from-[#e8733a] to-[#f4a261]" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold mb-1.5">TON Components</h3>
                            <p className="text-[11px] text-[#666] leading-relaxed">
                                Native UI elements, TON wallet connectors, and Telegram-specific payment hooks ready for use.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3 – Bot-First Logic */}
                    <motion.div
                        custom={2}
                        variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        whileHover={{ scale: 1.01 }}
                        className="bg-[#111] rounded-2xl border border-[#1a1a1a] p-6 flex flex-col gap-3 hover:border-[#e8733a]/30 transition-colors flex-1"
                    >
                        <div>
                            <h3 className="text-base font-bold mb-1.5">Bot-First Logic</h3>
                            <p className="text-[11px] text-[#666] leading-relaxed">
                                Seamlessly link your mini-app with existing Telegram bots for powerful automation workflows.
                            </p>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <motion.div
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-6xl"
                                style={{ filter: 'drop-shadow(0 0 20px rgba(232,115,58,0.5))' }}
                            >
                                🤖
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Card 4 – Instant Production (Full width) */}
                <motion.div
                    custom={3}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    whileHover={{ scale: 1.005 }}
                    className="md:col-span-5 bg-[#111] rounded-2xl border border-[#1a1a1a] p-7 flex flex-col sm:flex-row items-center gap-6 hover:border-[#e8733a]/30 transition-colors"
                >
                    <div className="flex gap-2 flex-shrink-0">
                        {[
                            { bg: 'bg-[#3b82f6]/10', border: 'border-[#3b82f6]/25', icon: '📅' },
                            { bg: 'bg-[#e8733a]/10', border: 'border-[#e8733a]/25', icon: '💬' },
                            { bg: 'bg-[#22c55e]/10', border: 'border-[#22c55e]/25', icon: '🚀' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center text-xl`}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Instant Production Deploy</h3>
                        <p className="text-xs text-[#666] leading-relaxed max-w-md">
                            Go live globally in seconds. Every edit is synced via a high-performance edge network directly to your users. No server maintenance, no hosting fees.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// ==================== HOW IT WORKS ====================
const HowItWorks: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const steps = [
        { num: '01', title: 'Architect', desc: 'Select specialized components from our library specifically engineered for the Telegram platform.' },
        { num: '02', title: 'Configure', desc: 'Customize interactions and data schemas with our visual logic editor.' },
        { num: '03', title: 'Deploy', desc: 'Generate your Mini-App link and distribute via your bot to the global Telegram audience.' },
    ];

    return (
        <section ref={ref} id="workflow" className="py-20 px-4 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">The Workflow</h2>
                <p className="text-sm text-[#a0a0a0] max-w-md mx-auto">
                    Sophistication simplified. Get started in minutes, not hours.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                        className="relative"
                    >
                        <span className="text-5xl font-black text-[#e8733a]">{step.num}</span>
                        <h3 className="text-lg font-bold mt-2 mb-2">{step.title}</h3>
                        <p className="text-xs text-[#666] leading-relaxed">{step.desc}</p>
                        {i < 2 && (
                            <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-[#e8733a]/40 to-transparent" />
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// ==================== CTA ====================
const CTASection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="py-20 px-4 text-center max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-10">
                    <span className="text-white">
                        Ready to dominate the Telegram ecosystem?{' '}
                    </span>
                    <span className="text-[#666]">
                        Start building your next viral mini-app today. No credit card required. No server maintenance, no hosting fees.
                    </span>
                    <br />
                    <span className="text-white">Get started now!</span>
                </p>
                <motion.a
                    href={import.meta.env.VITE_CONTROL_PANEL_URL || "/"}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(232,115,58,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    className="px-10 py-4 bg-gradient-to-r from-[#e8733a] to-[#c45e2a] rounded-full text-white font-semibold text-base cursor-pointer border-none inline-flex items-center gap-2 no-underline"
                >
                    Get Started Free <span className="text-lg">→</span>
                </motion.a>
            </motion.div>
        </section>
    );
};

// ==================== HOME ====================
const Home: React.FC = () => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white font-['Inter',sans-serif] overflow-x-hidden">
            <HeroSection />
            <DashboardPreview />
            <LogoStrip />
            <StatsSection />
            <SaveTimeSection />
            <BentoGrid />
            <HowItWorks />
            <CTASection />
        </div>
    );
};

export default Home;
