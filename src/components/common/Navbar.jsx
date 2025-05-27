import { Link } from 'react-router-dom'
import { LucideMoon, LucideSun, LucideMenu, LucideX, LucideHome } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'
import logoLight from '../../assets/images/lightmode.png'
import logoDark from '../../assets/images/darkmode.png'

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBlurry, setIsBlurry] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle stickiness and blur effect on scroll
  useEffect(() => {
    const navbar = document.querySelector('nav')
    navbar.style.position = 'fixed'
    navbar.style.top = '0'
    navbar.style.left = '0'
    navbar.style.width = '100%'
    navbar.style.zIndex = '50'

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsBlurry(true)
      } else {
        setIsBlurry(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { to: '/houses', label: 'Houses in Kenya' },
    { to: '/designs', label: 'Designs' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/blog', label: 'Blog' },
    { to: '/faqs', label: 'FAQs' },
  ]

  return (
    <nav
      className={`py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isBlurry ? 'blurry' : ''}`}
      style={{
        backgroundColor: isBlurry
          ? isDarkMode
            ? 'rgba(31, 41, 55, 0.8)'
            : 'rgba(249, 250, 251, 0.8)'
          : isDarkMode
          ? '#1F2937'
          : '#F9FAFB',
        color: isDarkMode ? '#F9FAFB' : '#1F2937',
      }}
    >
      <style>
        {`
          .blurry {
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }
          @supports not (backdrop-filter: blur(8px)) {
            .blurry {
              background-color: ${isDarkMode ? 'rgba(31, 41, 55, 0.9)' : 'rgba(249, 250, 251, 0.9)'};
            }
          }
        `}
      </style>

      <div className="flex items-center justify-between sm:justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="Logo"
            className="h-8 w-auto sm:h-10"
          />
        </Link>
        <div className="hidden sm:flex sm:items-center sm:space-x-6 lg:space-x-8 ml-auto">
          {navItems.map((item) => (
            <motion.div
              key={item.to}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.to}
                className={`text-base font-medium ${
                  isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'
                } px-2 py-1 rounded-md`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            onClick={toggleTheme}
            className={`p-2 cursor-pointer ${
              isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'
            }`}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {isDarkMode ? <LucideMoon className="h-6 w-6" /> : <LucideSun className="h-6 w-6" />}
          </motion.div>
        </div>
        <button
          onClick={toggleMenu}
          className={`p-2 sm:hidden ${
            isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'
          }`}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <LucideX className="h-6 w-6" /> : <LucideMenu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-4/5 max-w-xs shadow-xl z-50"
            style={{
              backgroundColor: isDarkMode ? '#1F2937' : '#F9FAFB',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
                <Link to="/" onClick={toggleMenu}>
                  <img
                    src={isDarkMode ? logoDark : logoLight}
                    alt="Logo"
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  onClick={toggleMenu}
                  className={`p-2 ${
                    isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'
                  }`}
                  aria-label="Close navigation menu"
                >
                  <LucideX className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/"
                    className={`flex items-center text-base font-medium ${
                      isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'
                    }`}
                    onClick={toggleMenu}
                  >
                    <LucideHome className="h-5 w-5 mr-2" />
                    Home
                  </Link>
                </motion.div>
                {navItems.map((item) => (
                  <motion.div
                    key={item.to}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.to}
                      className={`text-base font-medium ${
                        isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="h-4"></div>
                <div className="h-4"></div>
                <div className="h-4"></div>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    console.log('Sign In clicked')
                    toggleMenu()
                  }}
                >
                  Sign In
                </Button>
              </div>
              <div className="p-6 pt-0 border-t border-border-light dark:border-border-dark">
                <button
                  onClick={toggleTheme}
                  className={`flex items-center space-x-2 w-full p-2 rounded-md ${
                    isDarkMode ? 'text-text-dark hover:bg-border-dark' : 'text-text-light hover:bg-border-light'
                  }`}
                  aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDarkMode ? <LucideMoon className="h-5 w-5" /> : <LucideSun className="h-5 w-5" />}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={toggleMenu}
        />
      )}
    </nav>
  )
}

export default Navbar