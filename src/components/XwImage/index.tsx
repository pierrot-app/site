import * as React from 'react';
import './xw-image.scss';

interface ListImages {
  image: string;
  background: string;
  className: string;
}

export const XwImage = (
{
  className,
  background,
  image,
}: ListImages) => (
  <div className={`${className} xw-image`}>
    <img src={background} className="image" alt="image" />
    <img src={image} className="background" alt="background" />
  </div>
);
