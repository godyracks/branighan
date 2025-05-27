import { forwardRef, useState, useEffect, useRef } from 'react'
import { LucideSearch, LucideX } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

const Input = forwardRef(({ placeholder = 'Search properties in Kenya...', ...props }, ref) => {
  const { isDarkMode } = useTheme()
  const [isFocused, setIsFocused] = useState(false)
  const [recentSearches, setRecentSearches] = useState([
    'Luxury Villa Nairobi',
    'Beachfront Mombasa',
    'Apartment Westlands',
  ])
  const inputRef = useRef(null)
  const wrapperRef = useRef(null)

  const inputVariants = {
    rest: { scale: 1 },
    focus: { scale: 1.02, transition: { duration: 0.2, ease: 'easeOut' } },
  }

  const modalVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  }

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleClearAll = () => {
    setRecentSearches([])
  }

  return (
    <div className="relative w-[95%] sm:w-auto max-w-md mx-auto" ref={wrapperRef}>
      <motion.input
        ref={ref || inputRef}
        type="text"
        placeholder={placeholder}
        className={`w-full pl-10 pr-4 py-2.5 rounded-full border text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 ${
          isDarkMode
            ? 'bg-background-dark border-accent-dark text-text-dark placeholder-text-dark/60 focus:ring-accent-dark'
            : 'bg-background-light border-accent-light text-text-light placeholder-text-light/60 focus:ring-accent-light'
        }`}
        variants={inputVariants}
        initial="rest"
        whileFocus="focus"
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setTimeout(() => {
            if (!wrapperRef.current.contains(document.activeElement)) {
              setIsFocused(false)
            }
          }, 100)
        }}
        spellCheck="true"
        autoCorrect="on"
        aria-label="Search properties by location, price, or type"
        {...props}
      />
      <LucideSearch
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
          isDarkMode ? 'text-text-dark/60' : 'text-text-light/60'
        }`}
      />
      <AnimatePresence>
        {isFocused && (
          <motion.div
            className={`absolute top-full left-0 right-0 mt-2 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto border ${
              isDarkMode ? 'border-border-dark text-text-dark' : 'border-border-light text-text-light'
            }`}
            style={{
              backgroundColor: isDarkMode ? '#1F2937' : '#F9FAFB',
            }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">Recent</h3>
                {recentSearches.length > 0 && (
                  <button
                    onClick={handleClearAll}
                    className={`text-xs font-medium ${
                      isDarkMode ? 'text-text-dark/80 hover:text-secondary' : 'text-text-light/80 hover:text-primary'
                    }`}
                  >
                    Clear All
                  </button>
                )}
              </div>
              {recentSearches.length > 0 ? (
                recentSearches.map((search, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                      isDarkMode ? 'hover:bg-border-dark' : 'hover:bg-border-light'
                    }`}
                    onClick={() => {
                      inputRef.current.value = search
                      setIsFocused(false)
                    }}
                  >
                    <span className="text-sm">{search}</span>
                    <LucideX
                      className={`h-4 w-4 ${
                        isDarkMode ? 'text-text-dark/60' : 'text-text-light/60'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setRecentSearches((prev) => prev.filter((_, i) => i !== index))
                      }}
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-text-light/60 dark:text-text-dark/60">
                  No recent searches
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

Input.displayName = 'Input'

export default Input