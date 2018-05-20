import styled from 'styled-components';

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const FormField = styled.form`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 500px;
  background: #fff;
  border-radius: 0.5rem;
`;
