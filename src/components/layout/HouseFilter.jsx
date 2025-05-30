import { useState } from 'react';
import { SearchInput } from '../features/SearchInput';
import PropTypes from 'prop-types'; 

// HouseFilter handles search and filter inputs
export const HouseFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ priceRange: '', location: '', category: '' });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    onFilter({ ...filters, [name]: value });
  };

  return (
    <div className="space-y-6">
      <SearchInput
        value={searchTerm}
        onChange={handleSearch}
        labelText="Search Houses"
        placeholderText="e.g., 1 bedroom cabin..."
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <select name="category" value={filters.category} onChange={handleFilterChange} className="border rounded-md py-2 px-3">
          <option value="">All Categories</option>
          <option value="Town home">Town home</option>
          <option value="Apartments">Apartments</option>
          <option value="Mansion">Mansion</option>
          <option value="Villa">Villa</option>
          <option value="Cabin">Cabin</option>
          <option value="Farmhouse">Farmhouse</option>
          <option value="Cottage">Cottage</option>
          <option value="Mobile homes">Mobile homes</option>
        </select>
        <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange} className="border rounded-md py-2 px-3">
          <option value="">All Prices</option>
          <option value="500000">0 - 500K</option>
          <option value="1000000">500K - 1M</option>
          <option value="2000000">1M - 2M</option>
          <option value="3000000">2M - 3M</option>
          <option value="5000000">3M - 5M</option>
          <option value="10000000">5M - 10M</option>
          <option value="15000000">Above 10M</option>
        </select>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Filter by location..."
          className="border rounded-md py-2 px-3"
        />
      </div>
    </div>
  );
};

// PropTypes for type safety and interface consistency
HouseFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};