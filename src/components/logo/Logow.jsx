import React from 'react';
import logo from '../../../assets/logo/logowhite.svg'; 

const LogoWhite = ({ src = logo, alt = 'Voyage Craft Logo' }) => {
  return (
    <div className="max-w-sm mx-auto border-0 rounded-lg overflow-hidden shadow-none p-0">
      <img 
        className="w-full h-auto object-cover rounded-lg border-0 shadow-none" 
        src={src} 
        alt={alt} 
        aria-labelledby="logo-description"
      />
      <p 
        id="logo-description" 
        className="sr-only" 
      >
        {alt}
      </p>
    </div>
  );
};

export default LogoWhite;
