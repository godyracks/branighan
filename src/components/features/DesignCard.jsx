import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FaWhatsapp, FaBed, FaBath, FaCar } from 'react-icons/fa';

// DesignCard displays a design with image, details, and contact buttons
export const DesignCard = ({ image, name, category, amenities, onWhatsApp, onCall }) => (
  <motion.div
    className="border rounded-lg shadow-md overflow-hidden bg-card-light dark:bg-card-dark transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
  >
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4 flex flex-col">
      <h3 className="text-lg font-semibold text-text-light dark:text-text-dark truncate">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{category}</p>
      <div className="flex space-x-2 mt-2">
        <span className="flex items-center"><FaBed />{amenities.beds}</span>
        <span className="flex items-center"><FaBath />{amenities.baths}</span>
        <span className="flex items-center"><FaCar />{amenities.garages}</span>
      </div>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={onWhatsApp}
          className="flex-1 bg-green-500 text-white py-2 px-2 rounded hover:bg-green-600 transition-colors"
          aria-label={`Enquire about ${name} via WhatsApp`}
        >
          <FaWhatsapp className="inline mr-1" /> WhatsApp
        </button>
        <button
          onClick={onCall}
          className="flex-1 bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 transition-colors"
          aria-label={`Call about ${name}`}
        >
          <Phone className="inline mr-1" /> Call
        </button>
      </div>
    </div>
  </motion.div>
);

DesignCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  amenities: PropTypes.shape({
    beds: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    garages: PropTypes.number.isRequired,
  }).isRequired,
  onWhatsApp: PropTypes.func.isRequired,
  onCall: PropTypes.func.isRequired,
};