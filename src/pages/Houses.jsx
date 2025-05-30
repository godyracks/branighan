import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Navbar from '../components/common/Navbar';
import Footer from '../components/layout/Footer';
import { HouseFilter } from '../components/layout/HouseFilter';
import { HouseList } from '../components/layout/HouseList';
import { useTheme } from '../context/ThemeContext';

// Mock house data with images
const houseImages = [
  'https://i.pinimg.com/736x/03/6e/3c/036e3c96cacc6f4d74d28b56acb7e118.jpg', // Apartment
  'https://i.pinimg.com/736x/45/07/a3/4507a378f547bc32f7805c7f8e572abb.jpg', // Townhouse
  'https://i.pinimg.com/736x/33/80/58/3380589d3796bf1a2dcbba9764ee94f0.jpg', // Mansion
  'https://i.pinimg.com/736x/a7/95/3b/a7953bf053f34b2e341920ab3c1cefcb.jpg', // Cabin
  'https://i.pinimg.com/736x/da/ae/19/daae191b88ee2fafc3f1c30b3c80c67a.jpg', // Villa
  'https://i.pinimg.com/736x/fb/66/cc/fb66ccac2488f97f009c0d406edf7db4.jpg', // Farmhouse
  'https://i.pinimg.com/736x/b8/11/73/b81173f28eac00bb31e9939b9f27323a.jpg', // Cottage
];

// Kenyan locations for house assignments
const kenyanLocations = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Kitale',
  'Malindi', 'Kakamega', 'Nyeri', 'Meru', 'Lamu', 'Machakos', 'Naivasha',
  'Kericho', 'Embu', 'Nanyuki', 'Voi', 'Kilifi', 'Karen', 'Diani', 'Runda',
  'Westlands', 'Kilimani', 'Lavington',
];

// Property types aligned with images
const propertyTypes = [
  'Apartment', 'Townhouse', 'Mansion', 'Cabin', 'Villa', 'Farmhouse', 'Cottage',
];

// Map property types to houseImages
const imageMap = {
  Apartment: houseImages[0],
  Townhouse: houseImages[1],
  Mansion: houseImages[2],
  Cabin: houseImages[3],
  Villa: houseImages[4],
  Farmhouse: houseImages[5],
  Cottage: houseImages[6],
};

