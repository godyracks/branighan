import { motion } from 'framer-motion';
import { MapPin, Bath, Car, Warehouse, Shield } from 'lucide-react';

/**
 * SlidingCard component to render individual property cards in rectangular layout
 * @param {Object} property - The property object
 * @param {string} property.name - Property title
 * @param {string} property.image - Image URL
 * @param {string} property.location - Property location
 * @param {string} property.description - Short description
 */
const SlidingCard = ({ property }) => {
  return (
    <motion.div
      className="flex w-full max-w-[320px] h-[120px] sm:h-[160px]  bg-background-light dark:bg-background-dark rounded-lg shadow-lg overflow-hidden flex-shrink-0 hover:scale-[1.02] transition-transform duration-300"
      whileHover={{ scale: 1.02 }}
    >
      {/* Image */}
      <div
        className="w-[45%] bg-cover bg-center bg-gray-200 dark:bg-gray-700"
        style={{ backgroundImage: `url(${property.image})` }}
      />

      {/* Details */}
      <div className="w-[55%] p-3 sm:p-4 flex flex-col justify-between border-l-2 border-accent-soft pt-0 mt-0">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm sm:text-base mt-0 font-semibold text-text-light dark:text-text-dark truncate">
            {property.name}
          </h3>
          <p className="text-xs text-text-light/80 dark:text-text-dark/80 flex items-center gap-1">
            <MapPin
              className="h-4 w-4"
              stroke="#D4A373"
              strokeWidth={1.5}
            />
            {property.location}
          </p>
          <p className="text-xs sm:text-sm mt-0 text-text-light/90 dark:text-text-dark/90 line-clamp-2">
            {property.description}
          </p>
        </div>
        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mt-0.4 text-xs sm:text-sm text-text-light/80 dark:text-text-dark/80">
          <span className="flex items-center gap-1">
            <Bath
              className="h-4 w-4"
              stroke="#D4A373"
              strokeWidth={1.5}
            />
            2
          </span>
          <span className="flex items-center gap-1">
            <Car
              className="h-4 w-4"
              stroke="#D4A373"
              strokeWidth={1.5}
            />
            1
          </span>
          <span className="flex items-center gap-1">
            <Warehouse
              className="h-4 w-4"
              stroke="#D4A373"
              strokeWidth={1.5}
            />
            Garage
          </span>
          <span className="flex items-center gap-1">
            <Shield
              className="h-4 w-4"
              stroke="#D4A373"
              strokeWidth={1.5}
            />
            Fenced
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SlidingCard;