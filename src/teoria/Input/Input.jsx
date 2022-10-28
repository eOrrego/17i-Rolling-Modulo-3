import React from 'react';

const Input = ({ className, type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className={className} />
  );
};

export default Input;
