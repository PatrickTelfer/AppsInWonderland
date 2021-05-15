import styled from "styled-components";

export const FullWidthContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

export const Container = styled.div`
  width: 80%;
  height: 80%;
  @media (max-width: 768px) {
    width: 100%;
    height: 80%;
  }
  background-color: white;
  border: 4px solid rgba(164, 53, 194, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
`;
