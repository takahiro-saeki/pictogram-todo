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
  max-height: 340px;
  background: #fff;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 1rem;
`;

export const TextAreaField = styled.textarea`
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  height: 200px;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const ModalHeader = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin: 0 0 0.5rem 0;
  color: #616161;
`;
