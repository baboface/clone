import styled from "styled-components";

const BannerBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: gray;
  /* position: relative; */
`;
const BgBox = styled.div`
  width: 50%;
  height: 50%;
  background-color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CountNum = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-left: 250px;
`;
const ProdutBox = styled.h3`
  font-size: 32px;
  font-weight: 600;
`;
const NumBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin-bottom: 50px;
  bottom: 0;
  right: 0;
`;
const Num = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  margin-top: 40px;
  margin-right: 20px;
`;

export const MainBanner = () => {
  return (
    <BannerBox>
      <BgBox>
        <CountNum>1</CountNum>
        <ProdutBox>VIEW PRODUCT</ProdutBox>
      </BgBox>
      <NumBox>
        <Num>1</Num>
        <Num>2</Num>
        <Num>3</Num>
        <Num>4</Num>
      </NumBox>
    </BannerBox>
  );
};
