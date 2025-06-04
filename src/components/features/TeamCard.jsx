import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { Briefcase, Building2, DollarSign } from 'lucide-react'

const TeamCard = ({ name, role, description, image }) => {
  const { isDarkMode } = useTheme()

  const roleIcons = {
    'CEO': <Briefcase className="h-4 w-4" />,
    'Executive Manager': <Building2 className="h-4 w-4" />,
    'Sales Executive': <DollarSign className="h-4 w-4" />
  }

  return (
    <motion.div
      className="rounded-lg shadow-md overflow-hidden transition-all duration-300 max-w-[300px] w-full"
      style={{ height: '400px', backgroundColor: isDarkMode ? '#374151' : '#FFFFFF' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[65%] object-cover object-top"
      />
      <div className="p-3 flex flex-col h-[35%]">
        <h3
          className="text-base font-semibold"
          style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}
        >
          {name}
        </h3>
        <p
          className="text-xs uppercase flex items-center space-x-1"
          style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}
        >
          {roleIcons[role]} <span>{role}</span>
        </p>
        <p
          className="text-xs mt-1 line-clamp-3"
          style={{ color: isDarkMode ? '#9CA3AF' : '#4B5563' }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  )
}

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default TeamCard