import styled from "styled-components";

const SubBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubBox = styled.div`
  width: 94%;
  height: 500px;
  background-color: black;
  position: absolute;
  margin-top: 150px;
`;

const MProduct = styled.div`
  width: 100%;
  height: 70vh;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProductBox = styled.div``;

const Title = styled.h3``;

const ItemBox = styled.div``;

const ItemsTitle = styled.h3``;

const ItemNum = styled.p``;

export const Product = () => {
  return (
    <div>
      <SubBanner>
        <SubBox></SubBox>
      </SubBanner>
    </div>
  );
};
