import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyled";

const SHeader = styled.div`
  width: 100%;
  max-width: 100%;
  height: 120px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
`;
const Logo = styled.h3`
  font-size: 14px;
  font-weight: 800;
  a {
    color: ${mainStyle.color};
  }
`;
const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.div`
  margin-left: 30px;
  font-size: 14px;
  font-weight: 500;

  svg {
    font-size: 32px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>exclusive-japan.com</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </Menu>
        <Menu>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faBars} />
          </Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
