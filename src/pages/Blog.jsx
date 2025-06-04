import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import BlogHeader from '../components/features/BlogHeader'
import FeaturedSection from '../components/features/FeaturedSection'
import SocialPosts from '../components/features/SocialPosts'
import ArticleCard from '../components/features/ArticleCard'
import NewsletterSignup from '../components/features/NewsletterSignup'
import Navbar from '../components/common/Navbar'
import Footer from '../components/layout/Footer'

const Blog = () => {
  const { isDarkMode } = useTheme()

  const latestArticles = [
    { id: 1, title: 'Transforming Your Space: Top 10 Interior Design Trends for Modern Homes', date: 'Mar 02 2025', image: 'https://i.pinimg.com/736x/e6/cb/c6/e6cbc604721f139f9067dfd63ceaf886.jpg', content: 'Explore the latest trends...' },
    { id: 2, title: 'Navigating the Market: Essential Tips for First-Time Home Buyers', date: 'Mar 01 2025', image: 'https://i.pinimg.com/736x/e6/cb/c6/e6cbc604721f139f9067dfd63ceaf886.jpg', content: 'Key advice for new buyers...' },
  ]

  const topPicks = [
    { id: 1, title: 'Home Awaiting Your Discovery and Exploration Today', date: 'Mar 12 2025', image: 'https://i.pinimg.com/736x/e6/cb/c6/e6cbc604721f139f9067dfd63ceaf886.jpg', content: 'Discover a new home...' },
    { id: 2, title: 'Unlock Your Dream Home: Discovery Expert Advice, Trends and Exploration and Inspiration Today', date: 'Mar 02 2025', image: 'https://i.pinimg.com/736x/e6/cb/c6/e6cbc604721f139f9067dfd63ceaf886.jpg', content: 'Expert tips for home buying...' },
    { id: 3, title: 'Ideas, and Must-Read Tips on House Buying, Selling, and Design Trends Prepared for Your Discovery', date: 'Feb 22 2025', image: 'https://i.pinimg.com/736x/60/5c/f3/605cf3356babba53f99b0eeb40a07d31.jpg', content: 'Essential buying and selling tips...' },
    { id: 4, title: 'Elevate Your Home Journey: Immerse Yourself in the Design Inspiration Crafted Exclusively for Home Enthusiasts Like You', date: 'Feb 12 2025', image: 'https://i.pinimg.com/736x/e6/cb/c6/e6cbc604721f139f9067dfd63ceaf886.jpg', content: 'Inspiration for home design...' },
  ]

  const socialPosts = [
    { id: 1, platform: 'whatsapp', content: 'Innovative Home Technology Updates' },
    { id: 2, platform: 'facebook', content: 'Latest Home Design Innovations' },
    { id: 3, platform: 'instagram', content: 'Stylish Living Space Ideas' },
    { id: 4, platform: 'linkedin', content: 'Professional Real Estate Insights' },
    { id: 5, platform: 'twitter', content: 'Stay Updated with Housing Trends' },
  ]

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
        <BlogHeader />
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar: Latest Articles, Top Picks, and Social Posts */}
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8">
              <h2 className={`text-xl md:text-2xl font-bold mb-4 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
                Latest Articles
              </h2>
              <ul className="space-y-4">
                {latestArticles.map((article) => (
                  <li key={article.id}>
                    <Link to={`/blog/${article.id}`} className="flex items-start space-x-3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-text-dark' : 'text-text-light'} hover:underline`}>
                          {article.title}
                        </h3>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {article.date}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <h2 className={`text-xl md:text-2xl font-bold mb-4 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
                Top Picks
              </h2>
              <ul className="space-y-4">
                {topPicks.map((article) => (
                  <li key={article.id}>
                    <Link to={`/blog/${article.id}`} className="flex items-start space-x-3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-text-dark' : 'text-text-light'} hover:underline`}>
                          {article.title}
                        </h3>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {article.date}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* <SocialPosts posts={socialPosts} /> */}
          </motion.div>

          {/* Right Main Content: Featured Articles and Newsletter */}
          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div className="mb-12">
              <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestArticles.map((article) => (
                  <Link key={article.id} to={`/blog/${article.id}`} className="block">
                    <ArticleCard article={article} />
                  </Link>
                ))}
              </div>
            </motion.div>
           
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}

Blog.propTypes = {
  // No props are passed to Blog in this case, but PropTypes is included for consistency
}

export default Blog