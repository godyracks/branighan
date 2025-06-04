import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const BlogHeader = () => {
  const { isDarkMode } = useTheme()

  return (
    <motion.div
      className="w-full mb-12 flex justify-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md lg:w-1/3 lg:max-w-none">
        <input
          type="text"
          placeholder="Search for news..."
          className={`w-full px-4 py-2 rounded border ${isDarkMode ? 'bg-card-dark border-border-dark text-text-dark' : 'bg-card-light border-border-light text-text-light'} focus:outline-none focus:ring-2 focus:ring-primary`}
        />
      </div>
    </motion.div>
  )
}

export default BlogHeader