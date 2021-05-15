import styled from "styled-components";

export const Input = styled.input`
  display: inline-block;
  background-color: white;
  padding: 15px 15px;
  border: none;
  border-bottom: 2px solid rgba(164, 53, 170, 0.8);
  color: rgba(164, 53, 170, 0.8);
  font-size: 1.5em;
  transition: all 0.15s;
  margin-bottom: 1.2em;
  text-align: center;
  &:hover {
    color: rgba(164, 53, 194, 0.6);
    border-color: rgba(164, 53, 194, 0.6);
    outline: none;
  }
  &:focus {
    color: red;
    color: rgba(164, 53, 194, 0.6);
    border-color: rgba(164, 53, 194, 0.6);
    outline: none;
  }
  &::placeholder {
    color: rgba(164, 53, 170, 0.8);
  }
  width: 50%;
  @media (max-width: 768px) {
    font-size: 1em;
    padding: 5px 5px;
    width: 80%;
  }
`;
