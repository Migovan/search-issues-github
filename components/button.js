import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StylizedButton = styled.button`
    padding: 10px;
    margin: 15px 10px;
    border: 1px solid #dddddd;
    background-color: #dcdcdc45;
    color: #808080;
    cursor: pointer;
    outline: none;
    :hover {
      background: #24292e;
      color: #fff;
    }
`;

const Button = ({ onClick, children }) =>
  <StylizedButton onClick={onClick} type='button'>{children}</StylizedButton>

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Button
