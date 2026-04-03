import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NotFoundPageCompact: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4">
      {/* Background gradient blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 with animated circle */}
        <motion.div className="mb-8 relative h-48 flex items-center justify-center">
          <motion.div
            className="flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            <span className="text-8xl font-bold text-white">4</span>

            <motion.div
              className="w-20 h-20 rounded-full border-3 border-blue-500/50 bg-blue-500/10"
              animate={{
                scale: [1, 1.15, 1],
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                  '0 0 40px rgba(59, 130, 246, 0.6)',
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <span className="text-8xl font-bold text-white">4</span>
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">Whoops!</h1>
          <p className="text-gray-400 text-lg">
            We couldn't find the site you were looking for.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="px-6 py-2 border border-white/30 text-white font-semibold rounded hover:border-white/50 transition-all"
          >
            BACK TO HOME
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-all"
          >
            GO BACK
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPageCompact;
