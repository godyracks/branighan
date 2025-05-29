
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideX, LucideHome, LucideMoon, LucideSun } from 'lucide-react';
import PropTypes from 'prop-types';
import Button from '../common/Button';

export const MobileMenu = ({ isOpen, onClose, navItems, isDarkMode, toggleTheme, logo }) => (
  <>
    <motion.div
      className="fixed inset-y-0 right-0 w-4/5 max-w-xs shadow-xl z-50"
      style={{ backgroundColor: isDarkMode ? '#1F2937' : '#F9FAFB' }}
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
          <Link to="/" onClick={onClose}>
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>
          <button
            onClick={onClose}
            className={`p-2 ${isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'}`}
            aria-label="Close navigation menu"
          >
            <LucideX className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col flex-1 p-6 space-y-4">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link
              to="/"
              className={`flex items-center text-base font-medium ${isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'}`}
              onClick={onClose}
            >
              <LucideHome className="h-5 w-5 mr-2" />
              Home
            </Link>
          </motion.div>
          {navItems.map((item) => (
            <motion.div key={item.to} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                to={item.to}
                className={`text-base font-medium ${isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'}`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <div className="h-4" />
          <div className="h-4" />
          <div className="h-4" />
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={() => {
              console.log('Sign In clicked');
              onClose();
            }}
          >
            Sign In
          </Button>
        </div>
        <div className="p-6 pt-0 border-t border-border-light dark:border-border-dark">
          <button
            onClick={toggleTheme}
            className={`flex items-center space-x-2 w-full p-2 rounded-md ${isDarkMode ? 'text-text-dark hover:bg-border-dark' : 'text-text-light hover:bg-border-light'}`}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <LucideMoon className="h-5 w-5" /> : <LucideSun className="h-5 w-5" />}
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </motion.div>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black/60 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />
    )}
  </>
);

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
};