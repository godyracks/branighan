import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Navbar from '../components/common/Navbar';
import Footer from '../components/layout/Footer';
import { DesignFilter } from '../components/layout/DesignFilter';
import { DesignList } from '../components/layout/DesignList';
import { useTheme } from '../context/ThemeContext';

// Mock design data with images
const designImages = [
  'https://i.pinimg.com/736x/aa/0b/dd/aa0bdd89566dee443fe6d3d67c50f356.jpg',
  'https://i.pinimg.com/736x/20/89/b2/2089b28a7eb5eb6871c568f1806413e8.jpg',
  'https://i.pinimg.com/736x/c3/36/ff/c336ff2ecaa23df9cec443da67245508.jpg',
  'https://i.pinimg.com/736x/58/76/f5/5876f5a04bd3c8dcd0121ffcab815769.jpg',
];

const mockDesigns = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  image: designImages[i % designImages.length],
  name: `Design ${i + 1}`,
  category: `Category ${i % 3 + 1}`,
  amenities: { beds: 2 + i % 3, baths: 1 + i % 2, garages: i % 2, garage: i % 2 === 0, security: i % 3 === 0 },
}));

// Designs manages layout and coordination
const Designs = () => {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const designsPerPage = 10;

  const filteredDesigns = mockDesigns.filter(design =>
    design.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!filters.category || design.category.toLowerCase().includes(filters.category.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredDesigns.length / designsPerPage);
  const paginatedDesigns = filteredDesigns.slice((currentPage - 1) * designsPerPage, currentPage * designsPerPage);

  const handleWhatsApp = (design) => {
    const message = `Interested in ${design.name} (${design.category})`;
    window.open(`https://wa.me/254704221777?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+254704221777`;
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: isDarkMode ? '#1F2937' : '#F9FAFB' }}
    >
      <Navbar />
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Sidebar (Breadcrumb, Filters) */}
          <div className="w-full lg:w-1/4 space-y-6">
            <nav className="text-sm font-medium" aria-label="Breadcrumb">
              <ol className="list-none p-0 flex items-center space-x-2">
                <li>
                  <Link
                    to="/"
                    className="transition-colors hover:text-primary"
                    style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500 dark:text-gray-400">/</span>
                </li>
                <li>
                  <Link
                    to="/designs"
                    className="transition-colors hover:text-primary"
                    style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}
                  >
                    Designs
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500 dark:text-gray-400">/</span>
                </li>
                <li style={{ color: isDarkMode ? '#9CA3AF' : '#4B5563' }}>
                  Explore
                </li>
              </ol>
            </nav>
            <DesignFilter onSearch={setSearchTerm} onFilter={setFilters} />
          </div>

          {/* Right Main Content (Cards) */}
          <div className="w-full lg:w-3/4">
            <DesignList
              designs={paginatedDesigns}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              onWhatsApp={handleWhatsApp}
              onCall={handleCall}
            />
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

Designs.propTypes = {
  // No props are directly passed to Designs, but adding PropTypes for consistency
};

export default Designs;