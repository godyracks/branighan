export function useNavbarAnimations() {
  return {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    mobileMenu: {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: '100%' },
      transition: { type: 'spring', stiffness: 400, damping: 25 },
    },
    overlay: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
    },
  };
}