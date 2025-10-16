import React from 'react';

export const Button = ({ 
  children, 
  onClick, 
  variant = 'default', 
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg transition font-medium';
  
  const variants = {
    default: 'bg-primary-50 text-primary-700 hover:bg-primary-100',
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    active: 'bg-primary-600 text-white',
    icon: 'p-2 border border-primary-200 hover:bg-primary-50'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}` }
      {...props}
    >
      {children}
    </button>
  );
};
