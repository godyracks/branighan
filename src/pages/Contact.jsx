import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import Navbar from '../components/common/Navbar'
import Footer from '../components/layout/Footer'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const { isDarkMode } = useTheme()

  // Placeholder for chatbot integration (e.g., Tawk.to)
  useEffect(() => {
    // Example: Tawk.to chatbot script (replace with actual script)
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/YOUR_CHATBOT_ID/default' // Replace with actual chatbot ID
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    document.body.appendChild(script)

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script)
    }
  }, [])

  const socialLinks = [
    { platform: 'whatsapp', link: 'https://wa.me/254704221777' },
    { platform: 'facebook', link: 'https://facebook.com/branighangroup' },
    { platform: 'instagram', link: 'https://instagram.com/branighangroup' },
    { platform: 'linkedin', link: 'https://linkedin.com/company/branighangroup' },
    { platform: 'twitter', link: 'https://twitter.com/branighangroup' },
  ]

  const platformIcons = {
    whatsapp: <FaWhatsapp className="h-6 w-6" />,
    facebook: <FaFacebookF className="h-6 w-6" />,
    instagram: <FaInstagram className="h-6 w-6" />,
    linkedin: <FaLinkedinIn className="h-6 w-6" />,
    twitter: <FaTwitter className="h-6 w-6" />,
  }

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: isDarkMode ? '#1F2937' : '#F9FAFB',
        color: isDarkMode ? '#F9FAFB' : '#1F2937',
      }}
    >
      <Navbar />
      <motion.div
        className="flex-1 py-19 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar: Contact Info and Social Links */}
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={`text-xl md:text-2xl font-bold mb-4 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
              Contact Information
            </h2>
            <ul className="space-y-2 mb-6">
              <li className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <strong>Email:</strong> info@branighangroup.ke
              </li>
              <li className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <strong>Phone:</strong>  +254 704 221777
              </li>
              <li className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <strong>Address:</strong> Norfolk Towers NAIROBI East Africa 00200
              </li>
            </ul>
            <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded ${isDarkMode ? 'bg-card-dark' : 'bg-card-light'}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {platformIcons[social.platform]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Main Content: Contact Header and Chatbot */}
          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
              Contact Us
            </h1>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Have questions? Chat with us directly using the chatbot below or reach out via email or phone.
            </p>
            <div
              className={`rounded-lg p-6 ${isDarkMode ? 'bg-card-dark' : 'bg-card-light'}`}
            >
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}>
                Chat with Us
              </h2>
              <div id="chatbot-container">
                {/* Chatbot widget will be embedded here by the script */}
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Loading chatbot... 
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default Contact