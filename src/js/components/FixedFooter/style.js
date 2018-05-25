import styled from 'styled-components';

export const Footer = styled.footer`
  background: #fff;
  @media (min-width: 768px) {
    display: none;
  }
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 48px;
`;

export const Field = styled.div`
  flex: 1;
`;

export const FooterWrap = styled.div`
  position: relative;
  height: 48px;
  margin-top: 1rem;
`;

export const OpenModalArea = styled.div`
  background: #2196f3;
  color: #fff;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
