import PropTypes from 'prop-types';

// SearchInput provides a reusable search input with dynamic UX text
export const SearchInput = ({ value, onChange, showLabel = true, showPlaceholder = true, labelText = 'Search', placeholderText = 'Search houses...' }) => (
  <div className="flex flex-col space-y-2">
    {/* Conditionally render label */}
    {showLabel && <label className="text-sm font-medium text-text-light dark:text-text-dark">{labelText}</label>}
    
    {/* Search input */}
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={showPlaceholder ? placeholderText : ''}
      className="border rounded-md py-2 px-3 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={labelText}
    />
  </div>
);

// PropTypes for interface consistency
SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showLabel: PropTypes.bool,
  showPlaceholder: PropTypes.bool,
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
};