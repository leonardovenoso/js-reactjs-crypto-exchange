import styled from 'styled-components';

export const Modal = styled.div`
  display: ${props => props.isOpen || 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Content = styled.div`
  background-color: white;
  margin: 3.5em auto;
  padding: 1em;
  border: 1px solid #888;
  width: ${props => props.width || '80%'};
  border-radius: ${props => props.theme.border.radious};
  height: ${props => props.height || '80%'};
  position: relative;
`;

export const Close = styled.div`
  color: gray;
  float: right;
  font-size: 2em;
  font-weight: bold;
  position: absolute;
  right: 0.2em;
  top: 0;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
