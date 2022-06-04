import React from 'react';

import styled from 'styled-components';
import blockchain from './assets/bchain.png';
import SmallHeading from './SmallHeading';

function MainContent() {
  return (
    <MainContentStyled>
      <div className="content">
        <div className="left">
          <SmallHeading
            title={'업계 최저수수료 레버리지 선물거래 플랫폼'}
            identifier={'Before'}
          />
          <h1>
            스마트한 투자자가 선택한 혁신적인 플랫폼{' '}
            <span className="GradientText">라임빗에서 시작하세요</span>
          </h1>
          <p>
            한국어 지원되는 거래소 "라임빗" 지정가0.018%, 시장가0.036% 현존 하는
            거래소 중에 수수료 가장 저렴합니다 시작하기에서 회원가입 하시면 현재
            이벤트 진행중인 수수료 평생 50%할인 적용 받으실 수 있습니다
          </p>
        </div>
        <div className="right">
          <img src={blockchain} alt="" />
        </div>
      </div>
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;
    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;
      h1 {
        padding: 1.8rem 0;
      }
      .btns-con {
        margin-top: 3rem;
      }
    }
    .right {
      img {
        position: absolute;
        right: -11%;
        bottom: -1%;
        width: 60%;
      }
    }
  }
`;

export default MainContent;
