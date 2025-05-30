import { motion } from 'framer-motion';
import { HouseCard } from '../features/HouseCard';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
import PropTypes from 'prop-types'; 

// HouseList renders a paginated list of house cards
export const HouseList = ({ houses, currentPage, totalPages, onPageChange, onWhatsApp, onCall }) => (
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
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full bg-primary text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        <LucideChevronLeft />
      </button>
      <span className="text-text-light dark:text-text-dark">{currentPage} / {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full bg-primary text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        <LucideChevronRight />
      </button>
    </div>
  </div>
);

HouseList.propTypes = {
  houses: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onWhatsApp: PropTypes.func.isRequired,
  onCall: PropTypes.func.isRequired,
};