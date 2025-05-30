import { motion } from 'framer-motion';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';
import { HouseCard } from '../features/HouseCard';
import { useTheme } from '../../context/ThemeContext';

// HouseList renders a paginated list of house cards
export const HouseList = ({ houses, currentPage, totalPages, onPageChange, onWhatsApp, onCall }) => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {houses.map(house => (
          <HouseCard
            key={house.id}
            image={house.image}
            title={house.title}
            location={house.location}
            price={house.price}
            amenities={house.amenities}
            onWhatsApp={() => onWhatsApp(house)}
            onCall={() => onCall(house)}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <motion.button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          style={{ backgroundColor: currentPage === 1 ? '#D1D5DB' : '#1E40AF' }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <LucideChevronLeft className="h-5 w-5" />
        </motion.button>
        <span
          style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}
        >
          {currentPage} / {totalPages}
        </span>
        <motion.button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          style={{ backgroundColor: currentPage === totalPages ? '#D1D5DB' : '#1E40AF' }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <LucideChevronRight className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
};

HouseList.propTypes = {
  houses: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onWhatsApp: PropTypes.func.isRequired,
  onCall: PropTypes.func.isRequired,
};