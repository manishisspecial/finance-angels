import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Add page transition class to body
    document.body.classList.add('page-transition');
    
    // Remove the class after animation completes
    const timer = setTimeout(() => {
      document.body.classList.remove('page-transition');
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 