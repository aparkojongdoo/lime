import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h1>
          Lime<span className="primary">Bit</span>
        </h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="/">홈</a>
          </li>

          <li>
            <a href="/Using.html">이용방법</a>
          </li>
          <li>
            <a href="https://lime-bit.com/register?st=3E2DAD8A77">시작하기</a>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#333' }} />
          ) : (
            <FaBars size={20} style={{ color: '#333' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
