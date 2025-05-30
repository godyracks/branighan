import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchInput } from '../features/SearchInput';
import { useTheme } from '../../context/ThemeContext';

// DesignFilter handles search and filter inputs for designs
export const DesignFilter = ({ onSearch, onFilter }) => {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: '' });

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
        labelText="Search Designs"
        placeholderText="e.g., modern design..."
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          placeholder="Filter by category..."
          className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          style={{
            borderColor: isDarkMode ? '#4B5563' : '#E5E7EB',
            backgroundColor: isDarkMode ? '#374151' : '#FFFFFF',
            color: isDarkMode ? '#F9FAFB' : '#1F2937',
          }}
        />
      </div>
    </div>
  );
};

DesignFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};