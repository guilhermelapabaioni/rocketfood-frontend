import styled from "styled-components";

export const Container = styled.label`
  color: ${({theme}) => theme.COLORS_LIGHT.light_400};
  font-family: ${({theme}) => theme.FONTS_FAMILY.roboto};
  font-size: 1.6rem;

  text-align: left;
`