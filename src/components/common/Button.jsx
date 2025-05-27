import { forwardRef, useState } from 'react'
import { LucideArrowRight } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'

const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      onClick,
      disabled = false,
      className = '',
      isSelected = false,
      ...props
    },
    ref
  ) => {
    const { isDarkMode } = useTheme()
    const [isAnimating, setIsAnimating] = useState(false)

    const baseStyles =
      'flex items-center justify-center rounded-[24px] font-medium cursor-pointer transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2'

    const disabledStyles = 'disabled:opacity-60 disabled:cursor-not-allowed'

    const sizeStyles = {
      sm: 'h-[36px] px-4 text-[13px]',
      md: 'h-[42px] px-5 text-[14px]',
      lg: 'h-[48px] px-6 text-[16px]',
    }

    const variantStyles = {
      primary: isDarkMode
        ? 'bg-accent-dark text-text-dark hover:bg-accent-dark/80 focus:ring-accent-dark focus:ring-offset-background-dark'
        : 'bg-accent-light text-text-dark hover:bg-accent-soft focus:ring-accent-soft focus:ring-offset-background-light',
      secondary: isDarkMode
        ? 'bg-secondary text-text-dark hover:bg-secondary/80 focus:ring-secondary focus:ring-offset-background-dark'
        : 'bg-secondary text-text-dark hover:bg-secondary/80 focus:ring-secondary focus:ring-offset-background-light',
      outline: isDarkMode
        ? 'bg-transparent border border-accent-dark text-contrast-dark hover:bg-border-dark/10 focus:ring-accent-dark focus:ring-offset-background-dark'
        : 'bg-transparent border border-accent-light text-contrast-light hover:bg-border-light/10 focus:ring-accent-light focus:ring-offset-background-light',
      filters_primary: isDarkMode
        ? 'bg-accent-dark text-text-dark border-accent-dark hover:bg-accent-dark/80 focus:ring-accent-dark focus:ring-offset-background-dark'
        : 'bg-accent-light text-text-light border-accent-light hover:bg-accent-light/80 focus:ring-accent-light focus:ring-offset-background-light',
      filters_secondary: isSelected
        ? isDarkMode
          ? 'bg-accent-dark text-text-dark border-accent-dark hover:bg-accent-dark/80 focus:ring-accent-dark focus:ring-offset-background-dark'
          : 'bg-accent-light text-text-light border-accent-light hover:bg-accent-light/80 focus:ring-accent-light focus:ring-offset-background-light'
        : isDarkMode
        ? 'bg-transparent text-text-dark border-border-dark hover:bg-accent-dark/10 focus:ring-border-dark focus:ring-offset-background-dark'
        : 'bg-transparent text-text-light border-contrast-light hover:bg-accent-light/10 focus:ring-contrast-light focus:ring-offset-background-light',
      filters_outline: isDarkMode
        ? 'bg-transparent text-border-dark border-2 border-border-dark hover:bg-border-dark/10 hover:text-border-dark/80 focus:ring-border-dark focus:ring-offset-background-dark'
        : 'bg-transparent text-contrast-light border-2 border-contrast-light hover:bg-contrast-light/10 hover:text-contrast-light/80 focus:ring-contrast-light focus:ring-offset-background-light',
    }

    const buttonBreathVariants = {
      rest: {
        scale: 1,
        boxShadow: 'none',
      },
      breathe: {
        scale: [1, 1.05, 1, 1.05, 1, 1.05, 1, 1.05, 1, 1.05, 1],
        transition: {
          duration: 2.5,
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          ease: 'easeInOut',
        },
      },
      hover: {
        boxShadow: isDarkMode
          ? '0 4px 12px rgba(249, 250, 251, 0.2)'
          : '0 4px 12px rgba(31, 41, 55, 0.2)',
        transition: { duration: 0.2 },
      },
      disabled: {
        scale: 1,
        boxShadow: 'none',
      },
    }

    const handleClickOrHover = () => {
      if (!disabled && !isAnimating) {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 2500)
      }
    }

    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`}
        onClick={
          onClick
            ? () => {
                handleClickOrHover()
                onClick()
              }
            : handleClickOrHover
        }
        disabled={disabled}
        initial="rest"
        animate={disabled ? 'disabled' : isAnimating ? 'breathe' : 'rest'}
        whileHover={disabled ? 'disabled' : 'hover'}
        variants={buttonBreathVariants}
        {...props}
      >
        {children}
        {variant === 'primary' && <LucideArrowRight className="inline ml-2 h-5 w-5" />}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button