import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.2;
`;

export const Button = styled.button`
  padding: 5px;
  font-size: 14px;

  border: 1px solid #b5b5b5;
  border-radius: 5px;
  background-color: #d5e3e1;
  transition: var(--animation-global);

  &:hover,
  &:focus,
  &:active {
    background-color: #f3f5ce;
  }
`;

export const ToastForm = styled(Form)`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const ToastInput = styled(Field)`
  font-size: 16px;
  line-height: 1.4;

  padding: 4px;
  border: 1px solid #cccaca;
  border-radius: 5px;
`;
