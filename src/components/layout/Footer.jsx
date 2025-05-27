import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LucideTwitter, LucideInstagram, LucideLinkedin } from 'lucide-react'
import logoLight from '../../assets/images/lightmode.png'
import logoDark from '../../assets/images/darkmode.png'

const Footer = () => {
  const { isDarkMode } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const linkHover = {
    whileHover: { scale: 1.05, color: isDarkMode ? '#9333EA' : '#1E40AF' },
    transition: { duration: 0.2 },
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: isDarkMode ? '#1F2937' : '#F9FAFB',
        color: isDarkMode ? '#F9FAFB' : '#1F2937',
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Section: Logo and Tagline */}
        <motion.div
          className="flex flex-col items-center mb-10"
          variants={itemVariants}
        >
          <Link to="/">
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="Logo"
              className="h-10 w-auto mb-4"
            />
          </Link>
          <p className="text-sm sm:text-base text-text-light dark:text-text-dark max-w-md text-center">
            Discover minimalist, luxury properties across Kenya
          </p>
        </motion.div>

        {/* Middle Section: Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
                { to: '/blog', label: 'Blog' },
                { to: '/faqs', label: 'FAQs' },
              ].map((item) => (
                <motion.li key={item.to} {...linkHover}>
                  <Link
                    to={item.to}
                    className={`text-sm ${
                      isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/houses', label: 'Browse Houses' },
                { to: '/designs', label: 'View Designs' },
                { to: '/sell-your-house', label: 'Sell Property' },
              ].map((item) => (
                <motion.li key={item.to} {...linkHover}>
                  <Link
                    to={item.to}
                    className={`text-sm ${
                      isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-text-light dark:text-text-dark">
              <li>Email: info@branighangroup.ke</li>
              <li>Phone: +254 704 221777 </li>
              <li>Address: Norfolk Towers NAIROBI East Africa 00200</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {[
                { Icon: LucideTwitter, label: 'Twitter', href: 'https://twitter.com' },
                { Icon: LucideInstagram, label: 'Instagram', href: 'https://instagram.com' },
                { Icon: LucideLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
              ].map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  {...linkHover}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      isDarkMode ? 'text-text-dark hover:text-secondary' : 'text-text-light hover:text-primary'
                    }`}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Copyright */}
        <motion.div
          className="border-t border-border-light dark:border-border-dark pt-6 text-center"
          variants={itemVariants}
        >
          <p className="text-sm text-text-light dark:text-text-dark">
            © {currentYear} Branighan Group. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer