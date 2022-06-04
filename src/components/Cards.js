import React from 'react';
import Card from './Card';

import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

const cards = [
  {
    id: 1,
    title: '24시간 실시간 챠트제공',
    image: image1,
    text: '24시간 상담지원, 항상 업데이트되는 안정적인 차트반영으로 다양한데이터제공',
  },
  {
    id: 2,
    title: '누구든지 쉽고 빠르게',
    image: image2,
    text: '암호화폐 선물 시장의 유동성을 신속히 반영! pc 와 모바일 사용자를 위한 전문화된 플랫폼',
  },
  {
    id: 3,
    title: '유저 자산의 안전한 보호 시스템',
    image: image3,

    text: '라임빗 자체 보안솔루션 도입으로 웰렛에 담긴 지갑을 안전하게 보호합니다.',
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, text, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
