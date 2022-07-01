import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  color: "#141414",
  padding: "0 55px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;    
}




a{
    text-decoration: none;
    color:#141414

}

`;
