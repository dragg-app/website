import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FiPlus, FiArrowRight, FiMail } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const TestimonialsAndFAQ: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: 'UI Blox has revolutionized my design process. Its intuitive interface and robust features save me so much time, allowing me to focus on creativity rather than tedious tasks. Its like having an extra pair of hands!',
      author: 'Jillie Bernard',
      role: 'Founder & CEO',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      id: 2,
      text: 'The best UI Kit Ive used for Framer. UI Blox is a game-changer for designers.',
      author: 'David Miller',
      role: 'Lead Software Engineer',
      avatar: '👨‍💻',
      rating: 5,
    },
    {
      id: 3,
      text: 'UI Blox has revolutionized my design process. Its intuitive and powerful features have drastically improved my workflow, allowing me to focus more on creativity and less on tedious tasks. Its a game-changer that saves me so much time!',
      author: 'David Miller',
      role: 'Lead Software Engineer',
      avatar: '👨‍💻',
      rating: 5,
    },
    {
      id: 4,
      text: 'Absolutely love UI Blox! The clean design and ease of use are unmatched. The intuitive interface simplifies complex tasks, making it perfect for both beginners and seasoned professionals. A game-changer in digital design!',
      author: 'Jillie Bernard',
      role: 'Founder & CEO',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      id: 5,
      text: 'UI Blox has revolutionized my design process. Its intuitive and powerful features have drastically improved my workflow, allowing me to focus more on creativity and less on tedious tasks. Its a game-changer that saves me so much time!',
      author: 'David Miller',
      role: 'Lead Software Engineer',
      avatar: '👨‍💻',
      rating: 5,
    },
    {
      id: 6,
      text: 'Absolutely love UI Blox! The clean design and ease of use are unmatched.',
      author: 'Jillie Bernard',
      role: 'Director of Sales',
      avatar: '👩‍💼',
      rating: 5,
    },
  ];

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'Is my Telegram account secure?',
      answer:
        'Yes. Dragg stores your Telegram account information securely using end-to-end encryption. All sensitive data is encrypted on your device before being transmitted to our servers.',
    },
    {
      id: 2,
      question: 'Why do I need to log in with my account?',
      answer:
        'We use your Telegram account to help you create and manage your mini apps. This allows us to integrate seamlessly with the Telegram ecosystem and provide a personalized experience. Your account information is stored securely and used only for managing your mini apps.',
    },
    {
      id: 3,
      question: 'What is Dragg?',
      answer:
        'Dragg is a powerful platform that helps you create mini apps more efficiently and effectively, without requiring any coding knowledge.',
    },
    {
      id: 4,
      question: 'Do I need to code?',
      answer:
        'No. You do not need any coding skills to use Dragg. Everything can be done through a simple drag-and-drop interface.',
    },
    {
      id: 5,
      question: 'Is it free?',
      answer:
        'Dragg offers both free and paid features. Some tools are available at no cost, while others require payment. You can visit our pricing page for more details or contact us on Telegram.',
    }
  ];


  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const testimonialCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -5,
      boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const expandVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      overflow: 'hidden',
    },
    expanded: {
      height: 'auto',
      opacity: 1,
      overflow: 'visible',
      transition: {
        height: { duration: 0.3, ease: 'easeOut' },
        opacity: { duration: 0.3, ease: 'easeOut' },
      },
    },
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <AiOutlineStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="text-white font-open-sans overflow-hidden pt-10">
      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={itemVariants as Variants} className="mb-4">
              <span className="inline-block px-4 py-1 bg-slate-800/50 border border-purple-500/30 rounded-full text-sm text-gray-400">
                Testimonials
              </span>
            </motion.div>

            <motion.h2
              variants={titleVariants as Variants}
              className="text-5xl md:text-6xl font-bold font-montserrat mb-4 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent"
            >
              What Our Customers Say
            </motion.h2>

            <motion.p variants={itemVariants as Variants} className="text-gray-400 text-lg">
              Hear from our incredible customers who are building at lightning speed.
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants as Variants}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={testimonialCardVariants as Variants}
                whileHover="hover"
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-linear-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 hover:border-purple-500/30 transition-colors backdrop-blur-sm">
                  {/* Rating */}
                  <div className="mb-4">{renderStars(testimonial.rating)}</div>

                  {/* Text */}
                  <p className="text-gray-300 text-sm mb-6 line-clamp-4 group-hover:text-gray-200 transition-colors">
                    {testimonial.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold font-montserrat text-white text-sm">{testimonial.author}</p>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 border-t border-slate-800/50">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side */}
            <motion.div variants={itemVariants as Variants}>
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-slate-800/50 border border-purple-500/30 rounded-full text-sm text-gray-400">
                  FAQ
                </span>
              </div>

              <h2 className="text-5xl font-bold font-montserrat mb-4">Frequently Asked Questions</h2>

              <p className="text-gray-400 mb-8">
                If you have any other questions, please email us.
              </p>

              <motion.button
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium transition-colors group"
              >
                <FiMail className="w-5 h-5" />
                <span>Contact us</span>
              </motion.button>
            </motion.div>

            {/* Right side - FAQ Items */}
            <motion.div className="space-y-4" variants={containerVariants as Variants}>
              {faqItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={faqItemVariants as Variants}
                  className="border border-slate-700/50 rounded-lg overflow-hidden"
                >
                  <motion.button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === item.id ? null : item.id)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors group"
                  >
                    <span className="text-left text-white font-medium group-hover:text-purple-300 transition-colors">
                      {item.question}
                    </span>

                    <motion.div
                      animate={{ rotate: expandedFAQ === item.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-purple-400"
                    >
                      <FiPlus className="w-5 h-5" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedFAQ === item.id && (
                      <motion.div
                        variants={expandVariants as Variants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        className="px-6 py-4 bg-slate-800/20 border-t border-slate-700/50"
                      >
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 border-t border-slate-800/50">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl bg-linear-to-br from-blue-900/30 via-purple-900/20 to-blue-900/10 border border-blue-500/20 p-12 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <motion.div variants={itemVariants as Variants} className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
                Build and Ship Your Mini-App Faster
              </h2>

              <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                Create and launch your mini-apps quickly with our intuitive platform. Enjoy a seamless experience from design to deployment.
              </p>

              {/* Social Proof */}
              <motion.div variants={itemVariants as Variants} className="flex items-center justify-center gap-4 mb-8">
                <div className="flex -space-x-3">
                  {['👨‍💻', '👩‍💼', '👨‍🎨', '👩‍💻'].map((avatar, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center border-2 border-slate-950 text-sm"
                    >
                      {avatar}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <AiOutlineStar
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs">1,000+ customers joined</p>
                </div>
              </motion.div>

              {/* Buttons */}
              <motion.div
                variants={containerVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href='https://app.dragg.app'
                  target='_blank'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition-colors group"
                >
                  <span>Get it now</span>
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.a>

                 <motion.a
                  href='https://app.dragg.app'
                  target='_blank'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg border border-slate-600 hover:border-slate-500 text-white font-semibold transition-colors"
                >
                  Learn more
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Decorative background elements */}
      <div className="fixed top-1/3 -left-40 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="fixed bottom-0 -right-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </div>
  );
};

export default TestimonialsAndFAQ;
