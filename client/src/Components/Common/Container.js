import styled from "styled-components";

export const FullWidthContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const Container = styled.div`
  flex: 1;
  height: 90%;
  @media (max-width: 768px) {
    height: 90%;
  }
  background-color: white;
  border: 4px solid rgba(164, 53, 194, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
`;
