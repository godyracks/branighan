import { useState, useEffect } from 'react';
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
  'https://i.pinimg.com/736x/aa/0b/dd/aa0bdd89566dee443fe6d3d67c50f356.jpg', // Contemporary style
  'https://i.pinimg.com/736x/20/89/b2/2089b28a7eb5eb6871c568f1806413e8.jpg', // Traditional style
  'https://i.pinimg.com/736x/c3/36/ff/c336ff2ecaa23df9cec443da67245508.jpg', // Minimalist style
  'https://i.pinimg.com/736x/58/76/f5/5876f5a04bd3c8dcd0121ffcab815769.jpg', // Eco-Friendly style
];

// Design categories
const designCategories = ['Contemporary', 'Traditional', 'Minimalist', 'Eco-Friendly'];

// Map categories to designImages
const imageMap = {
  Contemporary: designImages[0],
  Traditional: designImages[1],
  Minimalist: designImages[2],
  'Eco-Friendly': designImages[3],
};

// Creative design data (12 designs)
const mockDesigns = [
  {
    id: 1,
    image: imageMap.Contemporary,
    name: 'Serenity Layout',
    category: 'Contemporary',
    amenities: { beds: 3, baths: 2, garages: 1, garage: true, security: true, pool: false },
  },
  {
    id: 2,
    image: imageMap.Traditional,
    name: 'Heritage Haven',
    category: 'Traditional',
    amenities: { beds: 4, baths: 3, garages: 2, garage: true, security: false, pool: true },
  },
  {
    id: 3,
    image: imageMap.Minimalist,
    name: 'Zen Retreat',
    category: 'Minimalist',
    amenities: { beds: 2, baths: 1, garages: 0, garage: false, security: true, pool: false },
  },
  {
    id: 4,
    image: imageMap['Eco-Friendly'],
    name: 'Green Oasis',
    category: 'Eco-Friendly',
    amenities: { beds: 3, baths: 2, garages: 1, garage: true, security: false, pool: false },
  },
  {
    id: 5,
    image: imageMap.Contemporary,
    name: 'Urban Elegance',
    category: 'Contemporary',
    amenities: { beds: 3, baths: 2, garages: 1, garage: true, security: true, pool: true },
  },
  {
    id: 6,
    image: imageMap.Traditional,
    name: 'Classic Abode',
    category: 'Traditional',
    amenities: { beds: 5, baths: 4, garages: 2, garage: true, security: true, pool: false },
  },
  {
    id: 7,
    image: imageMap.Minimalist,
    name: 'Sleek Sanctuary',
    category: 'Minimalist',
    amenities: { beds: 2, baths: 1, garages: 0, garage: false, security: false, pool: false },
  },
  {
    id: 8,
    image: imageMap['Eco-Friendly'],
    name: 'Eco Harmony',
    category: 'Eco-Friendly',
    amenities: { beds: 4, baths: 3, garages: 1, garage: true, security: true, pool: true },
  },
  {
    id: 9,
    image: imageMap.Contemporary,
    name: 'Modern Vista',
    category: 'Contemporary',
    amenities: { beds: 3, baths: 2, garages: 1, garage: true, security: true, pool: false },
  },
  {
    id: 10,
    image: imageMap.Traditional,
    name: 'Timeless Estate',
    category: 'Traditional',
    amenities: { beds: 4, baths: 3, garages: 2, garage: true, security: false, pool: true },
  },
  {
    id: 11,
    image: imageMap.Minimalist,
    name: 'Pure Simplicity',
    category: 'Minimalist',
    amenities: { beds: 2, baths: 1, garages: 0, garage: false, security: true, pool: false },
  },
  {
    id: 12,
    image: imageMap['Eco-Friendly'],
    name: 'Sustainable Haven',
    category: 'Eco-Friendly',
    amenities: { beds: 3, baths: 2, garages: 1, garage: true, security: true, pool: false },
  },
];

// Designs manages layout and coordination
const Designs = () => {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const designsPerPage = 6;

  const filteredDesigns = mockDesigns.filter(design =>
    design.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!filters.category || design.category.toLowerCase().includes(filters.category.toLowerCase()))
  );

  const totalPages = Math.max(1, Math.ceil(filteredDesigns.length / designsPerPage));

  // Reset currentPage when filters or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);

  // Handle page change with bounds checking
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginatedDesigns = filteredDesigns.slice(
    (currentPage - 1) * designsPerPage,
    currentPage * designsPerPage
  );

  // Debug pagination state
  console.log('currentPage:', currentPage, 'totalPages:', totalPages, 'paginatedDesigns:', paginatedDesigns);

  const handleWhatsApp = (design) => {
    const message = `Interested in ${design.name} (${design.category})`;
    window.open(`https://wa.me/254704221777?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+254704221777';
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
              onPageChange={handlePageChange}
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

Designs.propTypes = {};

export default Designs;