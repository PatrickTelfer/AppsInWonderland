import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #47d1c2;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const SubTitle = styled.h3`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #47d1c2;
  margin-bottom: 0.5em;
  margin-top: 0;
  @media (max-width: 768px) {
    font-size: 0.75em;
    margin-bottom: 0;
  }
`;
