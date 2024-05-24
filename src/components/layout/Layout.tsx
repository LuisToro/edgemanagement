import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-container">
        <main className="container">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
