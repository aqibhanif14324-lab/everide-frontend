import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MobileBottomMenu from '../SubHeaders/MobileBottomMenu';

const Layout = ({ children , hideHeader = false  , isMobileMenuOpen=false ,isHideTopHeader=false }) => {
  return (
    <div>
     <Header hideHeader={hideHeader} isHideTopHeader={isHideTopHeader} />

      {children}
      <Footer />
      <MobileBottomMenu isMobileMenuOpen={isMobileMenuOpen}/>
    </div>
  );
};

export default Layout;
