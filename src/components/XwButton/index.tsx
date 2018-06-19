import * as React from 'react';
import './xw-button.scss';

interface XwButton {
  className: string;
  text: string;
}

export const XwButton = (
  {
    className,
    text
  }: XwButton) => (
    <div className={`${className} xw-button`}>
      <button>
        <a href="mailto:pierrot-app@edu.gobelins.fr">{text}</a>
      </button>
    </div>
);