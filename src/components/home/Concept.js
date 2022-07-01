import styled from "styled-components";

const Sconcept = styled.div`
  width: 100%;
  height: 600px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  position: relative;
`;

const CTitle = styled.div`
  max-width: 1499px;
  width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  position: absolute;
  top: 40px;
`;

const Stitle = styled.p`
  font-size: 32px;
  font-weight: 600;
  position: absolute;
  line-height: 50px;
  left: 240px;
  top: 120px;
`;

const Atitle = styled.h3`
  position: absolute;
  top: 250px;
  left: 240px;
  line-height: 34px;
`;

export const Concept = () => {
  return (
    <Sconcept>
      <CTitle>
        <PTitle>CONCEPT</PTitle>
        <Stitle>
          LET'S GO WHEREVER
          <br></br> YOU WANT TO GO.
        </Stitle>
        <Atitle>
          EXCLUSIVE JAPAN inc.은 매일 진화하는 자동차 업계에서 최신 기술로 높은
          <br></br>성능을 추구한 제품 개발을 통해 여러분의 더 나은 자동차
          라이프를 지원합니다.
        </Atitle>
      </CTitle>
    </Sconcept>
  );
};
