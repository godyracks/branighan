import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideChevronDown, LucideHeart } from 'lucide-react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import Input from '../common/Input';
import SlidingCard from './SlidingCard';
import { usePropertySlideshow } from '../../hooks/usePropertySlideshow';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { containerVariants, itemVariants, scrollPromptVariants, heartVariants, slideVariants } from '../../animations/heroAnimations';

// Default properties (can be overridden via props)
const defaultProperties = [
  {
    name: 'Luxury Villa in Nairobi',
    image: 'https://i.pinimg.com/736x/65/19/b2/6519b25a5dbbe6387b0a7166bd777b9f.jpg',
    location: 'Karen, Nairobi',
    description: '4BR villa with modern finishes and private garden.',
  },
  {
    name: 'Beachfront Home in Mombasa',
    image: 'https://i.pinimg.com/736x/25/30/43/253043c53e1104838cf001a28452a543.jpg',
    location: 'Nyali, Mombasa',
    description: '3BR home with ocean view and swimming pool.',
  },
  {
    name: 'Apartment in Westlands',
    image: 'https://i.pinimg.com/736x/65/19/b2/6519b25a5dbbe6387b0a7166bd777b9f.jpg',
    location: 'Westlands, Nairobi',
    description: '2BR minimalist apartment with city view.',
  },
  {
    name: 'Family House in Kisumu',
    image: 'https://i.pinimg.com/736x/25/30/43/253043c53e1104838cf001a28452a543.jpg',
    location: 'Milimani, Kisumu',
    description: 'Spacious 5BR house ideal for large families.',
  },
];

const Hero = ({
  className,
  properties = defaultProperties,
  title = 'Discover Premium Modern Homes',
  description = 'Explore minimalist, luxury properties across Kenya',
  searchPlaceholder = 'Search properties...',
  buttons = [
    {
      to: '/houses',
      variant: 'primary',
      size: 'lg',
      className: 'w-full sm:min-w-[220px] bg-[#D4A373] hover:bg-[#c4975f] active:bg-[#b3834e] text-white',
      label: 'Browse Homes',
    },
    {
      to: '/designs',
      variant: 'outline',
      size: 'lg',
      className: 'w-full sm:min-w-[220px]',
      label: 'View Designs',
    },
    {
      to: '/sell-your-house',
      variant: 'outline',
      size: 'lg',
      className: 'w-full sm:min-w-[220px]',
      label: 'Sell Your Property',
    },
  ],
}) => {
  const { isDarkMode } = useTheme();
  const { currentIndex, currentProperty } = usePropertySlideshow(properties);
  const scrollToSection = useScrollToSection();

  return (
    <section
      className={`w-full flex flex-col items-center justify-center text-center min-h-[79vh] pt-[80px] sm:pt-[96px] py-12 sm:py-16 lg:pt-28 ${className}`}
      style={{
        background: isDarkMode
          ? `linear-gradient(135deg, rgba(31, 41, 55, 0.7), rgba(17, 24, 39, 0.7)), url('https://i.pinimg.com/736x/11/1e/b7/111eb70b83d4f7190ee0ec2ad27da56f.jpg') center/cover no-repeat`
          : '#F9FAFB',
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
          <Input placeholder={searchPlaceholder} />
        </motion.div>

        <motion.h1
          className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: isDarkMode
              ? 'linear-gradient(to right, #F9FAFB, #D1D5DB)'
              : 'linear-gradient(to right, #1F2937, #4B5563)',
          }}
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-sm xs:text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-text-light dark:text-text-dark max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mx-auto"
          variants={itemVariants}
        >
          {buttons.map((btn, index) => (
            <Link key={index} to={btn.to} className="w-full sm:w-auto">
              <Button
                variant={btn.variant}
                size={btn.size}
                className={btn.className}
              >
                {btn.label}
              </Button>
            </Link>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 text-xs xs:text-sm sm:text-base font-medium text-text-light dark:text-text-dark flex justify-start gap-2"
          variants={itemVariants}
        >
          <motion.span className="inline-flex items-center gap-2">
            Featured
            <motion.span variants={heartVariants} animate="animate">
              <LucideHeart
                className={`h-5 w-5 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}
                fill="none"
                strokeWidth={1.5}
              />
            </motion.span>
          </motion.span>
        </motion.div>

        <motion.div className="mt-4 mb-12 w-[90%] mx-auto h-[160px] sm:h-[170px] overflow-hidden relative z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SlidingCard property={currentProperty} />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
          variants={scrollPromptVariants}
          animate="animate"
          onClick={scrollToSection}
        >
          <LucideChevronDown
            className={`h-8 w-8 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
  description: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      variant: PropTypes.string,
      size: PropTypes.string,
      className: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default Hero;