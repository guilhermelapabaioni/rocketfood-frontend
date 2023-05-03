import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  color: ${({ theme }) => theme.COLORS_LIGHT.light_100};
  font-family: ${({ theme }) => theme.FONTS_FAMILY.poppins};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  text-align: center;
  
  display: flex;
  align-items: center;
  gap: .2rem;
  
  cursor: pointer;
`