import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  background-color: white;
  padding: 15px 15px;
  border: 2px solid rgba(164, 53, 170, 0.8);
  color: rgba(164, 53, 194, 0.8);
  transition: all 0.15s;
  margin: 0 0.3em 1.2em 0;
  font-size: 1.5em;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: rgba(164, 53, 194, 0.2);
    border-color: rgba(164, 53, 194, 0.2);
  }
  &:active {
    color: whitesmoke;
    border-color: whitesmoke;
  }
  &:disabled {
    color: rgba(164, 53, 194, 0.2);
    border-color: rgba(164, 53, 194, 0.2);
    cursor: default;
  }
  width: 30%;
  @media (max-width: 768px) {
    font-size: 1em;
    padding: 5px 5px;
    width: 80%;
  }
`;
