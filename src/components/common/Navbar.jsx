import { Link } from 'react-router-dom';
import { LucideMoon, LucideSun, LucideMenu, LucideX, LucideHome } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import Button from './Button';
import { useNavbarBlur } from '../../hooks/useNavbarBlur';
import { useNavbarAnimations } from '../../hooks/useNavbarAnimations';
import { DesktopNav } from '../Navbar/DesktopNav';
import { MobileMenu } from '../Navbar/MobileMenu';
import styles from '../Navbar/Navbar.module.css';

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
  blurStyles = styles.blurry,
}) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isBlurry = useNavbarBlur();
  const animations = useNavbarAnimations();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const logo = isDarkMode ? logoDark : logoLight;

  return (
    <nav
      className={`py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 fixed top-0 left-0 w-full z-50 ${isBlurry ? blurStyles : ''}`}
      style={{
        backgroundColor: isBlurry
          ? `var(--navbar-bg-${isDarkMode ? 'dark' : 'light'})`
          : `var(--navbar-bg-${isDarkMode ? 'dark' : 'light'})`,
        color: `var(--text-${isDarkMode ? 'dark' : 'light'})`,
      }}
    >
      <div className="flex items-center justify-between sm:justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto sm:h-10" />
        </Link>
        <DesktopNav navItems={navItems} isDarkMode={isDarkMode} animations={animations} />
        <motion.button
          onClick={toggleMenu}
          className={`p-2 sm:hidden ${isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'}`}
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
  blurStyles: PropTypes.string,
};

export default Navbar;