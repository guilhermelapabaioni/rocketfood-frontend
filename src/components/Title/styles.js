import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  > h2{
      font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
      font-weight: 700;
      font-size: 2.2rem;
      line-height: 4rem;
      color: ${({ theme }) => theme.COLORS_LIGHT.light_100};
    }
`