import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiMessageSquare,
  FiSlack,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactMethod {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  color: string;
}

interface SocialLink {
  id: number;
  icon: React.ReactNode;
  name: string;
  count: string;
  label: string;
  bgColor: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactMethods: ContactMethod[] = [
    {
      id: 1,
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Let's Meet Us",
      description: "Let's meet and discuss at 1:09 Grinaya Madya Street, Surabaya 59 94116",
      details: 'Madya Street, Surabaya 59 94116',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      icon: <FiMessageSquare className="w-6 h-6" />,
      title: 'Chat with us',
      description:
        "We're waiting to help you every Monday-Friday from 9 am to 5 pm EST easily.",
      details: 'Monday-Friday from 9 am to 5 pm EST',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      id: 3,
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Give us a call',
      description: 'Give us a ring at (+62) 1919-1414-896 Every monday-Friday from 9 am to 5 pm.',
      details: 'Every monday-Friday from 9 am to 5 pm.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 4,
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email Us',
      description:
        'Drop us an email at hello@support.com and you ll receive a reply within 24 hours.',
      details: 'and you ll receive a reply within 24 hours.',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      id: 1,
      icon: <FiSlack className="w-8 h-8" />,
      name: 'Slack',
      count: '76K+',
      label: 'Members',
      bgColor: 'bg-slate-800/50',
    },
    {
      id: 2,
      icon: <SiDiscord className="w-8 h-8" />,
      name: 'Discord',
      count: '246K+',
      label: 'Members',
      bgColor: 'bg-slate-800/50',
    },
    {
      id: 3,
      icon: <FiTwitter className="w-8 h-8" />,
      name: 'Twitter',
      count: '16K+',
      label: 'Members',
      bgColor: 'bg-slate-800/50',
    },
    {
      id: 4,
      icon: <FiYoutube className="w-8 h-8" />,
      name: 'YouTube',
      count: '861K+',
      label: 'Members',
      bgColor: 'bg-slate-800/50',
    },
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

  const contactCardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitMessage('Message sent successfully!');
    setFormData({ fullName: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 3000);
  };

  return (
    <div className="pt-10 text-white font-open-sans overflow-hidden">

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={titleVariants as Variants}
            className="text-5xl md:text-6xl font-bold font-montserrat mb-6 bg-linear-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h1>

          <motion.p variants={itemVariants as Variants} className="text-gray-400 text-lg mb-12">
            Want help or have questions? Our team is here to assist you. Fill out the form below or reach us through our social channels.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-linear-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm"
            variants={itemVariants as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold font-montserrat mb-8 text-white">Send Us Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="col-span-2 sm:col-span-1 px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="col-span-2 sm:col-span-1 px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />

              <textarea
                name="message"
                placeholder="Write your question here"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-400 text-center text-sm"
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method) => (
              <motion.div
                key={method.id}
                variants={contactCardVariants as Variants}
                whileHover="hover"
                className="flex gap-4 p-6 bg-linear-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl hover:border-blue-500/30 transition-colors backdrop-blur-sm group cursor-pointer"
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-lg bg-linear-to-br ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                >
                  {method.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-montserrat text-white mb-1">{method.title}</h3>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 px-4 md:px-8 border-t border-slate-800/50">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants as Variants}
            className="text-4xl font-bold font-montserrat text-center mb-12 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Join Our Community
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {socialLinks.map((social) => (
              <motion.div
                key={social.id}
                variants={itemVariants as Variants}
                whileHover={{ y: -10 }}
                className={`${social.bgColor} border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/30 transition-colors group cursor-pointer`}
              >
                <div className="flex justify-center mb-4 text-blue-400 group-hover:text-blue-300 transition-colors group-hover:scale-110">
                  {social.icon}
                </div>

                <h3 className="text-xl font-bold font-montserrat mb-1">{social.count}</h3>
                <p className="text-gray-400 text-sm">{social.name}</p>
                <p className="text-gray-500 text-xs mt-2">{social.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>


      {/* Decorative elements */}
      <div className="fixed top-1/2 -left-64 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="fixed bottom-0 -right-64 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </div>
  );
};

export default ContactPage;
