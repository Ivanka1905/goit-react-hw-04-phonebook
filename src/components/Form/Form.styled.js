import styled from 'styled-components';

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 340px;
  padding: 15px;
  border: 1px solid #d5d8dc;
  border-radius: 5px;
  box-shadow: 3px 2px 2px #85929e;
  background-color: #ebf5fb;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #d5d8dc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 150px;
  margin-left: auto;
  margin-right: 0;
  padding: 6px;
  background-color: #abebc6;
  border: 1px solid #82e0aa;
  border-radius: 5px;
  box-shadow: 2px 1px 1px #85929e;
  transition: all 500ms ease;
  :hover {
    cursor: pointer;
    background-color: #f9e79f;
    border: 1px solid #f4d03f;
  }
`;
