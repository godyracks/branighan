import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LucideEye } from 'lucide-react';

// SearchModal displays real-time search results
export const SearchModal = ({ searchTerm, houses, onView }) => {
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
      className="absolute z-50 w-full max-h-64 overflow-y-auto bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-md shadow-lg mt-1"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      {results.map(house => (
        <div key={house.id} className="flex items-center p-2 hover:bg-accent-soft dark:hover:bg-accent-dark cursor-pointer">
          <img src={house.image} alt={house.title} className="w-12 h-12 object-cover mr-2" />
          <div>
            <p className="text-sm text-text-light dark:text-text-dark">{house.title}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{house.location}</p>
          </div>
          <button onClick={() => onView(house)} className="ml-auto text-primary">
            <LucideEye />
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