import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LucideEye } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// SearchModal displays real-time search results
export const SearchModal = ({ searchTerm, houses, onView }) => {
  const { isDarkMode } = useTheme();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = houses.filter(house =>
        house.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        house.location.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5);
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm, houses]);

  if (!searchTerm || results.length === 0) return null;

  return (
    <motion.div
      className="absolute z-50 w-full max-h-64 overflow-y-auto rounded-md shadow-lg mt-1 border"
      style={{
        backgroundColor: isDarkMode ? '#374151' : '#FFFFFF',
        borderColor: isDarkMode ? '#4B5563' : '#E5E7EB',
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {results.map(house => (
        <div
          key={house.id}
          className="flex items-center p-2 hover:transition-colors duration-300 cursor-pointer"
          style={{ backgroundColor: isDarkMode ? '#374151' : '#FFFFFF', ':hover': { backgroundColor: isDarkMode ? '#A66B4F' : '#E8C4A0' } }}
        >
          <img src={house.image} alt={house.title} className="w-12 h-12 object-cover rounded-md mr-2" />
          <div>
            <p
              className="text-sm"
              style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}
            >
              {house.title}
            </p>
            <p
              className="text-xs"
              style={{ color: isDarkMode ? '#9CA3AF' : '#4B5563' }}
            >
              {house.location}
            </p>
          </div>
          <button
            onClick={() => onView(house)}
            className="ml-auto"
            style={{ color: '#1E40AF' }}
            aria-label={`View ${house.title}`}
          >
            <LucideEye className="h-5 w-5" />
          </button>
        </div>
      ))}
    </motion.div>
  );
};

SearchModal.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  houses: PropTypes.array.isRequired,
  onView: PropTypes.func.isRequired,
};