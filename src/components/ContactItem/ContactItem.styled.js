import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 7px 5px 10px;
  border: 1px solid #CCD1D1;
  background-color: #fef9e7;
  font-size: 13px;
  font-weight: 700;
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px;
  background-color: #fae5d3;
  border: 1px solid #eb984e;
  border-radius: 3px;
  box-shadow: 1px 1px 1px #85929e;
  transition: all 500ms ease;
  :hover {
    cursor: pointer;
    background-color: #f5b7b1;
    border: 1px solid #e74c3c;
  }
`;

export const Span = styled.span`
  padding-left: 5px;
  font-weight: 400;
`;
