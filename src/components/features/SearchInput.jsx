import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';

// SearchInput provides a reusable search input with dynamic UX text
export const SearchInput = ({ value, onChange, showLabel = true, showPlaceholder = true, labelText = 'Search', placeholderText = 'Search houses...' }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-col space-y-2">
      {/* Conditionally render label */}
      {showLabel && (
        <label
          className="text-sm font-medium"
          style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}
        >
          {labelText}
        </label>
      )}
      
      {/* Search input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={showPlaceholder ? placeholderText : ''}
        className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        style={{
          borderColor: isDarkMode ? '#4B5563' : '#E5E7EB',
          backgroundColor: isDarkMode ? '#374151' : '#FFFFFF',
          color: isDarkMode ? '#F9FAFB' : '#1F2937',
        }}
        aria-label={labelText}
      />
    </div>
  );
};

// PropTypes for interface consistency
SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showLabel: PropTypes.bool,
  showPlaceholder: PropTypes.bool,
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
};