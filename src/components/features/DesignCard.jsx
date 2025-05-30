import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Phone, Shield } from 'lucide-react';
import { FaWhatsapp, FaBed, FaBath, FaCar } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

// DesignCard displays a design with image, details, and contact buttons
export const DesignCard = ({ image, name, category, amenities, onWhatsApp, onCall }) => {
  const { isDarkMode } = useTheme();

  const whatsappHover = {
    whileHover: { scale: 1.05, backgroundColor: '#16A34A' },
    transition: { duration: 0.2 },
  };

  const callHover = {
    whileHover: { scale: 1.05, backgroundColor: isDarkMode ? '#CCCCCC' : '#333333' },
    transition: { duration: 0.2 },
  };

  return (
    <motion.div
      className="border border-border-light dark:border-border-dark rounded-lg shadow-md overflow-hidden transition-all duration-300"
      style={{ backgroundColor: isDarkMode ? '#374151' : '#FFFFFF' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <img src={image} alt={name} className="w-full h-48 object-cover aspect-[4/3]" />
      <div className="p-4 flex flex-col min-h-[calc(100%-12rem)]">
        <h3
          className="text-lg font-semibold truncate"
          style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}
        >
          {name}
        </h3>
        <p
          className="text-sm text-gray-600 dark:text-gray-400"
          style={{ color: isDarkMode ? '#9CA3AF' : '#4B5563' }}
        >
          {category}
        </p>
        <div className="flex flex-wrap gap-2 mt-2 text-sm">
          <span
            className="flex items-center gap-1"
            style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}
          >
            <FaBed /> {amenities.beds}
          </span>
          <span
            className="flex items-center gap-1"
            style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}
          >
            <FaBath /> {amenities.baths}
          </span>
          <span
            className="flex items-center gap-1"
            style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}
          >
            <FaCar /> {amenities.garages}
          </span>
          {amenities.garage && (
            <span
              className="flex items-center gap-1"
              style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}
            >
              <FaCar /> Garage
            </span>
          )}
          {amenities.security && (
            <span
              className="flex items-center gap-1"
              style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}
            >
              <Shield className="h-4 w-4" /> Fenced
            </span>
          )}
        </div>
        <div className="mt-4 flex space-x-2">
          <motion.button
            onClick={onWhatsApp}
            className="flex-1 text-white py-2 px-2 rounded transition-colors"
            style={{ backgroundColor: '#22C55E' }}
            aria-label={`Enquire about ${name} via WhatsApp`}
            {...whatsappHover}
          >
            <FaWhatsapp className="inline mr-1" /> WhatsApp
          </motion.button>
          <motion.button
            onClick={onCall}
            className="flex-1 text-white py-2 px-2 rounded transition-colors"
            style={{ backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', color: isDarkMode ? '#000000' : '#FFFFFF' }}
            aria-label={`Call about ${name}`}
            {...callHover}
          >
            <Phone className="inline mr-1" /> Call
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

DesignCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  amenities: PropTypes.shape({
    beds: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    garages: PropTypes.number.isRequired,
    garage: PropTypes.bool,
    security: PropTypes.bool,
  }).isRequired,
  onWhatsApp: PropTypes.func.isRequired,
  onCall: PropTypes.func.isRequired,
};