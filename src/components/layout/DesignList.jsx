import { motion } from 'framer-motion';
import { DesignCard } from '../features/DesignCard';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
import PropTypes from 'prop-types'; 

// DesignList renders a paginated list of design cards
export const DesignList = ({ designs, currentPage, totalPages, onPageChange, onWhatsApp, onCall }) => (
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

DesignList.propTypes = {
  designs: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onWhatsApp: PropTypes.func.isRequired,
  onCall: PropTypes.func.isRequired,
};