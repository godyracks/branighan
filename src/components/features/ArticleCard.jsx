import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const ArticleCard = ({ article, showNumber }) => {
  const { isDarkMode } = useTheme()

  return (
    <motion.div
      className="flex items-start space-x-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {showNumber && (
        <span className={`text-4xl font-bold ${isDarkMode ? 'text-accent-dark' : 'text-accent-light'}`}>
          {article.id}
        </span>
      )}
      <div className="flex-1">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-32 object-cover rounded mb-2"
        />
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
          {article.title}
        </h3>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Real Estate • {article.date}
        </p>
        <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
          {article.content}
        </p>
        <button
          className={`mt-2 text-sm font-medium ${isDarkMode ? 'text-accent-dark' : 'text-accent-light'} hover:underline`}
        >
          Full Article
        </button>
      </div>
    </motion.div>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  showNumber: PropTypes.bool,
}

ArticleCard.defaultProps = {
  showNumber: false,
}

export default ArticleCard