import React, { useState, useEffect } from 'react';
import { topHeader } from '../Header/Data.jsx';
import "./style.css";

export const TopHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage >= 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`top_header container ${isScrolled ? 'scrolled' : ''}`}>
      {
        topHeader.map((item, index) => (
          <div key={index} className={`top_header_item ${item.hide || isScrolled ? 'hide' : ''}`}>
            <span>
              {item.icon}
            </span>
            <p>{item.title}</p>
          </div>
        ))
      }
    </div>
  );
}
