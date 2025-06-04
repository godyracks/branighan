import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const NewsletterSignup = () => {
  const { isDarkMode } = useTheme()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup logic (e.g., API call)
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  return (
    <motion.div
      className="w-full mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
        Looking For Newsletter?
      </h2>
      <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Stay updated with the latest trends and insights delivered straight to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className={`flex-1 px-4 py-2 rounded-l border ${isDarkMode ? 'bg-card-dark border-border-dark text-text-dark' : 'bg-card-light border-border-light text-text-light'} focus:outline-none focus:ring-2 focus:ring-primary`}
          required
        />
        <motion.button
          type="submit"
          className="bg-accent-light text-text-dark px-4 py-2 rounded-r hover:bg-accent-dark transition-colors"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Subscribe
        </motion.button>
      </form>
    </motion.div>
  )
}

export default NewsletterSignup