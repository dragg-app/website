import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { MdPalette, MdAutoAwesome, MdPhotoLibrary } from 'react-icons/md';

interface Tool {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Tools: React.FC = () => {
  const tools: Tool[] = [
    {
      id: 1,
      icon: <MdPalette className="w-8 h-8" />,
      title: 'Background Studio',
      description:
        'Explore animated backgrounds for your projects. Choose from various effects and customize as you like. Export as video, image, or code or share your creations as URLs.',
    },
    {
      id: 2,
      icon: <MdAutoAwesome className="w-8 h-8" />,
      title: 'Shape Magic',
      description:
        'Tool for automatically creating inner rounded corners between shapes of different sizes. Export as code or SVG.',
    },
    {
      id: 3,
      icon: <MdPhotoLibrary className="w-8 h-8" />,
      title: 'Texture Lab',
      description:
        'Apply effects to your images and export the results. Add noise, dithering, halftone, ASCII art, and more. Save your presets for sharing or future use.',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const cardHoverVariants = {
    initial: { y: 0 },
    hover: {
      y: -8,
      boxShadow:
        '0 20px 25px -5px rgba(168, 85, 247, 0.3), 0 0 50px rgba(168, 85, 247, 0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: {
      rotate: 12,
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    initial: { x: 0 },
    hover: {
      x: 4,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="pt-20 pb-32 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={titleVariants as Variants}
          className="text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent"
        >
          Tools
        </motion.h1>

        <motion.p
          variants={itemVariants as Variants}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Free utilities to boost your workflow
        </motion.p>
      </motion.div>

      {/* Tools Grid */}
      <motion.div
        className="max-w-6xl mx-auto px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              variants={itemVariants as Variants}
              whileHover="hover"
              initial="initial"
              className="group"
            >
              <motion.div
                variants={cardHoverVariants as Variants}
                className="relative h-full p-8 rounded-2xl bg-linear-to-br from-slate-900/50 to-purple-900/20 border border-purple-500/20 hover:border-purple-500/50 backdrop-blur-sm transition-colors duration-300 cursor-pointer"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants as Variants}
                    className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 transition-colors"
                  >
                    {tool.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-200 transition-colors">
                    {tool.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {tool.description}
                  </p>

                  {/* Call to Action */}
                  <motion.button
                    variants={buttonVariants as Variants}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/btn font-medium text-sm"
                  >
                    <span>Try it out</span>
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Optional: Add some decorative elements */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 -translate-y-1/2 -translate-x-1/2" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl -z-10 translate-y-1/2 translate-x-1/2" />
    </div>
  );
};

export default Tools;
