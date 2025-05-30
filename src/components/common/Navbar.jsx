
import { Link } from 'react-router-dom';
import { LucideMenu, LucideX } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { DesktopNav } from '../Navbar/DesktopNav';
import { MobileMenu } from '../Navbar/MobileMenu';

// Default props
const defaultNavItems = [
  { to: '/houses', label: 'Houses in Kenya' },
  { to: '/designs', label: 'Designs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
  { to: '/faqs', label: 'FAQs' },
];

const Navbar = ({
  navItems = defaultNavItems,
  logoLight = '../../assets/images/lightmode.png',
  logoDark = '/path/to/darkmode.png',
  onSignIn,
}) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const animations = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const logo = isDarkMode ? logoDark : logoLight;

  return (
    <nav
      className="py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: isDarkMode ? '#1F2937' : '#F9FAFB',
        color: isDarkMode ? '#F9FAFB' : '#1F2937',
      }}
    >
      <div className="flex items-center justify-between sm:justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto sm:h-10" />
        </Link>
        <DesktopNav
          navItems={navItems}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          animations={animations}
          onSignIn={onSignIn}
        />
        <motion.button
          onClick={toggleMenu}
          className="p-2 sm:hidden"
          style={{ color: isDarkMode ? '#F9FAFB' : '#1F2937' }}
          aria-label="Toggle navigation menu"
          whileHover={animations.hover}
        >
          {isMenuOpen ? <LucideX className="h-6 w-6" /> : <LucideMenu className="h-6 w-6" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={toggleMenu}
            navItems={navItems}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
            logo={logo}
            onSignIn={onSignIn}
            showSignIn={!!onSignIn}
            animations={animations}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  logoLight: PropTypes.string.isRequired,
  logoDark: PropTypes.string.isRequired,
  onSignIn: PropTypes.func,
};

export default Navbar;
