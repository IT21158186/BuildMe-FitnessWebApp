import React from 'react';

const Avatar = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="h-8 w-8 rounded-full"
    />
  );
};

export default Avatar;
