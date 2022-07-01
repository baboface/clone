import styled from "styled-components";

const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
`;
const Brand = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Company = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  border-right: 2px solid black;
`;
const Contanct = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
`;
const MannerBg = styled.div``;
const ExBg = styled.div``;
const YahooBg = styled.div``;
const AmazonBg = styled.div``;
const MenuWrap = styled.div``;
const Menu = styled.div``;
const CopyTitle = styled.div``;

export const Footer = () => {
  return (
    <div>
      <ConWrap>
        <Brand>
          <Company>1</Company>
          <Contanct>2</Contanct>
        </Brand>
        <MannerBg>
          <ExBg></ExBg>
          <YahooBg></YahooBg>
          <AmazonBg></AmazonBg>
        </MannerBg>
        <MenuWrap>
          <Menu>BRAND</Menu>
          <Menu>PRODUCT</Menu>
          <Menu>NEWS</Menu>
          <Menu>STORE</Menu>
          <Menu>COMPANY</Menu>
          <Menu>CONTACT</Menu>
        </MenuWrap>
        <CopyTitle></CopyTitle>
      </ConWrap>
    </div>
  );
};
