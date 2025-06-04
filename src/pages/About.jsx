import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TeamCard from '../components/features/TeamCard'
import { useTheme } from '../context/ThemeContext'
import { Phone } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/layout/Footer'

const About = () => {
  const { isDarkMode } = useTheme()

  const teamMembers = [
    {
      name: 'Branighan Omae',
      role: 'CEO',
      description: 'Visionary leader driving strategic direction and growth, fostering innovation, and maximizing profitability through effective management and decision-making.',
      image: 'https://i.pinimg.com/736x/64/86/2a/64862a2f9dcf00e8769ea25ada7f337c.jpg'
    },
    {
      name: 'Moses',
      role: 'Executive Manager',
      description: 'Strategic executive overseeing operations, optimizing resources, fostering teamwork, and achieving organizational leadership management and success.',
      image: 'https://i.pinimg.com/736x/03/c1/e1/03c1e1969b06c2d6a8ca4f1d168af74c.jpg'
    },
    {
      name: 'Godfrey Matagaro',
      role: 'Web Developer',
      description: 'Innovative web developer crafting user-friendly interfaces, optimizing performance, and ensuring seamless functionality through coding expertise and design principles.',
      image: 'https://i.pinimg.com/736x/3c/45/94/3c45947c67d15915a7b58b9d13725fb8.jpg'
    }
  ]

  const buttonHover = {
    whileHover: { scale: 1.05, backgroundColor: isDarkMode ? '#A66B4F' : '#D4A373' },
    transition: { duration: 0.2 }
  }

  const contactHover = {
    whileHover: { scale: 1.05, backgroundColor: isDarkMode ? '#A66B4F' : '#D4A373', color: isDarkMode ? '#1F2937' : '#F9FAFB' },
    transition: { duration: 0.2 }
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
        className="flex-1 flex flex-col items-center py-12 px-4 mt-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
            About Branighan Group
          </h1>
          <p className={`text-lg md:text-xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Branighan Group is a premier build, design, and property listing company based in Nairobi, Kenya, East Africa. We specialize in creating innovative architectural designs and offering a wide range of luxury properties for sale and rent. With a commitment to excellence, we transform visions into reality, delivering exceptional living spaces across the region.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <motion.button
              as={Link}
              to="/houses"
              className={`bg-primary text-white px-6 py-2 rounded transition-colors ${isDarkMode ? 'hover:bg-accent-dark' : 'hover:bg-accent-light'}`}
              {...buttonHover}
            >
              Get Started
            </motion.button>
            <motion.button
              as={Link}
              to="/contact"
              className={`flex items-center space-x-1 px-6 py-2 rounded transition-colors ${isDarkMode ? 'bg-accent-dark text-text-dark' : 'bg-accent-light text-text-light'}`}
              {...contactHover}
            >
              <Phone className="h-4 w-4" /> <span>Contact Us</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  )
}

About.propTypes = {
  // No props are passed to About in this case, but PropTypes is included for consistency
}

export default About