import React from 'react';
import './Hero.css';
import Crypto from './assets/hero-img.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <p>뛰어난 거래. 더욱 발전된 독보적 시스템!</p>
          <h1>언제, 어디에서나, 우린 모바일에서도 투자할 수 있습니다.</h1>
          <p>가장 안전한 마진거래 플랫폼에서 거래하세요</p>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
