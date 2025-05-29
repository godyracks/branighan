import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideMoon, LucideSun } from 'lucide-react';
import PropTypes from 'prop-types';

export const DesktopNav = ({ navItems, isDarkMode, toggleTheme, animations }) => (
  <div className="hidden sm:flex sm:items-center sm:space-x-6 lg:space-x-8 ml-auto">
    {navItems.map((item) => (
      <motion.div key={item.to} whileHover={animations.hover}>
        <Link
          to={item.to}
          className={`text-base font-medium ${isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'} px-2 py-1 rounded-md`}
        >
          {item.label}
        </Link>
      </motion.div>
    ))}
    <motion.div
      onClick={toggleTheme}
      className={`p-2 cursor-pointer ${isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'}`}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {isDarkMode ? <LucideMoon className="h-6 w-6" /> : <LucideSun className="h-6 w-6" />}
    </motion.div>
  </div>
);

DesktopNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  animations: PropTypes.object.isRequired,
};