import { useState, useEffect } from 'react';
import  Navbar  from '../components/common/Navbar';
import Footer  from '../components/layout/Footer';

import { DesignFilter } from '../components/layout/DesignFilter';
import { DesignList } from '../components/layout/DesignList';
import { motion } from 'framer-motion';

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
  amenities: { beds: 2 + i % 3, baths: 1 + i % 2, garages: i % 2 },
}));

// Designs manages layout and coordination
const Designs = () => {
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

  const handleCall = (design) => {
    window.location.href = `tel:+254704221777`;
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
       
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4 space-y-6">
            <nav className="text-sm text-text-light dark:text-text-dark" aria-label="Breadcrumb">
              <ol className="list-none p-0 flex space-x-2">
                <li><a href="/" className="hover:text-primary">Home</a></li>
                <li><span> &gt; </span></li>
                <li><a href="/designs" className="hover:text-primary">Designs</a></li>
                <li><span> &gt; </span></li>
                <li>Explore</li>
              </ol>
            </nav>
            <DesignFilter onSearch={setSearchTerm} onFilter={setFilters} />
          </div>
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
      </div>
      <Footer />
    </div>
  );
};

export default Designs;