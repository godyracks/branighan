import { useState, useEffect } from 'react';

export function useNavbarBlur(scrollThreshold = 50) {
  const [isBlurry, setIsBlurry] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBlurry(window.scrollY > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return isBlurry;
}