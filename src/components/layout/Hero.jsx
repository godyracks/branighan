import { useTheme } from '../../context/ThemeContext';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LucideChevronDown, LucideHeart } from 'lucide-react';
import Button from '../common/Button';
import Input from '../common/Input';
import SlidingCard from './SlidingCard'; 

const PropertyCounter = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      width: '100%',
      transition: { duration: 2, ease: 'easeOut' },
    });
  }, [controls]);

  return (
    <div className="flex items-center justify-center space-x-3 mt-6 sm:mt-8">
      <motion.div
        className="h-1.5 bg-border-light dark:bg-border-dark rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={controls}
      >
        <div className="h-full bg-gradient-to-r from-accent-light to-accent-dark" />
      </motion.div>
      <span className="text-[11px] italic font-medium text-text-light dark:text-text-dark">
        500+ Premium Properties
      </span>
    </div>
  );
};

const Hero = ({ className }) => {
  const { isDarkMode } = useTheme();
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = [
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

  // Animation for sliding cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
    }, 5000); // Change property every 5 seconds
    return () => clearInterval(interval);
  }, [properties.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const scrollPromptVariants = {
    animate: {
      y: [0, 12, 0],
      transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
    },
  };

  const heartVariants = {
    animate: {
      rotate: [-10, 10, -10],
      transition: { repeat: Infinity, duration: 1.2, ease: 'easeInOut' },
    },
  };

  const slideVariants = {
    initial: { x: '100%' },
    animate: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { x: '-100%', transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className={`w-full flex flex-col items-center justify-center text-center min-h-[70vh] pt-[62px] py-12 sm:py-16 lg:pt-28 ${className}`}
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
          <Input placeholder="Search properties..." />
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
          <Link to="/houses">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[180px] xs:min-w-[200px] sm:min-w-[220px] bg-[#D4A373] hover:bg-[#c4975f] active:bg-[#b3834e] text-white"
            >
              Browse Homes
            </Button>
          </Link>
          <Link to="/designs">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[180px] xs:min-w-[200px] sm:min-w-[220px]"
            >
              View Designs
            </Button>
          </Link>
          <Link to="/sell-your-house">
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
          className="mt-2 text-xs xs:text-sm sm:text-base font-medium text-text-light dark:text-text-dark flex justify-start gap-1"
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

        {/* Sliding cards */}
        <motion.div className="mt-4 mb-12 w-[90%] mx-auto h-[150px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SlidingCard property={properties[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
          variants={scrollPromptVariants}
          animate="animate"
          onClick={handleScrollDown}
        >
          <LucideChevronDown
            className={`h-8 w-8 ${isDarkMode ? 'text-text-dark' : 'text-text-light'}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;