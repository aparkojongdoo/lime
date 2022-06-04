import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from 'react-scroll-motion';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const Scroll = () => {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: '50px' }}>업계 최저 수수료 0.018%</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: '50px' }}>
              최고 보안솔루션! 빠른 입출금!
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: '50px' }}>24시간 라이브 지원</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <span style={{ fontSize: '40px' }}>
              <Animator animation={MoveIn(-1000, 0)}>
                신규 가입 리워드 지급! 10USDT
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>
                누구나 쉽게! 간편하게!
              </Animator>
              트레이더들의 메카
              <Animator animation={MoveOut(1000, 0)}>더 좋은 투자로</Animator>
              <Animator animation={MoveOut(-1000, 0)}>
                더 좋은 삶을 누리세요
              </Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: '40px' }}>Limebit</span>
            <br />
            <span style={{ fontSize: '30px' }}>
              Start Your Crypto Now! With the Limebit app and website, trading
              has never been easier.
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default Scroll;
