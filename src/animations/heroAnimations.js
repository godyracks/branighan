
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const scrollPromptVariants = {
  animate: {
    y: [0, 12, 0],
    transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
  },
};

export const heartVariants = {
  animate: {
    rotate: [-10, 10, -10],
    transition: { repeat: Infinity, duration: 1.2, ease: 'easeInOut' },
  },
};

export const slideVariants = {
  initial: { x: '100%' },
  animate: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { x: '-100%', transition: { duration: 0.5, ease: 'easeOut' } },
};