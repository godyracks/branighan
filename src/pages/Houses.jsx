import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { HouseFilter } from '../components/layout/HouseFilter';
import { HouseList } from '../components/layout/HouseList';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// Mock house data with images
const houseImages = [
  'https://i.pinimg.com/736x/03/6e/3c/036e3c96cacc6f4d74d28b56acb7e118.jpg', // Apartment
  'https://i.pinimg.com/736x/45/07/a3/4507a378f547bc32f7805c7f8e572abb.jpg', // Another
  'https://i.pinimg.com/736x/33/80/58/3380589d3796bf1a2dcbba9764ee94f0.jpg', // Mansion
  'https://i.pinimg.com/736x/a7/95/3b/a7953bf053f34b2e341920ab3c1cefcb.jpg', // Cabin
  'https://i.pinimg.com/736x/da/ae/19/daae191b88ee2fafc3f1c30b3c80c67a.jpg', // Another Cabin
  'https://i.pinimg.com/736x/fb/66/cc/fb66ccac2488f97f009c0d406edf7db4.jpg', // Farmhouse
  'https://i.pinimg.com/736x/b8/11/73/b81173f28eac00bb31e9939b9f27323a.jpg', // Cottage
];
const mockHouses = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  image: houseImages[i % houseImages.length],
  title: `House ${i + 1}`,
  location: `Location ${i + 1}`,
  price: 500000 + i * 100000,
  amenities: { beds: 2 + i % 3, baths: 1 + i % 2, garages: i % 2 },
}));

// Houses manages layout and coordination
const Houses = () => {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ priceRange: '', location: '', category: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const housesPerPage = 10;

  const filteredHouses = mockHouses.filter(house =>
    house.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!filters.category || house.title.toLowerCase().includes(filters.category.toLowerCase())) &&
    (!filters.priceRange || house.price <= parseInt(filters.priceRange)) &&
    (!filters.location || house.location.toLowerCase().includes(filters.location.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredHouses.length / housesPerPage);
  const paginatedHouses = filteredHouses.slice((currentPage - 1) * housesPerPage, currentPage * housesPerPage);

  const handleWhatsApp = (house) => {
    const message = `Interested in ${house.title} at ${house.location} for KSh ${house.price.toLocaleString()}`;
    window.open(`https://wa.me/254704221777?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = (house) => {
    window.location.href = `tel:+254704221777`;
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Navbar />
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Sidebar (Search, Filters, Breadcrumb) */}
          <div className="w-full lg:w-1/4 space-y-6">
            <nav className="text-sm font-medium" aria-label="Breadcrumb">
              <ol className="list-none p-0 flex items-center space-x-2">
                <li>
                  <Link to="/" className="text-text-light dark:text-text-dark hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500 dark:text-gray-400"></span>
                </li>
                <li>
                  <Link to="/houses" className="text-text-light dark:text-text-dark hover:text-primary transition-colors">
                    Houses in Kenya
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500 dark:text-gray-400"></span>
                </li>
                <li className="text-gray-500 dark:text-gray-400">Available</li>
              </ol>
            </nav>
            <HouseFilter onSearch={setSearchTerm} onFilter={setFilters} />
          </div>

          {/* Right Main Content (Cards) */}
          <div className="w-full lg:w-3/4">
            <HouseList
              houses={paginatedHouses}
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

export default Houses;