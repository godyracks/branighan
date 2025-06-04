import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const SocialPosts = ({ posts }) => {
  const { isDarkMode } = useTheme()

  const platformIcons = {
    facebook: <Facebook className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
  }

  return (
    <motion.div
      className="w-full mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
        Social Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className={`rounded-lg p-4 ${isDarkMode ? 'bg-card-dark' : 'bg-card-light'}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              {platformIcons[post.platform]}
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
                {post.content}
              </h3>
            </div>
            <img
              src={post.image}
              alt={post.content}
              className="w-full h-40 object-cover rounded"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

SocialPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      platform: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default SocialPosts