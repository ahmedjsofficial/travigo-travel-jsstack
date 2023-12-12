import React from 'react';
import image from '../../images/arb.jpg';

export default function Footer() {
  return (
    <img
      src={image}
      alt="Figure not found"
      className="h-screen w-screen object-cover"
    />
  );
}
