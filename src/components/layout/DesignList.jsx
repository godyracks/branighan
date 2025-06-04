import { motion } from 'framer-motion';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';
import { DesignCard } from '../features/DesignCard';
import { useTheme } from '../../context/ThemeContext';

// DesignList renders a paginated list of design cards
export const DesignList = ({ designs, currentPage, totalPages, onPageChange, onWhatsApp, onCall }) => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map(design => (
          <DesignCard
            key={design.id}
            image={design.image}
            name={design.name}
            category={design.category}
            amenities={design.amenities}
            onWhatsApp={() => onWhatsApp(design)}
            onCall={() => onCall(design)}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-2">
        <motion.button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex items-center justify-center border-2 transition-colors ${
            currentPage === 1
              ? 'border-gray-300 text-gray-300 cursor-not-allowed'
              : isDarkMode
                ? 'border-white text-white hover:bg-white hover:text-black'
                : 'border-black text-black hover:bg-black hover:text-white'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <LucideChevronLeft className="h-5 w-5" />
        </motion.button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <motion.button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 flex items-center justify-center border-2 transition-colors ${
              currentPage === page
                ? 'bg-[#D4A373] text-white border-[#D4A373]'
                : isDarkMode
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {page}
          </motion.button>
        ))}
        <motion.button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex items-center justify-center border-2 transition-colors ${
            currentPage === totalPages
              ? 'border-gray-300 text-gray-300 cursor-not-allowed'
              : isDarkMode
                ? 'border-white text-white hover:bg-white hover:text-black'
                : 'border-black text-black hover:bg-black hover:text-white'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <LucideChevronRight className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
};

DesignList.propTypes = {
  designs: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onWhatsApp: PropTypes.func.isRequired,
  onCall: PropTypes.func.isRequired,
};