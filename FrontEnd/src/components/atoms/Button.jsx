/* eslint-disable react/prop-types */

import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { classNames } from '../../utils/constant.js';
const ButtonStyles = styled.button`
  transition: all 0.3s;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  padding: 1.3rem 2rem;
  border-radius: 5px;
  text-align: center;
  background-color: ${(props) => props.theme.primary};
  ${(props) =>
    props.kind === 'small' &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: white;
      border: 1px solid black;
      padding: 8px 10px;
    `};
  ${(props) =>
    props.kind === 'success' &&
    css`
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.success};
      border: 1px solid white;
      padding: 13px 25px;
      margin: 1rem 0;
    `};
  ${(props) =>
    props.disabled === true &&
    css`
      cursor: not-allowed;
      display: flex;
      background-color: rgba(21, 70, 61, 0.763);
      justify-content: center;
      align-items: center;
      gap: 10px;
      height: 43px;
    `};
  &:active {
    background-color: ${(props) => props.theme.success};
  }
  &:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }
`;
const Button = ({
  type = 'button',
  children,
  kind = '',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  if (props.to !== '' && typeof props.to === 'string') {
    return (
      <NavLink
        to={props.to}
        className={classNames('bg-primary rounded-xl h-fit', className)}
      >
        <ButtonStyles
          disabled={disabled}
          onClick={onClick}
          type={type}
          kind={kind}
          {...props}
        >
          {children}
        </ButtonStyles>
      </NavLink>
    );
  }
  return (
    <ButtonStyles
      disabled={disabled}
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </ButtonStyles>
  );
};

export default memo(Button);