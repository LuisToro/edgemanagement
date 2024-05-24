import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'nav-link-active' : 'nav-link';
  };
  return (
    <header>
      <div className="logo">
        <img
          className="logo-img"
          src="https://images.squarespace-cdn.com/content/v1/640bb2a094bc044ee3179f89/c965b6b3-0fe7-477a-b8c6-6e112cd691e0/Edge+Logo+-+light+rendered.png?format=1500w"
          alt="logo"
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/our-team" className={getLinkClass('/our-team')}>
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/the-group" className={getLinkClass('/the-group')}>
              The Group
            </Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
