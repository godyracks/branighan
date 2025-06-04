import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import ArticleCard from './ArticleCard'

const FeaturedSection = ({ articles }) => {
  const { isDarkMode } = useTheme()

  return (
    <motion.div
      className="w-full mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
        Top Picks
      </h2>
      <div className="space-y-6">
        {articles.map((article) => (
          <Link key={article.id} to={`/blog/${article.id}`} className="block">
            <ArticleCard article={article} showNumber />
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

FeaturedSection.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default FeaturedSection