// Creative house data (12 houses)
const mockHouses = [
  {
    id: 1,
    image: imageMap.Apartment,
    title: 'Spacious Apartment in Nairobi',
    location: 'Nairobi',
    price: 5000000,
    category: 'Apartment',
    amenities: { beds: 2, baths: 1, garages: 1, garage: true, security: true, pool: false },
  },
  {
    id: 2,
    image: imageMap.Townhouse,
    title: 'Elegant Townhouse in Mombasa',
    location: 'Mombasa',
    price: 6000000,
    category: 'Townhouse',
    amenities: { beds: 3, baths: 2, garages: 1, garage: true, security: false, pool: true },
  },
  {
    id: 3,
    image: imageMap.Mansion,
    title: 'Grandeur Mansion in Kisumu',
    location: 'Kisumu',
    price: 12000000,
    category: 'Mansion',
    amenities: { beds: 5, baths: 4, garages: 2, garage: true, security: true, pool: true },
  },
  {
    id: 4,
    image: imageMap.Cabin,
    title: 'Cozy Cabin in Nyeri',
    location: 'Nyeri',
    price: 5500000,
    category: 'Cabin',
    amenities: { beds: 2, baths: 1, garages: 0, garage: false, security: false, pool: false },
  },
  {
    id: 5,
    image: imageMap.Villa,
    title: 'Luxurious Villa in Nakuru',
    location: 'Nakuru',
    price: 9000000,
    category: 'Villa',
    amenities: { beds: 4, baths: 3, garages: 2, garage: true, security: true, pool: true },
  },
  {
    id: 6,
    image: imageMap.Farmhouse,
    title: 'Rustic Farmhouse in Eldoret',
    location: 'Eldoret',
    price: 6500000,
    category: 'Farmhouse',
    amenities: { beds: 3, baths: 2, garages: 1, garage: true, security: false, pool: false },
  },
  {
    id: 7,
    image: imageMap.Cottage,
    title: 'Tranquil Cottage in Diani',
    location: 'Diani',
    price: 5200000,
    category: 'Cottage',
    amenities: { beds: 2, baths: 1, garages: 0, garage: false, security: true, pool: false },
  },
  {
    id: 8,
    image: imageMap.Apartment,
    title: 'Modern Apartment in Karen',
    location: 'Karen',
    price: 5800000,
    category: 'Apartment',
    amenities: { beds: 2, baths: 2, garages: 1, garage: true, security: true, pool: false },
  },
  {
    id: 9,
    image: imageMap.Townhouse,
    title: 'Stylish Townhouse in Runda',
    location: 'Runda',
    price: 7000000,
    category: 'Townhouse',
    amenities: { beds: 3, baths: 2, garages: 1, garage: true, security: true, pool: false },
  },
  {
    id: 10,
    image: imageMap.Mansion,
    title: 'Opulent Mansion in Kilimani',
    location: 'Kilimani',
    price: 15000000,
    category: 'Mansion',
    amenities: { beds: 6, baths: 5, garages: 3, garage: true, security: true, pool: true },
  },
  {
    id: 11,
    image: imageMap.Cabin,
    title: 'Serene Cabin in Nanyuki',
    location: 'Nanyuki',
    price: 5300000,
    category: 'Cabin',
    amenities: { beds: 2, baths: 1, garages: 0, garage: false, security: false, pool: false },
  },
  {
    id: 12,
    image: imageMap.Villa,
    title: 'Contemporary Villa in Malindi',
    location: 'Malindi',
    price: 8500000,
    category: 'Villa',
    amenities: { beds: 4, baths: 3, garages: 2, garage: true, security: true, pool: true },
  },
];

// Houses manages layout and coordination
const Houses = () => {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ priceRange: '', location: '', category: '' });
  const [activePage, setActivePage] = useState(1);
  const housesPerPage = 6;

  const filteredHouses = mockHouses.filter(house =>
    house.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!filters.category || house.category.toLowerCase() === filters.category.toLowerCase()) &&
    (!filters.priceRange || house.price <= parseInt(filters.priceRange)) &&
    (!filters.location || house.location.toLowerCase().includes(filters.location.toLowerCase()))
  );

  const totalPages = Math.max(1, Math.ceil(filteredHouses.length / housesPerPage));

  // Reset activePage when filters or search change
  useEffect(() => {
    setActivePage(1);
  }, [searchTerm, filters]);

  // Handle page change with bounds checking
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setActivePage(newPage);
    }
  };

  const paginatedHouses = filteredHouses.slice(
    (activePage - 1) * housesPerPage,
    activePage * housesPerPage
  );

  // Debug pagination state
  console.log('activePage:', activePage, 'totalPages:', totalPages, 'paginatedHouses:', paginatedHouses);

  const handleWhatsApp = (house) => {
    const message = `Interested in ${house.title} at ${house.location} for KSh ${house.price.toLocaleString()}`;
    window.open(`https://wa.me/254704221777?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePhoneCall = () => {
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
          {/* Left Sidebar: Search, Filters, Breadcrumb */}
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
                    to="/houses"
                    className="transition-colors hover:text-primary"
                    style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}
                  >
                    Houses in Kenya
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500 dark:text-gray-400">/</span>
                </li>
                <li style={{ color: isDarkMode ? '#9CA3AF' : '#4B5563' }}>
                  Available
                </li>
              </ol>
            </nav>
            <HouseFilter onSearch={setSearchTerm} onFilter={setFilters} />
          </div>

          {/* Main Content: House Listings */}
          <div className="w-full lg:w-3/4">
            <HouseList
              houses={paginatedHouses}
              currentPage={activePage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onWhatsApp={handleWhatsApp}
              onCall={handlePhoneCall}
            />
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

Houses.propTypes = {};

export default Houses;