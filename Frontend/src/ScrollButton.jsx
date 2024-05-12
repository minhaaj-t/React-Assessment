import React, { useState } from 'react';
import './App.css'; // You need to create this CSS file for styling

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to handle scrolling and toggle visibility of the button
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-button ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      <span>→</span>
    </button>
  );
};

export default ScrollButton;
