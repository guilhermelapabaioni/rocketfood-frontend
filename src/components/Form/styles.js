import styled from "styled-components";

export const Container = styled.form`

  display: flex;
  flex-direction: column;
  
  padding-inline: 2rem;
`

export const Logo = styled.div`
  color: ${({ theme }) => theme.COLORS_LIGHT.light_300};
  font-family: ${({ theme }) => theme.FONTS_FAMILY.poppins};
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 140%;

  @media screen and (min-width: 768px) {
    font-size: 3.2rem
  }
`