import styled, { css } from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  background: #fff;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.span`
  display: flex;
  padding: 0 0.5rem;
`;

export const TextWrap = styled.span`
  width: 100%;
  ${props =>
    props.line &&
    css`
      text-decoration: line-through;
      color: #ccc;
    `};
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ccc;
  align-items: center;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  font-size: 0.75rem;
  color: #757575;
  padding-top: 0.5rem;
`;

export const AreaSeparator = styled.div`
  width: 50%;
  ${props =>
    props.line &&
    css`
      border-left: 1px solid #ccc;
      padding-left: 0.5rem;
    `};
`;
