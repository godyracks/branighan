import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Phone, Shield, Waves, Warehouse } from 'lucide-react';
import { FaWhatsapp, FaBed, FaBath, FaCar } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

// HouseCard displays a house with image, details, and contact buttons
export const HouseCard = ({ image, title, location, price, category, amenities, onWhatsApp, onCall }) => {
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
      className="rounded-lg shadow-md overflow-hidden transition-all duration-300"
      style={{ backgroundColor: isDarkMode ? '#374151' : '#FFFFFF' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover aspect-[4/3]" />
      <div className="p-4 flex flex-col h-[calc(100%-12rem)]">
        <h3
          className="text-lg font-semibold truncate"
          style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}
        >
          {title}
        </h3>
        <p
          className="text-sm truncate"
          style={{ color: isDarkMode ? '#9CA3AF' : '#4B5563' }}
        >
          {location} | {category}
        </p>
        <p
          className="text-sm font-medium"
          style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}
        >
          KSh {price.toLocaleString()}
        </p>
        <div className="flex space-x-2 items-center mt-2 text-sm truncate">
          <span className="flex items-center space-x-1" style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}>
            <FaBed /> {amenities.beds}
          </span>
          <span className="flex items-center space-x-1" style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}>
            <FaBath /> {amenities.baths}
          </span>
          <span className="flex items-center space-x-1" style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}>
            <FaCar /> {amenities.garages}
          </span>
          {amenities.garage && (
            <span className="flex items-center" style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}>
              <Warehouse className="h-4 w-4" />
            </span>
          )}
          {amenities.security && (
            <span className="flex items-center" style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}>
              <Shield className="h-4 w-4" />
            </span>
          )}
          {amenities.pool && (
            <span className="flex items-center" style={{ color: isDarkMode ? '#A66B4F' : '#D4A373' }}>
              <Waves className="h-4 w-4" />
            </span>
          )}
        </div>
        <div className="mt-auto flex space-x-2 pt-4">
          <motion.button
            onClick={onWhatsApp}
            className="flex-1 text-white py-2 px-2 rounded transition-colors text-sm"
            style={{ backgroundColor: '#22C55E' }}
            aria-label={`Enquire about ${title} via WhatsApp`}
            {...whatsappHover}
          >
            <FaWhatsapp className="inline mr-1" /> WhatsApp
          </motion.button>
          <motion.button
            onClick={onCall}
            className="flex-1 text-white py-2 px-2 rounded transition-colors text-sm"
            style={{ backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', color: isDarkMode ? '#000000' : '#FFFFFF' }}
            aria-label={`Call about ${title}`}
            {...callHover}
          >
            <Phone className="inline mr-1" /> Call
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

HouseCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  amenities: PropTypes.shape({
    beds: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    garages: PropTypes.number.isRequired,
    garage: PropTypes.bool,
    security: PropTypes.bool,
    pool: PropTypes.bool,
  }).isRequired,
  onWhatsApp: PropTypes.func.isRequired,
  onCall: PropTypes.func.isRequired,
};