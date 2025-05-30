import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FaWhatsapp, FaBed, FaBath, FaCar } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

// HouseCard displays a house with image, details, amenities, and contact buttons
export const HouseCard = ({ image, title, location, price, amenities, onWhatsApp, onCall }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      className="border border-border-light dark:border-border-dark rounded-lg shadow-md overflow-hidden bg-card-light dark:bg-card-dark transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-text-light dark:text-text-dark truncate">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{location}</p>
        <p className="text-base font-medium text-text-light dark:text-text-dark mt-2">KSh {price.toLocaleString()}</p>
        <div className="flex space-x-2 mt-2">
          <span className="flex items-center text-text-light dark:text-text-dark"><FaBed />{amenities.beds}</span>
          <span className="flex items-center text-text-light dark:text-text-dark"><FaBath />{amenities.baths}</span>
          <span className="flex items-center text-text-light dark:text-text-dark"><FaCar />{amenities.garages}</span>
        </div>
        <div className="mt-4 flex space-x-2">
          <button
            onClick={onWhatsApp}
            className="flex-1 bg-green-500 text-white py-2 px-2 rounded hover:bg-green-600 transition-colors"
            aria-label={`Enquire about ${title} via WhatsApp`}
          >
            <FaWhatsapp className="inline mr-1" /> WhatsApp
          </button>
          <button
            onClick={onCall}
            className="flex-1 bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 transition-colors"
            aria-label={`Call about ${title}`}
          >
            <Phone className="inline mr-1 text-white" /> Call
          </button>
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
  amenities: PropTypes.shape({
    beds: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    garages: PropTypes.number.isRequired,
  }).isRequired,
  onWhatsApp: PropTypes.func.isRequired,
  onCall: PropTypes.func.isRequired,
};