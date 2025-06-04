import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import Navbar from '../components/common/Navbar'
import Footer from '../components/layout/Footer'

const FAQs = () => {
  const { isDarkMode } = useTheme()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { question: 'What services does Branighan Group offer?', answer: 'We provide real estate consulting, interior design services, and property management solutions to help you find and create your dream home.' },
    { question: 'How can I schedule a consultation?', answer: 'You can schedule a consultation by contacting us via email at info@branighangroup.com or by calling us at +254 704 221777.' },
    { question: 'What areas do you serve?', answer: 'We serve clients across the greater metropolitan area, including downtown, suburbs, and surrounding regions.' },
    { question: 'Do you offer virtual consultations?', answer: 'Yes, we offer virtual consultations via Zoom or Meet for clients who prefer remote meetings.' },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: isDarkMode ? '#1F2937' : '#F9FAFB',
        color: isDarkMode ? '#F9FAFB' : '#1F2937',
      }}
    >
      <Navbar />
      <motion.div
        className="flex-1 py-19 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar: Placeholder for navigation or additional info */}
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={`text-xl md:text-2xl font-bold mb-4 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
              FAQ Navigation
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Browse common questions about our services, consultations, and more.
            </p>
          </motion.div>

          {/* Right Main Content: FAQs */}
          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
              Frequently Asked Questions
            </h1>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`rounded-lg p-4 ${isDarkMode ? 'bg-card-dark' : 'bg-card-light'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full text-left font-semibold ${isDarkMode ? 'text-text-dark' : 'text-text-light'} flex justify-between items-center`}
                  >
                    {faq.question}
                    <span>{openIndex === index ? '-' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <motion.p
                      className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default FAQs