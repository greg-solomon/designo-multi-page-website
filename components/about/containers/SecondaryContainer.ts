import styled from "styled-components";

export const SecondaryContainer = styled.section<{
  reverse: boolean;
  position: string;
}>`
  width: 100%;
  max-width: 1110px;
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 87.5%;
    min-width: 689px;
    border-radius: 15px;
    margin-top: 7.5rem;
  }

  .display-img {
    max-height: 320px;
    object-fit: cover;
    object-position: ${({ position }) => position};
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

    .display-img {
      height: 100%;
      max-height: 100%;
    }
  }
`;

export const SecondaryContainerContent = styled.div`
  background-color: ${({ theme }) => theme.primary.cool};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  overflow: hidden;
  position: relative;
  padding: 5rem 1.5rem;
  h1 {
    color: ${({ theme }) => theme.primary.main};
  }

  .backdrop-img {
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -1;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 4.5rem 1.5rem;
    div {
      width: 85%;
    }
  }
`;
