import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchInput } from '../features/SearchInput';
import { useTheme } from '../../context/ThemeContext';
import Button from '../common/Button';

export const HouseFilter = ({ onSearch, onFilter }) => {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ priceRange: '', location: '', category: '' });

  const categories = [
    'Town home', 'Apartments', 'Mansion', 'Villa', 'Cabin', 'Farmhouse', 'Cottage', 'Mobile homes'
  ];

  const priceRanges = [
    { label: '0 - 500K', value: '500000' },
    { label: '500K - 1M', value: '1000000' },
    { label: '1M - 2M', value: '2000000' },
    { label: '2M - 3M', value: '3000000' },
    { label: '3M - 5M', value: '5000000' },
    { label: '5M - 10M', value: '10000000' },
    { label: 'Above 10M', value: '15000000' },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (name, value) => {
    const newValue = filters[name] === value ? '' : value;
    const updatedFilters = { ...filters, [name]: newValue };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const handleLocationChange = (e) => {
    const updatedFilters = { ...filters, location: e.target.value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  return (
    <div className="space-y-6">
      <SearchInput
        value={searchTerm}
        onChange={handleSearch}
        labelText="Search Houses"
        placeholderText="e.g., 1 bedroom cabin..."
      />
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="text-sm font-medium mb-2" style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}>
            Categories
          </h4>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant="filters_secondary"
                size="sm"
                isSelected={filters.category === category}
                onClick={() => handleFilterChange('category', category)}
                className={
                  isDarkMode
                    ? `text-[#F5F5F5] ${filters.category === category ? 'bg-accent-dark' : ''}`
                    : `text-black ${filters.category === category ? 'bg-accent-light' : ''}`
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2" style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}>
            Budget
          </h4>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map(range => (
              <Button
                key={range.value}
                variant="filters_secondary"
                size="sm"
                isSelected={filters.priceRange === range.value}
                onClick={() => handleFilterChange('priceRange', range.value)}
                className={
                  isDarkMode
                    ? `text-[#F5F5F5] ${filters.priceRange === range.value ? 'bg-accent-dark' : ''}`
                    : `text-black ${filters.priceRange === range.value ? 'bg-accent-light' : ''}`
                }
              >
                {range.label}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2" style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}>
            Location
          </h4>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleLocationChange}
            placeholder="Filter by location..."
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            style={{
              borderColor: isDarkMode ? '#4B5563' : '#E5E7EB',
              backgroundColor: isDarkMode ? '#374151' : '#FFFFFF',
              color: isDarkMode ? '#F9FAFB' : '#1F2937',
            }}
          />
        </div>
      </div>
    </div>
  );
};

HouseFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};