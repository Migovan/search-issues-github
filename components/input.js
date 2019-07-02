import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
    padding: 10px;
    margin: 5px 10px;
    border: 1px solid #dddddd;
    background: #fff;
    color: #808080;
    outline: none;
    cursor: text;
    ::-webkit-input-placeholder { color: #d6d3d3; }
    :-ms-input-placeholder { color: #d6d3d3; }
    ::-ms-input-placeholder { color: #d6d3d3; }
    ::placeholder { color: #d6d3d3; } 
`;

const Button = ({ value, onChange, children, placeholder = '' }) =>
  <Input  value={value}
          onChange={onChange}
          type={'text'} 
          placeholder={placeholder}>{children}</Input>

Button.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Button
