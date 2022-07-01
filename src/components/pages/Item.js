import styled from "styled-components";

const ItemWrap = styled.div`
  width: 100%;
  height: 70vh;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductBox = styled.div`
  max-width: 100%;
  width: 100%;
  background-color: beige;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 250px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  position: relative;
  padding: 100px;
  top: 0;
`;

const ItemBox = styled.div`
  position: absolute;
`;

const ItemsTitle = styled.h3``;

const ItemNum = styled.p``;

export const Item = () => {
  return (
    <ItemWrap>
      <ProductBox>
        <Title>PRODUCT</Title>
        <ItemBox>
          <ItemsTitle>ITEMS</ItemsTitle>
          <ItemNum>33</ItemNum>
        </ItemBox>
      </ProductBox>
    </ItemWrap>
  );
};
