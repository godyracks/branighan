import { useTheme } from '../../context/ThemeContext'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LucideChevronDown } from 'lucide-react'
import Button from '../common/Button'
import Input from '../common/Input'

const PropertyCounter = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      width: '100%',
      transition: { duration: 2, ease: 'easeOut' },
    })
  }, [controls])

  return (
    <div className="flex items-center justify-center space-x-3 mt-6 sm:mt-8">
      <motion.div
        className="h-1.5 bg-border-light dark:bg-border-dark rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={controls}
        style={{ width: '120px' }}
      >
        <div className="h-full bg-gradient-to-r from-accent-light to-accent-dark" />
      </motion.div>
      <span className="text-xs sm:text-sm font-medium text-text-light dark:text-text-dark">
        500+ Premium Properties
      </span>
    </div>
  )
}

const Hero = ({ className }) => {
  const { isDarkMode } = useTheme()
  const [featuredIndex, setFeaturedIndex] = useState(0)

  const featuredProperties = [
    'Exclusive Luxury Villa in Nairobi',
    'Modern Beachfront Home in Mombasa',
    'Minimalist Apartment in Westlands',
    'Spacious Family House in Kisumu',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredProperties.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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

  const featuredVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  }

  const scrollPromptVariants = {
    animate: {
      y: [0, 10, 0],
      transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
    },
  }

  return (
    <section
      className={`w-full flex flex-col items-center justify-center text-center min-h-[80vh] pt-[72px] py-12 sm:py-16 lg:pt-28 ${className}` }
      style={{
        background: isDarkMode
          ? `linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9)), url('https://i.pinimg.com/736x/65/19/b2/6519b25a5dbbe6387b0a7166bd777b9f.jpg') center/cover no-repeat`
          : `linear-gradient(135deg, rgba(249, 250, 251, 0.9), rgba(229, 231, 235, 0.9)), url('https://i.pinimg.com/736x/65/19/b2/6519b25a5dbbe6387b0a7166bd777b9f.jpg') center/cover no-repeat`,
        color: isDarkMode ? '#F9FAFB' : '#1F2937',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
          <Input />
        </motion.div>
        <motion.h1
          className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          variants={itemVariants}
        >
          Discover Premium Modern Homes
        </motion.h1>
        <motion.p
          className="text-sm xs:text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-text-light dark:text-text-dark max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Explore minimalist, luxury properties across Kenya
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-[95%] sm:w-auto mx-auto"
          variants={itemVariants}
        >
          <Link to="/houses" aria-label="Browse available houses in Kenya">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[180px] xs:min-w-[200px] sm:min-w-[220px]"
            >
              Browse Houses
            </Button>
          </Link>
          <Link to="/designs" aria-label="View minimalist home designs">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[180px] xs:min-w-[200px] sm:min-w-[220px]"
            >
              View Designs
            </Button>
          </Link>
          <Link to="/sell-your-house" aria-label="Sell your property in Kenya">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[180px] xs:min-w-[200px] sm:min-w-[220px]"
            >
              Sell Your Property
            </Button>
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <PropertyCounter />
        </motion.div>
        <motion.div
          className="mt-4 text-xs sm:text-sm font-medium text-text-light dark:text-text-dark"
          variants={itemVariants}
        >
          Trusted by 10,000+ Clients
        </motion.div>
        <motion.div
          className="mt-4 text-xs xs:text-sm sm:text-base font-medium text-text-light dark:text-text-dark"
          variants={itemVariants}
        >
          <motion.span
            key={featuredIndex}
            variants={featuredVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-live="polite"
          >
            Featured: {featuredProperties[featuredIndex]}
          </motion.span>
        </motion.div>
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          variants={scrollPromptVariants}
          animate="animate"
        >
          <LucideChevronDown
            className={`h-6 w-6 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}
            aria-label="Scroll down to explore more"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero