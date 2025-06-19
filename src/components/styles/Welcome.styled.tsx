import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;

  @media (max-width: 932px) {
    margin-bottom: 1.5rem;
  }

  div {
    @media (min-width: 1024px) {
      flex-basis: 50%;
    }
  }
`;

export const PreWrapper = styled.div`
  text-align: center;
`;

export const PreImg = styled.pre`
  font-family: "Classic Console Neue", monospace;
  font-size: 1rem;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
  max-width: 100%;
  margin: 0;
  padding: 0.5rem 0;

  @media (max-width: 620px) {
    font-size: 0.75rem;
    padding: 0.25rem 0;
  }
`;

export const PreName = styled.pre`
  font-family: "Classic Console Neue", monospace;
  font-size: 1.1rem;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
  max-width: 100%;
  margin: 0;
  padding: 0.5rem 0;
  display: block;

  @media (max-width: 620px) {
    display: none;
  }
`;

export const PreNameMobile = styled.pre`
  font-family: "Classic Console Neue", monospace;
  font-size: 0.9rem;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
  max-width: 100%;
  margin: 0;
  padding: 0.5rem 0;
  display: none;

  @media (max-width: 620px) {
    display: block;
  }
`;

export const Seperator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;
