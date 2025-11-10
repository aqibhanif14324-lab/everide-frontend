import React, { useEffect, useState } from 'react';
import "./style.css";
import { TopHeader } from '../SubHeaders/TopHeader';
import BottomHeader from '../SubHeaders/BottomHeader';
import MainHeader from '../SubHeaders/MainHeader';
import MiddleHeader from '../SubHeaders/MiddleHeader/MiddleHeader';

const Header = ({ hideHeader = false , isHideTopHeader}) => {
  const [showTopHeader, setShowTopHeader] = useState(true);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      // Clear any scheduled updates to prevent flicker
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const scrollY = window.scrollY;

        // Only update if visibility actually changes
        setShowTopHeader(prev => {
          if (scrollY < 50 && !prev) return true;
          if (scrollY >= 50 && prev) return false;
          return prev;
        });
      }, 50); // debounce: wait 50ms before applying the update
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (hideHeader) return null;

  return (
    <div className="super_header_container">
      {showTopHeader && !isHideTopHeader && (
        <div className="top_header_container">
          <TopHeader />
        </div>
      )}
      <MainHeader />
      <MiddleHeader />
      <BottomHeader />
    </div>
  );
};

export default Header;
