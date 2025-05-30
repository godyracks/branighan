import { useState } from 'react';
import { SearchInput } from '../features/SearchInput';
import PropTypes from 'prop-types'; 

// DesignFilter handles search and filter inputs for designs
export const DesignFilter = ({ onSearch, onFilter }) => {
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
          className="border rounded-md py-2 px-3"
        />
      </div>
    </div>
  );
};

DesignFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};