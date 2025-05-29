import { useState, useEffect } from 'react';

export function usePropertySlideshow(properties, interval = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
    }, interval);
    return () => clearInterval(timer);
  }, [properties.length, interval]);

  return { currentIndex, currentProperty: properties[currentIndex] };
}